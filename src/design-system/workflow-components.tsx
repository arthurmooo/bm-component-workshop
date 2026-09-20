import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Check, ChevronRight, FileText, Bold, Italic, List, Link2, Copy, LoaderCircle, Send, Clock, ArrowLeft, AlertTriangle, Circle, FolderOpen, LockKeyhole, X, Info } from 'lucide-react';
import { Card, CardHeader, Field, EmptyState } from './layout';
import { Row, Stack, KeyValueList, Notice } from './analytics';
import { Button } from '../components/ui/button';
import { StatusBadge } from '../components/status-badge';
import { AnimatedReveal } from '../components/ui/animated-reveal';
import { ActionFeedback } from '../components/ui/action-feedback';
import { DataTable, DataRow } from '../components/ui/data-table';
import './workflow-components.css';
import '../components/forms-demo.css';
/** Controlled navigation: callers own routing and retain page state. */
export function SectionNav({ items, value, onChange, label = 'Sections' }: { items: { id: string; label: string; count?: number }[]; value: string; onChange: (id: string) => void; label?: string }) {
  return (
    <nav className="bm-section-nav" aria-label={label}>
      {items.map((i) => (
        <Button key={i.id} variant="ghost" aria-current={i.id === value ? 'page' : undefined} onClick={() => onChange(i.id)}>
          {i.label}
          {i.count !== undefined && <small>{i.count}</small>}
        </Button>
      ))}
    </nav>
  );
}
export function WorkCard({ title, description, meta, status = 'Open', action, children }: { title: string; description?: string; meta?: string; status?: string; action?: ReactNode; children?: ReactNode }) {
  return (
    <article className="bm-work-card">
      <span className="bm-work-icon">
        <Clock size={16} />
      </span>
      <div>
        <small>{meta}</small>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {children}
      </div>
      <div className="bm-work-actions">
        <StatusBadge status={status === 'Done' ? 'success' : 'review'} label={status} />
        {action}
      </div>
    </article>
  );
}
export type ActivityItem = {
  id: string;
  title: string;
  detail?: ReactNode;
  date: string;
  actor?: ReactNode;
  avatarSrc?: string;
  context?: string;
  source?: string;
  status?: string;
  tone?: 'neutral' | 'attention' | 'danger' | 'success';
  action?: ReactNode;
};
function activityStamp(value: string) {
  const parts = value.split(/\s*·\s*/, 2);
  return parts.length === 2 ? { day: parts[0], time: parts[1] } : { day: 'Activity', time: value };
}
function activityInitials(actor?: ReactNode) {
  return typeof actor === 'string'
    ? actor
        .split(/\s+|\s*·\s*/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase() || 'DA'
    : 'DA';
}
export function ActivityTimeline({ items }: { items: ActivityItem[] }) {
  if (!items.length) return <EmptyState title="No activity yet" description="Actions on this dossier will appear here." />;
  const groups = items.reduce<{ day: string; items: ActivityItem[] }[]>((all, item) => {
    const day = activityStamp(item.date).day;
    const current = all.at(-1);
    if (current?.day === day) current.items.push(item);
    else all.push({ day, items: [item] });
    return all;
  }, []);
  return (
    <div className="bm-activity-groups">
      {groups.map((group) => (
        <section className="bm-activity-group" key={group.day}>
          <header>
            <h3>{group.day}</h3>
          </header>
          <ol className="bm-activity-timeline">
            {group.items.map((item) => {
              const stamp = activityStamp(item.date);
              return (
                <li key={item.id}>
                  <time>{stamp.time}</time>
                  <span className="bm-activity-node" aria-hidden="true">
                    <FileText size={14} />
                  </span>
                  <article className="bm-activity-card">
                    <header>
                      <strong>{item.title}</strong>
                      {item.status && (
                        <span className="bm-activity-status" data-tone={item.tone ?? 'neutral'}>
                          {item.status}
                        </span>
                      )}
                      {item.action}
                    </header>
                    {item.detail && <p>{item.detail}</p>}
                    {(item.actor || item.context || item.source) && (
                      <footer>
                        {item.actor && (
                          <span className="bm-activity-actor">
                            {item.avatarSrc ? <img src={item.avatarSrc} alt="" /> : <i aria-hidden="true">{activityInitials(item.actor)}</i>}
                            {item.actor}
                          </span>
                        )}
                        {item.context && <span>{item.context}</span>}
                        {item.source && <span>{item.source}</span>}
                      </footer>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
export type ReadinessStep = {
  label: string;
  status: string;
  detail?: string;
  tone?: 'success' | 'danger' | 'review' | 'neutral';
};
export function ReadinessFlow({ steps, label = 'Buyer readiness' }: { steps: ReadinessStep[]; label?: string }) {
  return (
    <section className="bm-readiness" aria-label={label}>
      <span className="bm-readiness-label">{label}</span>
      <ol style={{gridTemplateColumns:`repeat(${Math.max(1,steps.length)}, minmax(0, 1fr))`}}>
        {steps.map((step, index) => (
          <li key={`${step.label}-${index}`} data-tone={step.tone ?? 'neutral'}>
            <span className="bm-readiness-icon" aria-hidden="true">
              {step.tone === 'success' ? <Check size={15} /> : <FileText size={15} />}
            </span>
            <div>
              <strong>{step.label}</strong>
              <StatusBadge status={step.tone === 'success' ? 'success' : step.tone === 'danger' ? 'failed' : step.tone === 'review' ? 'review' : 'progress'} label={step.status} />
              {step.detail && <small>{step.detail}</small>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
export type JourneyStep={label:string;state:'done'|'current'|'blocked'|'upcoming';detail?:string};
export function BuyerJourney({steps,title='Buyer journey',description}:{steps:JourneyStep[];title?:string;description?:string}){
 return <section className="bm-buyer-journey"><header><h3>{title}</h3>{description&&<p>{description}</p>}</header><ol>{steps.map((step,index)=><li key={`${step.label}-${index}`} data-state={step.state}><div className="bm-journey-track"><span className="bm-journey-node" aria-hidden="true">{step.state==='done'?<Check size={14}/>:step.state==='blocked'?<AlertTriangle size={14}/>:<Circle size={14}/>}</span></div><strong>{step.label}</strong>{step.detail&&<small>{step.detail}</small>}</li>)}</ol></section>
}
export type ChecklistItem={id:string;label:string;status:string;state:'done'|'pending'|'open';detail?:string};
export function ReadinessChecklist({items,title='Readiness checklist'}:{items:ChecklistItem[];title?:string}){
 const done=items.filter(item=>item.state==='done').length;
 return <section className="bm-readiness-checklist"><header><div><h3>{title}</h3><span>{done} / {items.length} complete</span></div><div className="bm-checklist-progress" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={done}><i style={{width:`${items.length?done/items.length*100:0}%`}}/></div></header><ol>{items.map(item=><li key={item.id} data-state={item.state}><span className="bm-checklist-mark" aria-hidden="true">{item.state==='done'&&<Check size={14}/>}</span><div><strong>{item.label}</strong>{item.detail&&<small>{item.detail}</small>}</div><StatusBadge status={item.state==='done'?'success':item.state==='open'?'review':'progress'} label={item.status}/></li>)}</ol></section>
}
export type AccessBoundaryItem={id:string;label:string;detail?:string;status?:string};
export function AccessBoundary({included,restricted,title='Access boundary',description='Prepared scope',status='Awaiting approval'}:{included:AccessBoundaryItem[];restricted:AccessBoundaryItem[];title?:string;description?:string;status?:string}){
 return <section className="bm-access-boundary">
  <header><div><h3>{title}</h3><p>{description}</p></div><StatusBadge status="review" label={status}/></header>
  <div className="bm-access-boundary-groups">
   <section data-tone="included"><header><h4>Included in draft</h4><p>These folders are prepared for approval.</p></header><ul>{included.map(item=><li key={item.id}><FolderOpen size={18}/><div><strong>{item.label}</strong>{item.detail&&<small>{item.detail}</small>}</div><StatusBadge status="success" label={item.status??'Prepared'}/></li>)}</ul></section>
   <section data-tone="restricted"><header><h4>Restricted</h4><p>These folders are not included in the prepared request.</p></header><ul>{restricted.map(item=><li key={item.id}><LockKeyhole size={18}/><div><strong>{item.label}</strong>{item.detail&&<small>{item.detail}</small>}</div><StatusBadge status="failed" label={item.status??'Restricted'}/></li>)}</ul></section>
  </div>
 </section>;
}
export type MissionStep={id:string;label:string;meta:string;detail?:string;state:'done'|'current'|'upcoming';owner?:ReactNode;action?:ReactNode};
export function MissionProgress({steps,completed,total,phase,footer,title='Mission progress'}:{steps:MissionStep[];completed:number;total:number;phase?:string;footer?:ReactNode;title?:string}){
 const bounded=Math.min(Math.max(completed,0),Math.max(total,0));
 const percent=total>0?bounded/total*100:0;
 return <section className="bm-mission-progress"><header><div><h3>{title}</h3>{phase&&<span>{phase}</span>}</div><strong>{bounded} of {total} steps</strong><div className="bm-mission-progressbar" role="progressbar" aria-label={title} aria-valuemin={0} aria-valuemax={total} aria-valuenow={bounded}><i style={{width:`${percent}%`}}/></div><div className="bm-mission-progress-meta"><span>{Math.round(percent)}% complete</span><span>{Math.max(0,total-bounded)} remaining</span></div></header><ol>{steps.map(step=><li key={step.id} data-state={step.state}><span className="bm-mission-node" aria-hidden="true">{step.state==='done'?<Check size={14}/>:<Circle size={14}/>}</span><div className="bm-mission-copy"><small>{step.meta}</small><strong>{step.label}</strong>{step.detail&&<span>{step.detail}</span>}{step.owner}</div>{step.action&&<div className="bm-mission-action">{step.action}</div>}</li>)}</ol>{footer&&<footer>{footer}</footer>}</section>
}
export type MemorandumSection={id:string;label:string;status:string;state:'ready'|'blocked'|'review';detail?:string};
export function MemorandumOverview({title='Information Memorandum',project,version,progress,readyLabel,sections,updated,owner,dependency,action}:{title?:string;project:string;version:string;progress:number;readyLabel:string;sections:MemorandumSection[];updated:string;owner:ReactNode;dependency?:string;action?:ReactNode}){
 const bounded=Math.min(100,Math.max(0,progress));
 return <section className="bm-memorandum-overview"><div className="bm-memorandum-cover" aria-hidden="true"><span>ALDER</span><small>{project}</small><strong>Information<br/>Memorandum</strong><em>{version}</em><i/></div><div className="bm-memorandum-main"><header><div><h2>{title}</h2><p>{readyLabel}</p></div><StatusBadge status="review" label={version}/></header><div className="bm-memorandum-progress"><span role="progressbar" aria-label="Information Memorandum completion" aria-valuemin={0} aria-valuemax={100} aria-valuenow={bounded}><i style={{width:`${bounded}%`}}/></span><strong>{bounded}%</strong></div><ol>{sections.map(section=><li key={section.id} data-state={section.state}><span aria-hidden="true">{section.state==='ready'?<Check size={14}/>:section.state==='blocked'?<AlertTriangle size={14}/>:<Clock size={14}/>}</span><strong>{section.label}</strong><StatusBadge status={section.state==='ready'?'success':section.state==='blocked'?'failed':'review'} label={section.status}/>{section.detail&&<small>{section.detail}</small>}</li>)}</ol></div><aside><KeyValueList items={[{label:'Last updated',value:updated},{label:'Owner',value:owner},...(dependency?[{label:'Current dependency',value:dependency}]:[])]}/>{action}</aside></section>
}
export function KanbanBoard({
  columns,
  cards,
  onOpen,
  onMove,
}: {
  columns: { id: string; label: string }[];
  cards: {
    id: string;
    column: string;
    title: string;
    description?: string;
    meta?: string;
  }[];
  onOpen: (id: string) => void;
  onMove: (id: string, column: string) => void;
}) {
  return (
    <div className="bm-kanban">
      {columns.map((c) => (
        <section
          key={c.id}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            if (cards.some((x) => x.id === id)) onMove(id, c.id);
          }}
        >
          <header>
            <strong>{c.label}</strong>
            <small>{cards.filter((x) => x.column === c.id).length}</small>
          </header>
          {cards
            .filter((x) => x.column === c.id)
            .map((x) => (
              <article key={x.id} draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', x.id)}>
                <Button variant="ghost" onClick={() => onOpen(x.id)}>
                  {x.title}
                  <ChevronRight size={13} />
                </Button>
                <p>{x.description}</p>
                <small>{x.meta}</small>
                <label className="bm-board-move">
                  Move to
                  <select aria-label={`Move ${x.title}`} value={x.column} onChange={(e) => onMove(x.id, e.target.value)}>
                    {columns.map((o) => (
                      <option value={o.id} key={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
export type PlanTask = {
  id: string;
  title: string;
  start: string;
  end: string;
  owner: string;
  dependsOn?: string;
  done?: boolean;
};
export function GanttTimeline({ tasks, onSelect }: { tasks: PlanTask[]; onSelect: (id: string) => void }) {
  const starts = tasks.map((t) => Date.parse(t.start));
  const ends = tasks.map((t) => Date.parse(t.end));
  const min = Math.min(...starts),
    max = Math.max(...ends, min + 86400000);
  const pos = (s: string) => ((Date.parse(s) - min) / (max - min)) * 100;
  const fmt = (n: number) =>
    new Date(n).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    });
  return (
    <div className="bm-gantt">
      <div className="bm-gantt-scale">
        <span>Milestone / owner</span>
        <div>
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <small key={v}>{fmt(min + (max - min) * v)}</small>
          ))}
        </div>
      </div>
      {tasks.map((t) => (
        <div className="bm-gantt-row" key={t.id}>
          <Button variant="ghost" onClick={() => onSelect(t.id)}>
            <span>
              {t.title}
              <small>
                {t.owner}
                {t.dependsOn ? ` · after ${tasks.find((x) => x.id === t.dependsOn)?.title ?? t.dependsOn}` : ''}
              </small>
            </span>
          </Button>
          <div className="bm-gantt-track">
            <button
              className="bm-gantt-bar"
              data-done={t.done}
              aria-label={`Edit ${t.title}, ${t.start} to ${t.end}`}
              style={{
                left: `${pos(t.start)}%`,
                width: `${Math.max(1, pos(t.end) - pos(t.start))}%`,
              }}
              onClick={() => onSelect(t.id)}
            >
              {t.done && <Check size={12} />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export function ApprovalPanel({ title, description, onApprove, onRequestChanges, disabled = false }: { title: string; description: string; onApprove: () => void; onRequestChanges?: (reason: string) => void; disabled?: boolean }) {
  const [reason, setReason] = useState('');
  const [editing, setEditing] = useState(false);
  return (
    <Card>
      <CardHeader title={title} description={description} />
      <Stack>
        <Row>
          <Button variant="primary" disabled={disabled} onClick={onApprove}>
            Approve
          </Button>
          {onRequestChanges && (
            <Button disabled={disabled} onClick={() => setEditing(!editing)}>
              Request changes
            </Button>
          )}
        </Row>
        <AnimatedReveal open={editing}>
          <Stack>
            <Field label="Reason" value={reason} onChange={(e) => setReason(e.target.value)} />
            <Button
              disabled={disabled || !reason.trim()}
              onClick={() => {
                onRequestChanges?.(reason.trim());
                setEditing(false);
                setReason('');
              }}
            >
              Submit feedback
            </Button>
          </Stack>
        </AnimatedReveal>
      </Stack>
    </Card>
  );
}
export function Conversation({
  messages,
}: {
  messages: {
    id: string;
    author: string;
    body: string;
    date: string;
    outbound?: boolean;
  }[];
}) {
  return (
    <div className="bm-conversation">
      {messages.map((m) => (
        <article key={m.id} data-outbound={m.outbound}>
          <header>
            <strong>{m.author}</strong>
            <small>{m.date}</small>
          </header>
          <p>{m.body}</p>
        </article>
      ))}
    </div>
  );
}
function MarkdownText({ value }: { value: string }) {
  return (
    <div className="bm-prose">
      {value.split('\n').map((line, i) => (
        <p key={i}>
          {line.startsWith('- ') ? '• ' : ''}
          {(line.startsWith('- ') ? line.slice(2) : line).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((s, j) => (s.startsWith('**') ? <strong key={j}>{s.slice(2, -2)}</strong> : s.startsWith('*') ? <em key={j}>{s.slice(1, -1)}</em> : s)) || '\u00a0'}
        </p>
      ))}
    </div>
  );
}
export function MessageComposer({ to, subject, body, onChange, onSend, state = 'draft', onBack, hideSubject = false, sendLabel = 'Approve & simulate send' }: { hideSubject?: boolean; sendLabel?: string; to: string; subject: string; body: string; onChange: (v: { subject: string; body: string }) => void; onSend: () => void; state?: 'draft' | 'sending' | 'sent'; onBack?: () => void }) {
  const [preview, setPreview] = useState(false),
    [copy, setCopy] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null),
    sendPanel = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (state !== 'draft') sendPanel.current?.focus();
  }, [state]);
  function replace(before: string, after = before) {
    const el = ref.current;
    if (!el) return;
    const a = el.selectionStart,
      b = el.selectionEnd;
    const selected = body.slice(a, b) || 'text';
    onChange({
      subject,
      body: body.slice(0, a) + before + selected + after + body.slice(b),
    });
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(a + before.length, a + before.length + selected.length);
    });
  }
  function list() {
    const el = ref.current;
    if (!el) return;
    const start = body.lastIndexOf('\n', el.selectionStart - 1) + 1,
      end = body.indexOf('\n', el.selectionEnd),
      stop = end < 0 ? body.length : end;
    const block = body
      .slice(start, stop)
      .split('\n')
      .map((line) => (line.startsWith('- ') ? line : `- ${line}`))
      .join('\n');
    onChange({
      subject,
      body: body.slice(0, start) + block + body.slice(stop),
    });
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start, start + block.length);
    });
  }
  return (
    <div className="editor-flow bm-message-composer">
      <motion.div className="editor-specimen" inert={state !== 'draft'} aria-hidden={state !== 'draft'} animate={{ opacity: state === 'draft' ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
        <header>
          <span>
            <FileText size={15} /> New message
          </span>
          <Button small variant="ghost" onClick={() => setPreview(!preview)}>
            {preview ? 'Edit' : 'Preview'}
          </Button>
        </header>
        <div className="editor-to">
          <span>To</span>
          <span className="recipient-chip">
            <strong>{to}</strong>
          </span>
        </div>
        {!hideSubject && (
          <label className="editor-subject">
            Subject
            <input aria-label="Subject" value={subject} onChange={(event) => onChange({ subject: event.target.value, body })} />
          </label>
        )}
        {preview ? (
          <div className="editor-preview" aria-label="Message preview">
            <MarkdownText value={body} />
          </div>
        ) : (
          <textarea
            ref={ref}
            aria-label="Message"
            value={body}
            onChange={(event) => {
              setCopy('');
              onChange({ subject, body: event.target.value });
            }}
          />
        )}
        <div className="editor-bottom">
          <div role="toolbar" aria-label="Formatting">
            <button type="button" aria-label="Bold" disabled={preview} onClick={() => replace('**')}>
              <Bold size={15} />
            </button>
            <button type="button" aria-label="Italic" disabled={preview} onClick={() => replace('*')}>
              <Italic size={15} />
            </button>
            <button type="button" aria-label="List" disabled={preview} onClick={list}>
              <List size={15} />
            </button>
            <button type="button" aria-label="Link" disabled={preview} onClick={() => replace('[', '](https://example.com)')}>
              <Link2 size={15} />
            </button>
          </div>
          <Button small variant="primary" disabled={!body.trim() || (!hideSubject && !subject.trim()) || !to} onClick={onSend}>
            <Send size={13} /> {sendLabel}
          </Button>
        </div>
        <footer>
          <span role="status">Draft retained in this browser · no message transmitted</span>
          <button
            type="button"
            aria-label="Copy message"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(body);
                setCopy('Copied');
              } catch {
                setCopy('Copy unavailable');
              }
            }}
          >
            <ActionFeedback state={copy || 'idle'} icon={copy === 'Copied' ? <Check size={12} /> : <Copy size={12} />} text={copy || 'Copy'} />
          </button>
        </footer>
      </motion.div>
      <AnimatePresence>
        {state !== 'draft' && (
          <motion.div className="editor-send-screen" ref={sendPanel} tabIndex={-1} aria-label="Simulated send status" initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -6 }} transition={{ duration: reduced ? 0 : 0.22 }}>
            <motion.div key={state} className="editor-send-content" initial={{ opacity: 0, y: reduced ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
              <span className="editor-send-symbol" data-done={state === 'sent'}>
                {state === 'sending' ? <LoaderCircle size={26} /> : <Check size={26} />}
              </span>
              <div role="status">
                <h3>{state === 'sending' ? 'Simulating send…' : 'Message sent in the simulation'}</h3>
                <p>{state === 'sending' ? 'Preparing your message.' : subject}</p>
              </div>
              <p className="editor-send-to">To {to}</p>
              <small>No external message sent · your draft is retained.</small>
              {state === 'sent' && onBack && (
                <Button onClick={onBack}>
                  <ArrowLeft size={14} /> View conversation
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export type ReportSection = {
  id: string;
  title: string;
  body: string;
  source?: string;
};
export function ReportEditor({ sections, onChange, readOnly = false, onSource }: { sections: ReportSection[]; onChange: (sections: ReportSection[]) => void; readOnly?: boolean; onSource?: (id: string) => void }) {
  const uid = useId();
  return (
    <div className="bm-report-editor">
      {sections.map((s, i) => (
        <section key={s.id}>
          <header>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
          </header>
          {readOnly ? <MarkdownText value={s.body} /> : <textarea id={`${uid}-${s.id}`} aria-label={s.title} value={s.body} onChange={(e) => onChange(sections.map((x) => (x.id === s.id ? { ...x, body: e.target.value } : x)))} />}
          {onSource && s.source && (
            <Button variant="ghost" onClick={() => onSource(s.source!)}>
              Source · {s.source}
            </Button>
          )}
        </section>
      ))}
    </div>
  );
}
export function EvidenceViewer({ file, sheet, cell, raw, normalized, note, rows }: { file: string; sheet: string; cell: string; raw: string; normalized: string; note?: string; rows: { cell: string; label: string; value: string }[] }) {
  return (
    <Stack>
      <KeyValueList
        items={[
          { label: 'File', value: file },
          { label: 'Sheet / reference', value: sheet },
          { label: 'Cell / locator', value: cell },
          { label: 'Source value', value: raw },
          { label: 'Normalized value', value: normalized },
        ]}
      />
      <DataTable locale="en" sortable={false}>
        <thead>
          <tr>
            <th>Cell</th>
            <th>Source label</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <DataRow key={r.cell} aria-selected={r.cell === cell}>
              <td>{r.cell === cell ? <strong>{r.cell}</strong> : r.cell}</td>
              <td>{r.label}</td>
              <td>{r.value}</td>
            </DataRow>
          ))}
        </tbody>
      </DataTable>
      {note && <Notice>{note}</Notice>}
    </Stack>
  );
}
export function ProfileCard({ name, subtitle, initials, label, photoUrl, photoPosition = '50%', children }: { name: string; subtitle: string; initials: string; label?: string; photoUrl?: string; photoPosition?: string; children?: ReactNode }) {
  return (
    <Card>
      <div className="bm-profile-heading">
        <span className="bm-profile-avatar" role="img" aria-label={name} style={photoUrl ? { backgroundImage: `url(${photoUrl})`, backgroundPosition: photoPosition } : undefined}>{!photoUrl && initials}</span>
        <div>
          {label && <small>{label}</small>}
          <h2>{name}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </Card>
  );
}
export function SourcedAnswer({ title, children, sources, onSource }: { title: string; children: ReactNode; sources: { id: string; label: string }[]; onSource: (id: string) => void }) {
  return (
    <Card>
      <CardHeader title={title} />
      <Stack>
        <div className="bm-prose">{children}</div>
        <Row>
          {sources.map((s, i) => (
            <Button key={s.id} onClick={() => onSource(s.id)}>
              [{i + 1}] {s.label}
            </Button>
          ))}
        </Row>
      </Stack>
    </Card>
  );
}

export type SourcingTab = { id: string; label: string; icon?: ReactNode; badge?: string; disabled?: boolean };
export function SourcingTabs({ items, value, onChange, label = 'Buyer sources' }: { items: SourcingTab[]; value: string; onChange: (id: string) => void; label?: string }) {
  return <nav className="bm-sourcing-tabs" aria-label={label}>{items.map((item) => <Button key={item.id} variant="ghost" disabled={item.disabled} aria-pressed={item.id === value} onClick={() => onChange(item.id)}>{item.icon}<span>{item.label}</span>{item.badge && <small>{item.badge}</small>}</Button>)}</nav>;
}

export function CriteriaStrip({ title, description, items, action }: { title: string; description?: string; items: { id: string; label: string; icon?: ReactNode }[]; action?: ReactNode }) {
  return <section className="bm-criteria-strip"><header><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</header><ul>{items.map((item) => <li key={item.id}>{item.icon}<span>{item.label}</span></li>)}</ul></section>;
}

export type BuyerSuggestion = {
  id: string;
  name: string;
  logoSrc: string;
  score: string;
  scoreTone?: 'success' | 'review' | 'progress';
  description: string;
  facts: string[];
  warning?: string;
  sources: { id: string; label: string }[];
};
export function BuyerSuggestionCard({ suggestion, selected, onToggle, onSource }: { suggestion: BuyerSuggestion; selected: boolean; onToggle: (id: string) => void; onSource?: (id: string) => void }) {
  return <article className="bm-buyer-suggestion" data-selected={selected}>
    <Button className="bm-buyer-select" variant="ghost" aria-pressed={selected} aria-label={`${selected ? 'Remove' : 'Add'} ${suggestion.name} ${selected ? 'from' : 'to'} shortlist`} onClick={() => onToggle(suggestion.id)}><span>{selected && <Check size={14}/>}</span></Button>
    <img className="bm-company-logo" src={suggestion.logoSrc} alt={`${suggestion.name} logo`}/>
    <div className="bm-buyer-suggestion-main"><header><h3>{suggestion.name}</h3><StatusBadge status={suggestion.scoreTone ?? 'progress'} label={suggestion.score}/></header><p>{suggestion.description}</p><div className="bm-buyer-facts">{suggestion.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>{suggestion.warning && <small className="bm-buyer-warning"><AlertTriangle size={13}/>{suggestion.warning}</small>}</div>
    <aside><small>Sources</small>{suggestion.sources.map((source) => <Button key={source.id} variant="ghost" onClick={() => onSource?.(source.id)}><FileText size={14}/>{source.label}</Button>)}</aside>
  </article>;
}

export function ShortlistSummary({ buyers, owner, onRemove, onConfirm, feedback }: { buyers: { id: string; name: string; logoSrc: string }[]; owner: string; onRemove: (id: string) => void; onConfirm: () => void; feedback?: string }) {
  return <aside className="bm-shortlist-summary"><header><h2>Shortlist</h2><p>{buyers.length} buyer{buyers.length === 1 ? '' : 's'} selected</p></header><div className="bm-shortlist-buyers">{buyers.map((buyer) => <div key={buyer.id}><img className="bm-company-logo" src={buyer.logoSrc} alt={`${buyer.name} logo`}/><strong>{buyer.name}</strong><Button variant="ghost" aria-label={`Remove ${buyer.name}`} onClick={() => onRemove(buyer.id)}><X size={15}/></Button></div>)}</div><section><h3>This will create</h3><ul><li><FileText size={15}/>{buyers.length} buyer opportunities</li><li><Circle size={15}/>Initial stage · Identified</li><li><Check size={15}/>Owner · {owner}</li><li><LockKeyhole size={15}/>No organisation record will change</li></ul></section><Button className="bm-shortlist-confirm" variant="primary" disabled={!buyers.length} onClick={onConfirm}>Create {buyers.length} buyer opportunit{buyers.length === 1 ? 'y' : 'ies'}</Button>{feedback && <p className="bm-shortlist-feedback" role="status"><Info size={14}/>{feedback}</p>}</aside>;
}
