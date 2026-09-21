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
 const demo=readFileSync(join(src,'components/work-cards-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/work-cards-demo.css'),'utf8');
 const entry=readFileSync(join(src,'design-system/index.ts'),'utf8');
 assert.match(component,/wide\?:boolean/);
 assert.match(component,/wide\?' wc-demo-wide':''/);
 assert.match(css,/\.wc-demo\.wc-demo-wide\s*\{\s*max-width:\s*none;/);
 assert.match(demo,/<button\s+className="wc-envelope-toggle"[\s\S]*?aria-expanded=\{expanded\}/);
 assert.match(css,/\.wc-envelope-toggle\s*\{[^}]*width:\s*100%;/);
 assert.match(entry,/type WorkInboxProps/);
});
test('agenda details distinguish the channel from the organizer identity',()=>{
 const component=readFileSync(join(src,'components/agenda-cards.tsx'),'utf8');
 const css=readFileSync(join(src,'components/agenda-cards.css'),'utf8');
 assert.match(component,/className="agenda-event-place"/);
 assert.match(component,/className="agenda-event-owner"[\s\S]*?agenda-owner-avatar[\s\S]*?<small>Organisé par<\/small>/);
 assert.match(css,/\.agenda-event-place\{[^}]*border-radius:999px[^}]*background:/);
 assert.match(css,/\.agenda-owner-avatar\{[^}]*border-radius:50%/);
});
test('team activity tabs glide and crossfade while respecting reduced motion',()=>{
 const component=readFileSync(join(src,'components/team-activity.tsx'),'utf8');
 const css=readFileSync(join(src,'components/team-activity.css'),'utf8');
 assert.match(component,/layoutId="team-activity-tab"/);
 assert.match(component,/<AnimatePresence mode="wait" initial=\{false\}>/);
 assert.match(component,/className="ta-timeline-page"[\s\S]*?key=\{tab\}/);
 assert.match(css,/@media \(prefers-reduced-motion: reduce\)/);
});
test('date assignment keeps month and selected date compact while softening state changes',()=>{
 const component=readFileSync(join(src,'components/date-strip-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/date-strip-demo.css'),'utf8');
 assert.match(component,/className="ds-toolbar"[\s\S]*?className="ds-month"[\s\S]*?className="ds-calendar-choice"/);
 assert.match(component,/layoutId="date-strip-active-day"/);
 assert.match(component,/<AnimatePresence initial=\{false\} mode="popLayout">/);
 assert.match(component,/useReducedMotion/);
 assert.match(component,/saved \? "Enregistré" : "Enregistrer"/);
 assert.match(component,/className=\{`ds-save-status\$\{saved \? " is-saved" : ""\}`\}/);
 assert.match(css,/\.ds-toolbar\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\) 174px/);
 assert.match(css,/\.ds-month\s*\{[^}]*height:\s*36px[^}]*box-sizing:\s*border-box/);
 assert.match(css,/\.ds-calendar-choice \.date-field\s*\{[^}]*height:\s*36px[^}]*min-height:\s*36px/);
 assert.match(css,/\.date-strip-demo > footer \.ds-save\.is-saved/);
 assert.match(css,/\.ds-save-status\.is-saved/);
 assert.match(css,/@media \(prefers-reduced-motion: reduce\)/);
});
test('quota completion changes the whole visual state instead of only its badge',()=>{
 const component=readFileSync(join(src,'components/quota-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/quota-demo.css'),'utf8');
 assert.match(component,/objectiveReached \? "is-complete" : reached \? "is-limit"/);
 assert.match(component,/className="quota-threshold-message" role="status"/);
 assert.match(component,/Cible atteinte/);
 assert.match(component,/Capacité épuisée/);
 assert.match(css,/\.quota-demo article\.is-complete[\s\S]*?\.quota-demo article\.is-limit/);
 assert.match(css,/\.quota-demo article\.is-complete \.quota-track i/);
 assert.match(css,/@media \(prefers-reduced-motion: reduce\)/);
});
test('task card separates context, progress, checklist and attachment surfaces',()=>{
 const component=readFileSync(join(src,'components/task-cards-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/task-cards-demo.css'),'utf8');
 const fileIcon=readFileSync(join(src,'components/ui/file-type-icon.tsx'),'utf8');
 assert.match(component,/className="task-progress-percent"/);
 assert.match(component,/data-complete=\{checks\[i\]\}/);
 assert.match(component,/FileTypeIcon filename="Présentation comité\.pdf" className="task-file-icon"/);
 assert.match(component,/className="task-meta-chip"/);
 assert.match(css,/\.task-checklist label\[data-complete="true"\]/);
 assert.match(css,/\.task-file-icon\s*\{/);
 assert.match(fileIcon,/"xls", "xlsx", "csv"/);
 assert.match(fileIcon,/"doc", "docx", "odt", "txt"/);
 assert.match(fileIcon,/"ppt", "pptx", "key"/);
 assert.match(fileIcon,/"png", "jpg", "gif", "svg", "webp", "tif"/);
 assert.match(fileIcon,/"zip", "rar", "7z"/);
});
test('workflow simulation lights each node and connector in sequence',()=>{
 const component=readFileSync(join(src,'components/task-cards-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/task-cards-demo.css'),'utf8');
 assert.match(component,/setTimeout\(\(\) => setActiveNode\(node\), node \* 420\)/);
 assert.match(component,/data-active=\{activeNode >= 0\}/);
 assert.match(component,/data-active=\{activeNode >= 1\}/);
 assert.match(component,/data-active=\{activeNode >= 2\}/);
 assert.match(css,/\.template-cover > span\[data-active="true"\]/);
 assert.match(css,/\.template-cover > i\[data-active="true"\]/);
});
test('agent catalog animates filtering and confirms add actions',()=>{
 const component=readFileSync(join(src,'components/agent-catalog-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/agent-catalog-demo.css'),'utf8');
 assert.match(component,/<AnimatePresence mode="popLayout">/);
 assert.match(component,/<motion\.article/);
 assert.match(component,/Ajout en cours…/);
 assert.match(component,/className="ac-added-badge"/);
 assert.match(component,/whileTap=/);
 assert.match(css,/\.ac-card\.is-connected/);
 assert.match(css,/\.ac-added-badge/);
 assert.match(css,/@media \(prefers-reduced-motion: reduce\)/);
});
test('multichannel inbox gives email and WhatsApp distinct conversation grammars',()=>{
 const component=readFileSync(join(src,'components/inbox-demo.tsx'),'utf8');
 const css=readFileSync(join(src,'components/inbox-demo.css'),'utf8');
 assert.match(component,/Canal de conversation/);
 assert.match(component,/inbox-email-view/);
 assert.match(component,/inbox-whatsapp-view/);
 assert.match(component,/whatsapp-bubble-row/);
 assert.match(component,/E-MAIL REÇU/);
 assert.match(component,/layoutId="inbox-channel"/);
 assert.match(css,/\.inbox-channel-stage\{[^}]*grid-template-columns:260px minmax\(0,1fr\)/);
 assert.match(css,/\.inbox-whatsapp-view\{/);
 assert.match(css,/\.inbox-email-paper\{/);
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

test('message editor renders formatting directly and keeps recipient removal separate',()=>{
 const forms=readFileSync(join(src,'components/forms-demo.tsx'),'utf8');
 const formsCss=readFileSync(join(src,'components/forms-demo.css'),'utf8');
 const recipients=readFileSync(join(src,'components/mail-recipients.tsx'),'utf8');
 const recipientsCss=readFileSync(join(src,'components/mail-recipients.css'),'utf8');
 assert.match(forms,/contentEditable suppressContentEditableWarning/);
 assert.match(forms,/format\('bold'\)/);
 assert.match(forms,/format\('italic'\)/);
 assert.match(forms,/format\('insertUnorderedList'\)/);
 assert.match(forms,/format\('createLink'/);
 assert.doesNotMatch(forms,/wrap\('\*\*'/);
 assert.match(formsCss,/\.editor-rich-text a,\.editor-preview a/);
 assert.match(recipients,/className="recipient-name"/);
 assert.match(recipientsCss,/flex: 0 0 17px/);
});

test('voice input exposes the reference capture, transcript and recent request hierarchy',()=>{
 const component=readFileSync(join(src,'components/extended-interactions.tsx'),'utf8');
 const css=readFileSync(join(src,'components/extended-interactions.css'),'utf8');
 assert.match(component,/className="voice-mic"/);
 assert.match(component,/className="voice-waveform"/);
 assert.match(component,/aria-pressed=\{listening\}/);
 assert.doesNotMatch(component,/className="voice-stop"/);
 assert.match(component,/Dictez votre demande\. Vous pourrez modifier la transcription/);
 assert.match(component,/Transcription en direct/);
 assert.match(component,/listening\?'Terminer':'Dicter'/);
 assert.match(component,/Transcription modifiable/);
 assert.match(component,/Utiliser la transcription/);
 assert.match(component,/Aucun audio enregistré ni transmis/);
 assert.match(css,/\.voice-capture\{display:grid/);
 assert.match(css,/grid-template-columns:190px minmax\(145px,1fr\) auto/);
 assert.match(css,/\.voice-panel>h3/);
 assert.match(css,/@keyframes voice-ring/);
 assert.match(css,/@media\(max-width:640px\)/);
});

test('the 49 locally approved modules are seeded as approved for the published workshop',()=>{
 const app=readFileSync(join(src,'App.tsx'),'utf8');
 const block=app.match(/const approvedModuleIds = new Set\(\[([\s\S]*?)\]\);/);
 assert.ok(block);
 const ids=[...block[1].matchAll(/"([^"]+)"/g)].map(match=>match[1]);
 assert.equal(ids.length,49);
 assert.equal(new Set(ids).size,49);
 assert.match(app,/approvedModuleIds\.has\(m\.id\)/);
 assert.match(app,/\{ status: "Validé", note:/);
});
