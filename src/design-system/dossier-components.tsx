import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { CalendarDays, UserRound, MapPin, ArrowUpRight, BriefcaseBusiness, Building2, Check, CheckCircle2, ChevronDown, ChevronRight, Circle, FileText, Loader2, Paperclip, Pause, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AnimatedReveal } from '../components/ui/animated-reveal';
import { ActivityTimeline, type ActivityItem } from './workflow-components';
import './dossier-components.css';
import '../components/drawer-demo.css';

export type DrawerProperty = {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
};
export type DrawerActivity = {
  id: string;
  title: string;
  detail?: ReactNode;
  time?: string;
  icon?: ReactNode;
  actor?: ReactNode;
  avatarSrc?: string;
  scope?: string;
  context?: string;
  source?: string;
  status?: string;
  tone?: ActivityItem['tone'];
  day?: string;
  schedule?: { label: string; start: string; end: string; owner?: string };
};
export type DetailDrawerProps = {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  closeLabel?: string;
  wide?: boolean;
  eyebrow?: string;
  reference?: string;
  properties?: DrawerProperty[];
  documents?: DocumentItem[];
  activity?: DrawerActivity[];
  activityLabel?: string;
  summaryTitle?: string;
  summary?: ReactNode;
  nextStep?: {
    label?: string;
    title: string;
    detail?: ReactNode;
    action?: ReactNode;
  };
  locale?: 'fr' | 'en';
};
function drawerActivityItems(items: DrawerActivity[], locale: 'fr' | 'en'): ActivityItem[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    detail: item.schedule ? (
      <div className="dd-activity-schedule">
        <span>{item.schedule.label}</span>
        <div>
          <span>
            <small>{locale === 'en' ? 'Start' : 'Début'}</small>
            <time>{item.schedule.start}</time>
          </span>
          <ChevronRight size={13} aria-hidden="true" />
          <span>
            <small>{locale === 'en' ? 'End' : 'Fin'}</small>
            <time>{item.schedule.end}</time>
          </span>
        </div>
        {item.schedule.owner && (
          <small>
            {locale === 'en' ? 'Owner' : 'Responsable'} · {item.schedule.owner}
          </small>
        )}
      </div>
    ) : (
      item.detail
    ),
    date: item.day ? `${item.day} · ${item.time?.match(/\d{1,2}:\d{2}/)?.[0] ?? item.time ?? ''}` : (item.time ?? (locale === 'en' ? 'Activity' : 'Activité')),
    actor: item.actor,
    avatarSrc: item.avatarSrc,
    context: item.context ?? item.scope,
    source: item.source,
    status: item.status,
    tone: item.tone,
  }));
}
export function DetailDrawer({ open, title, description, onClose, children, footer, closeLabel = 'Fermer le dossier', wide = false, eyebrow = 'ESPACE DE TRAVAIL', reference, properties = [], documents = [], activity = [], activityLabel, summaryTitle, summary, nextStep, locale = 'fr' }: DetailDrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const id = useId();
  const [tab, setTab] = useState<'summary' | 'activity' | 'documents'>('summary');
  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    const origin = document.activeElement as HTMLElement | null;
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      if (origin?.isConnected) origin.focus();
    };
  }, [open]);
  useEffect(() => {
    if (open) {
      setTab('summary');
      setPreview(null);
      body.current?.scrollTo(0, 0);
    }
  }, [open, title]);
  const tabs = [
    {
      id: 'summary' as const,
      label: locale === 'en' ? 'Summary' : 'Synthèse',
      count: 0,
    },
    ...(activity.length
      ? [
          {
            id: 'activity' as const,
            label: locale === 'en' ? 'Activity' : 'Activité',
            count: activity.length,
          },
        ]
      : []),
    ...(documents.length
      ? [
          {
            id: 'documents' as const,
            label: 'Documents',
            count: documents.length,
          },
        ]
      : []),
  ];
  function changeTab(next: 'summary' | 'activity' | 'documents') {
    setTab(next);
    setPreview(null);
    body.current?.scrollTo(0, 0);
  }
  return (
    <dialog
      ref={ref}
      className="dossier-drawer"
      data-wide={wide}
      aria-labelledby={id}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dd-shell">
        <div className="dd-toolbar">
          <span>
            <BriefcaseBusiness size={13} aria-hidden="true" />
            {locale === 'en' ? 'Records' : 'Dossiers'} <ChevronRight size={12} aria-hidden="true" />
            <strong>{reference ?? title}</strong>
          </span>
          <div>
            <button className="dd-close" type="button" aria-label={closeLabel} onClick={onClose}>
              <X size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
        <header className="dd-header">
          <div className="dd-company">
            <span className="dd-logo">
              <Building2 size={24} aria-hidden="true" />
            </span>
            <div>
              <span className="dd-kicker">{eyebrow === 'ESPACE DE TRAVAIL' && locale === 'en' ? 'WORKSPACE RECORD' : eyebrow}</span>
              <h2 id={id}>{title}</h2>
              {description && <p>{description}</p>}
            </div>
          </div>
          {properties.length > 0 && (
            <div className="dd-properties">
              {properties.map((property) => (
                <div key={property.label}>
                  <span>
                    {property.icon ?? (/owner|responsable/i.test(property.label) ? <UserRound size={13} /> : /date|due|closed/i.test(property.label) ? <CalendarDays size={13} /> : /geography|country/i.test(property.label) ? <MapPin size={13} /> : <BriefcaseBusiness size={13} />)}
                    {property.label}
                  </span>
                  <strong className={/stage|context|status/i.test(property.label) ? 'dd-stage' : undefined}>{property.value}</strong>
                </div>
              ))}
            </div>
          )}
        </header>
        <div className="dd-tabs" role="tablist" aria-label={locale === 'en' ? 'Record sections' : 'Sections du dossier'}>
          {tabs.map((item, itemIndex) => (
            <button
              key={item.id}
              id={`${id}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              aria-controls={`${id}-panel`}
              tabIndex={tab === item.id ? 0 : -1}
              onClick={() => changeTab(item.id)}
              onKeyDown={(event) => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (itemIndex + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
                changeTab(tabs[next].id);
                document.getElementById(`${id}-tab-${tabs[next].id}`)?.focus();
              }}
            >
              {item.label}
              {item.count > 0 && <span>{item.count}</span>}
            </button>
          ))}
        </div>
        <div className="dd-body" ref={body} role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${tab}`} tabIndex={0}>
          {tab === 'summary' ? (
            <>
              {summary && <p className="dd-summary">{summary}</p>}
              {nextStep && (
                <section className="dd-next">
                  <span className="dd-next-icon">
                    <CalendarDays size={18} />
                  </span>
                  <div>
                    <span>{nextStep.label ?? (locale === 'en' ? 'NEXT STEP' : 'PROCHAINE ÉTAPE')}</span>
                    <h3>{nextStep.title}</h3>
                    {nextStep.detail && <div className="dd-next-detail">{nextStep.detail}</div>}
                  </div>
                  {nextStep.action}
                </section>
              )}
              <section className="dd-section">
                {summaryTitle !== '' && (
                  <div className="dd-section-heading">
                    <h3>{summaryTitle ?? (locale === 'en' ? 'Summary' : 'Synthèse')}</h3>
                  </div>
                )}
                {children}
              </section>
              {documents.length > 0 && (
                <section className="dd-section">
                  <div className="dd-section-heading">
                    <h3>
                      {locale === 'en' ? 'Related documents' : 'Documents associés'} <small>{documents.length}</small>
                    </h3>
                    <button onClick={() => changeTab('documents')}>
                      {locale === 'en' ? 'View all' : 'Tout voir'}
                      <ChevronRight size={12} />
                    </button>
                  </div>
                  {documents.slice(0, 2).map((doc) => (
                    <button
                      key={doc.id}
                      className="dd-file-row"
                      onClick={() => {
                        changeTab('documents');
                        setPreview(doc.id);
                      }}
                    >
                      <span className="dd-file-icon">
                        <FileText size={18} />
                      </span>
                      <span>
                        <strong>{doc.name}</strong>
                        <small>{doc.meta}</small>
                      </span>
                      <ArrowUpRight size={13} />
                    </button>
                  ))}
                </section>
              )}
              {activity.length > 0 && (
                <section className="dd-section">
                  <div className="dd-section-heading">
                    <h3>{locale === 'en' ? 'Latest activity' : 'Dernière activité'}</h3>
                    <button onClick={() => changeTab('activity')}>
                      {locale === 'en' ? 'View timeline' : 'Voir le fil'}
                      <ChevronRight size={12} />
                    </button>
                  </div>
                  <ActivityTimeline items={drawerActivityItems(activity.slice(0, 1), locale)} />
                </section>
              )}
            </>
          ) : tab === 'activity' ? (
            <>
              <div className="dd-section-heading">
                <h3>{activityLabel ?? (locale === 'en' ? 'Record history' : 'Historique du dossier')}</h3>
                <span className="dd-muted">
                  {activity.length} {locale === 'en' ? 'events' : 'événements'}
                </span>
              </div>
              <ActivityTimeline items={drawerActivityItems(activity, locale)} />
            </>
          ) : (
            <>
              <div className="dd-section-heading">
                <h3>{locale === 'en' ? 'Record documents' : 'Documents du dossier'}</h3>
                <span className="dd-muted">
                  {documents.length} {locale === 'en' ? 'files' : 'fichiers'}
                </span>
              </div>
              <p className="dd-doc-intro">{locale === 'en' ? 'Working documents and verification status.' : 'Pièces de travail et état de vérification.'}</p>
              {documents.map((document) => (
                <div className="dd-document" key={document.id}>
                  <button type="button" className="dd-file-row" aria-expanded={preview === document.id} onClick={() => setPreview(preview === document.id ? null : document.id)}>
                    <span className="dd-file-icon">
                      <FileText size={19} />
                    </span>
                    <span>
                      <strong>{document.name}</strong>
                      {document.meta && <small>{document.meta}</small>}
                    </span>
                    <ArrowUpRight size={13} />
                    <ChevronRight size={14} className={preview === document.id ? 'rotated' : ''} />
                  </button>
                  <AnimatedReveal open={preview === document.id}>
                    <div className="dd-doc-preview">{document.content}</div>
                  </AnimatedReveal>
                </div>
              ))}
              <div className="dd-document-foot">
                <Paperclip size={13} />
                {locale === 'en' ? 'Documents belong to the selected record.' : 'Les pièces restent rattachées au dossier sélectionné.'}
              </div>
            </>
          )}
        </div>
        {footer ? (
          <footer className="dd-footer">{footer}</footer>
        ) : (
          <footer className="dd-footer">
            <span>
              <i />
              {locale === 'en' ? 'Synthetic data' : 'Données de démonstration'}
            </span>
            <span>
              {activity.length ? (
                <>
                  <CheckCircle2 size={11} /> {activity.length} {locale === 'en' ? 'activities' : 'activités'}
                </>
              ) : null}
            </span>
          </footer>
        )}
      </div>
    </dialog>
  );
}
export type DocumentItem = {
  id: string;
  name: string;
  meta?: string;
  status?: ReactNode;
  content: ReactNode;
};
export function DocumentList({ documents }: { documents: DocumentItem[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const id = useId();
  return (
    <div className="bm-documents">
      {documents.map((doc, index) => (
        <section key={doc.id}>
          <button className="bm-document-trigger" aria-expanded={expanded === doc.id} aria-controls={`${id}-${index}`} onClick={() => setExpanded(expanded === doc.id ? null : doc.id)}>
            <FileText size={18} />
            <span>
              <strong>{doc.name}</strong>
              {doc.meta && <small>{doc.meta}</small>}
            </span>
            {doc.status && <span className="bm-document-status">{doc.status}</span>}
            <ChevronDown size={14} />
          </button>
          <div id={`${id}-${index}`}>
            <AnimatedReveal open={expanded === doc.id}>
              <div className="bm-document-content">{doc.content}</div>
            </AnimatedReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
export type ExecutionStep = {
  id: string;
  label: string;
  detail?: string;
  state: 'pending' | 'running' | 'done' | 'paused' | 'failed';
};
const labels = {
  pending: 'En attente',
  running: 'En cours',
  done: 'Terminé',
  paused: 'En pause',
  failed: 'Échec',
};
export function ExecutionJournal({ steps, title = 'Journal d’exécution', progressive = true, children, locale = 'fr' }: { steps: ExecutionStep[]; title?: string; progressive?: boolean; children?: ReactNode; locale?: 'fr' | 'en' }) {
  const [expanded, setExpanded] = useState(true);
  const id = useId();
  const done = steps.filter((s) => s.state === 'done').length;
  return (
    <section className="bm-execution">
      <button className="bm-execution-heading" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>
        <span>{title}</span>
        <small>
          {done} / {steps.length}
        </small>
        <ChevronDown size={14} style={{ transform: expanded ? 'none' : 'rotate(-90deg)' }} />
      </button>
      <p className="bm-sr-only" role="status">
        {steps.find((s) => s.state === 'running' || s.state === 'paused' || s.state === 'failed')?.label ?? title} · {done} {locale === 'en' ? 'steps complete' : 'étapes terminées'}
      </p>
      <div id={id}>
        <AnimatedReveal open={expanded}>
          <ol className="bm-execution-steps">
            {steps
              .filter((s) => !progressive || s.state !== 'pending')
              .map((step) => (
                <li key={step.id} data-state={step.state}>
                  {step.state === 'done' ? <Check size={16} /> : step.state === 'running' ? <Loader2 size={16} className="bm-spin" /> : step.state === 'paused' ? <Pause size={16} /> : <Circle size={14} />}
                  <div>
                    <strong>{step.label}</strong>
                    {step.detail && <p>{step.detail}</p>}
                  </div>
                  <small>
                    {locale === 'en'
                      ? {
                          pending: 'Pending',
                          running: 'Running',
                          done: 'Done',
                          paused: 'Paused',
                          failed: 'Failed',
                        }[step.state]
                      : labels[step.state]}
                  </small>
                </li>
              ))}
          </ol>
          {children}
        </AnimatedReveal>
      </div>
    </section>
  );
}
export function PromptComposer({ value, onChange, onSubmit, disabled = false, label = 'Consigne', submitLabel = 'Préparer la synthèse' }: { value: string; onChange: (value: string) => void; onSubmit: () => void; disabled?: boolean; label?: string; submitLabel?: string }) {
  const id = useId();
  return (
    <form
      className="bm-composer"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim() && !disabled) onSubmit();
      }}
    >
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} rows={3} required />
      <div className="bm-row">
        <Button type="submit" variant="primary" disabled={disabled || !value.trim()}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
export function TextEditor({ value, onChange, label = 'Synthèse', readOnly = false }: { value: string; onChange: (value: string) => void; label?: string; readOnly?: boolean }) {
  const id = useId();
  return (
    <div className="bm-text-editor">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} readOnly={readOnly} rows={10} />
    </div>
  );
}
