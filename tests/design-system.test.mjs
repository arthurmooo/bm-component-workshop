import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
const src=resolve('src');
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.isDirectory()?files(join(dir,f.name)):[join(dir,f.name)]);}
test('every shared design token used in CSS is defined',()=>{
 const tokens=readFileSync(join(src,'design-system/tokens.css'),'utf8');
 const defined=new Set([...tokens.matchAll(/(--bm-[\w-]+)\s*:/g)].map(m=>m[1]));
 for(const file of files(src).filter(f=>f.endsWith('.css'))){for(const match of readFileSync(file,'utf8').matchAll(/var\((--bm-[\w-]+)/g))assert.ok(defined.has(match[1]),`${file}: ${match[1]} is undefined`);}
});
test('public runtime graph has no workshop, demonstration fixture or storage dependency',()=>{
 const visited=new Set();
 function visit(file){if(visited.has(file))return;visited.add(file);const text=readFileSync(file,'utf8');
  assert.doesNotMatch(text,/(?:localStorage|sessionStorage)\s*\.|fetch\(/,file);
  assert.doesNotMatch(file,/(?:-demo\.|\/App\.|\/showcase\.)/);
  for(const match of text.matchAll(/(?:from\s+|import\s*)['"](\.[^'"]+)['"]/g)){
   if(match[1].endsWith('.css'))continue;
   const base=resolve(dirname(file),match[1]);const next=[base,base+'.ts',base+'.tsx',base+'.mjs'].find(p=>existsSync(p));assert.ok(next,base);visit(next);
  }
 }
 visit(join(src,'design-system/index.ts'));
 assert.ok(visited.size>10);
});
test('independent composition does not import workshop styles',()=>{
 const showcase=readFileSync(join(src,'design-system/showcase.tsx'),'utf8');
 assert.match(showcase,/from 'bm-component-workshop'/);
 assert.doesNotMatch(showcase,/import ['"]\.\.\/style\.css|components\//);
});
test('dossier composition imports the built library without component-specific styles',()=>{
 const demo=readFileSync(join(src,'dossier-demo/main.tsx'),'utf8');
 assert.match(demo,/from 'bm-component-workshop'/);
 assert.doesNotMatch(demo,/from ['"]\.\.\/components\//);
 assert.deepEqual([...demo.matchAll(/import ['"]([^'"]+\.css)['"]/g)].map(m=>m[1]),['bm-component-workshop/style.css','../design-system/showcase.css']);
});
test('shared dashboard patterns expose status KPIs, quiet filters, clear tables and nested navigation',()=>{
 const layout=readFileSync(join(src,'design-system/layout.tsx'),'utf8');
 const layoutCss=readFileSync(join(src,'design-system/layout.css'),'utf8');
 const panels=readFileSync(join(src,'design-system/panels.css'),'utf8');
 const table=readFileSync(join(src,'components/ui/data-table.tsx'),'utf8');
 const tableCss=readFileSync(join(src,'components/ui/data-table.css'),'utf8');
 const workspace=readFileSync(join(src,'design-system/workspace.tsx'),'utf8');
 const publicEntry=readFileSync(join(src,'design-system/index.ts'),'utf8');
 const surfaces=readFileSync(join(src,'components/work-surfaces.tsx'),'utf8');
 assert.match(layoutCss,/\.bm-field>\.bm-input,\.bm-field>\.app-select\{width:100%;min-height:var\(--bm-control-lg\)\}/);
 assert.match(panels,/\.filter-chips button:not\(\[aria-pressed=true\]\)\{background:var\(--bm-surface\)\}/);
 assert.doesNotMatch(table,/Reset columns|Réinitialiser les colonnes|Columns3|shared-table-tools/);
 assert.match(tableCss,/\.shared-table \.shared-column\{[^}]*background:var\(--bm-surface-muted\)/);
 assert.match(workspace,/children\?:\{id:string;label:string;icon\?:ReactNode\}\[\]/);
 assert.match(workspace,/bm-workspace-subnav/);
 assert.match(publicEntry,/AlertSurface.*WorkInbox/);
 assert.match(publicEntry,/AgendaCards/);
 assert.match(publicEntry,/DealKanban/);
 assert.match(surfaces,/wc-alert-body/);
});
test('exact workshop compositions are public and retain their atelier visual sources',()=>{
 const entry=readFileSync(join(src,'design-system/index.ts'),'utf8');
 const app=readFileSync(join(src,'App.tsx'),'utf8');
 const charts=readFileSync(join(src,'components/charts-demo.tsx'),'utf8');
 const exact={
  KpiCard:['components/kpi-card.tsx','./kpi-card.css'],
  ViewSelector:['components/view-selector.tsx','./view-selector.css'],
  PipelineChart:['components/pipeline-chart.tsx','./charts-demo.css'],
  RichTable:['components/rich-table.tsx','./advanced-table.css'],
  PlanningGantt:['components/planning-gantt.tsx','./planning-demo.css'],
  DetailDrawer:['design-system/dossier-components.tsx','../components/drawer-demo.css'],
  DepthChart:['components/charts-extra.tsx','./charts-demo.css'],
 };
 for(const [name,[file,stylesheet]] of Object.entries(exact)){
  assert.match(entry,new RegExp(`\\b${name}\\b`),`${name} must be exported by the package`);
  assert.match(readFileSync(join(src,file),'utf8'),new RegExp(stylesheet.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')),`${name} must use its atelier stylesheet`);
 }
 assert.match(app,/import \{ ViewSelector \} from "\.\/components\/view-selector"/);
 assert.match(app,/import \{ KpiCard \} from "\.\/components\/kpi-card"/);
 assert.match(charts,/import \{ PipelineChart \} from "\.\/pipeline-chart"/);
 assert.match(charts,/<PipelineChart /);
});
test('rich table selection cells and the view selector keep the restrained atelier treatment',()=>{
 const tableCss=readFileSync(join(src,'components/ui/data-table.css'),'utf8');
 const selectorCss=readFileSync(join(src,'components/view-selector.css'),'utf8');
 assert.match(tableCss,/\.shared-table thead \.selection-cell\{/);
 assert.doesNotMatch(tableCss,/\.shared-table \.selection-cell\{/);
 assert.doesNotMatch(selectorCss,/box-shadow/);
 assert.match(selectorCss,/\.view-selector\{[^}]*border:1px solid[^}]*background:#f2f1ef/);
 assert.match(selectorCss,/\.selection-surface\{[^}]*background:var\(--bm-surface\)[^}]*border:1px solid/);
});
test('work inbox exposes a full-width variant without changing its default composition',()=>{
 const component=readFileSync(join(src,'components/work-surfaces.tsx'),'utf8');
 const css=readFileSync(join(src,'components/work-cards-demo.css'),'utf8');
 const entry=readFileSync(join(src,'design-system/index.ts'),'utf8');
 assert.match(component,/wide\?:boolean/);
 assert.match(component,/wide\?' wc-demo-wide':''/);
 assert.match(css,/\.wc-demo\.wc-demo-wide\s*\{\s*max-width:\s*none;/);
 assert.match(entry,/type WorkInboxProps/);
});
test('rich table cells expose the informative atelier patterns to product tables',()=>{
 const cells=readFileSync(join(src,'components/rich-table-cells.tsx'),'utf8');
 const comparison=readFileSync(join(src,'components/comparison-charts.tsx'),'utf8');
 const entry=readFileSync(join(src,'design-system/index.ts'),'utf8');
 for(const name of ['EntityCell','ProgressCell','SparklineCell'])assert.match(entry,new RegExp(`\\b${name}\\b`));
 assert.match(cells,/advanced-company/);
 assert.match(cells,/advanced-probability-track/);
 assert.match(cells,/bm-table-spark/);
 assert.match(comparison,/import \{ SparklineCell \} from "\.\/rich-table-cells"/);
 assert.match(comparison,/<SparklineCell\b/);
 assert.doesNotMatch(cells,/Math\.random/);
});
test('public drawer, kanban and gantt preserve the exact atelier interactions',()=>{
 const drawer=readFileSync(join(src,'design-system/dossier-components.tsx'),'utf8');
 const drawerCss=readFileSync(join(src,'components/drawer-demo.css'),'utf8');
 const kanban=readFileSync(join(src,'components/kanban.tsx'),'utf8');
 const kanbanCss=readFileSync(join(src,'components/kanban-demo.css'),'utf8');
 const planning=readFileSync(join(src,'components/planning-gantt.tsx'),'utf8');
 assert.match(drawer,/properties\?:\s*DrawerProperty\[\].*documents\?:\s*DocumentItem\[\].*activity\?:\s*DrawerActivity\[\]/s);
 assert.match(drawer,/Synthèse.*Activité.*Documents/s);
 assert.match(drawer,/ActivityTimeline/);
 assert.doesNotMatch(drawer,/function DrawerActivityTimeline/);
 assert.match(drawerCss,/:focus:not\(:focus-visible\)\{outline:none;box-shadow:none\}/);
 assert.doesNotMatch(kanban,/<motion\.section\s+layout/);
 assert.doesNotMatch(kanban,/kind:'card'\|'column'|setColumnDrag|setColumnTarget/);
 assert.match(kanban,/Glissez uniquement les cartes/);
 assert.match(kanbanCss,/\.kb-demo\s*\{[^}]*max-width:\s*100%[^}]*min-width:\s*0[^}]*overflow:\s*hidden/s);
 assert.match(kanbanCss,/\.kb-board\s*\{[^}]*width:\s*100%[^}]*max-width:\s*100%[^}]*overflow-x:\s*auto/s);
 assert.match(planning,/onChange\?: \(id: string, dates:/);
 assert.match(planning,/onPointerDown=.*pointerDown.*onPointerMove=\{pointerMove\}.*onPointerUp=.*finishDrag/s);
 assert.match(planning,/bm-plan-resize/);
 assert.match(planning,/ArrowLeft.*ArrowRight/);
});
test('public message composer reuses the exact atelier editor composition',()=>{
 const workflow=readFileSync(join(src,'design-system/workflow-components.tsx'),'utf8');
 const css=readFileSync(join(src,'design-system/workflow-components.css'),'utf8');
 assert.match(workflow,/import '\.\.\/components\/forms-demo\.css'/);
 assert.match(workflow,/className="editor-flow bm-message-composer"/);
 assert.match(workflow,/className="editor-specimen"/);
 assert.match(workflow,/className="editor-to"/);
 assert.match(workflow,/className="editor-subject"/);
 assert.match(workflow,/className="editor-bottom"/);
 assert.match(workflow,/className="editor-send-screen"/);
 assert.match(workflow,/export function ReadinessFlow/);
 assert.match(workflow,/export function BuyerJourney/);
 assert.match(workflow,/export function ReadinessChecklist/);
 assert.match(workflow,/export function MissionProgress/);
 assert.match(workflow,/export function MemorandumOverview/);
 assert.match(css,/\.bm-readiness/);
 assert.match(css,/\.bm-buyer-journey/);
 assert.match(css,/\.bm-readiness-checklist/);
 assert.match(css,/\.bm-mission-progress/);
 assert.match(css,/\.bm-memorandum-overview/);
 assert.match(css,/\.bm-message-composer \.editor-subject input/);
});
