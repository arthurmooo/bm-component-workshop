// Public entry point: no workshop pages, fixtures, localStorage or external calls.
import './styles.css';
export { Card, CardHeader, Input, Field, MetricCard, EmptyState, type MetricTone } from './layout';
export { Button, type ButtonProps } from '../components/ui/button';
export { AppSelect } from '../components/ui/app-select';
export { AmountInput } from '../components/ui/amount-input';
export { DatePicker } from '../components/ui/date-picker';
export { DataTable, DataRow, type TableSort } from '../components/ui/data-table';
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../components/ui/dropdown-menu';
export { StatusBadge, type Status } from '../components/status-badge';
export { AnimatedReveal } from '../components/ui/animated-reveal';
export { ActionFeedback } from '../components/ui/action-feedback';
export { motionTokens } from './motion';
export { DetailDrawer, DocumentList, ExecutionJournal, PromptComposer, TextEditor, type DetailDrawerProps, type DrawerProperty, type DrawerActivity, type DocumentItem, type ExecutionStep } from './dossier-components';
export { WorkspaceShell, type WorkspaceNavItem } from './workspace';
export { AlertSurface, WorkInbox, type AlertLevel, type InboxWorkItem, type WorkInboxProps } from '../components/work-surfaces';
export { AgendaCards, type AgendaEvent } from '../components/agenda-cards';
export { DealKanban, type DealKanbanCard } from '../components/kanban';
export { KpiCard, type KpiCardProps } from '../components/kpi-card';
export { ViewSelector, type ViewSelectorItem, type ViewSelectorProps } from '../components/view-selector';
export { PipelineChart, type PipelineChartProps, type PipelineStage } from '../components/pipeline-chart';
export { DepthChart, type DepthChartProps } from '../components/charts-extra';
export { RichTable, type RichTableProps, type RichTableRow } from '../components/rich-table';
export { EntityCell, NextActionCell, PersonCell, ProgressCell, SparklineCell } from '../components/rich-table-cells';
export { FileUploadButton, type FileUploadButtonProps } from '../components/file-upload-button';
export { UploadCard, type UploadCardProps, type UploadState } from '../components/upload-card';
export { useUpload, type UploadAction, type UploadSnapshot } from '../components/use-upload';
export { PlanningGantt, type PlanningGanttProps } from '../components/planning-gantt';

export { PageLayout, Grid, Row, Stack, SelectField, KeyValueList, Notice, ChoiceCards, Pagination, BarChart, RangeChart, EvidenceMatrix, NetworkExplorer } from './analytics';

export { LayoutDashboard as OverviewIcon, Library as LibraryIcon, ChartNoAxesCombined as TrendsIcon, MessageSquare as AskIcon } from 'lucide-react';

export { PromptBox, PromptPanel, PromptActionTiles, type PromptAttachment, type PromptOption } from './prompt-box';

export { FilterPanel } from './filter-panel';
export { ChartFrame, ComparisonChart, DistributionChart, TrendChart } from './workshop-charts';
export { SectionNav, WorkCard, ActivityTimeline, ReadinessFlow, BuyerJourney, ReadinessChecklist, AccessBoundary, MissionProgress, MemorandumOverview, KanbanBoard, GanttTimeline, ApprovalPanel, Conversation, MessageComposer, ReportEditor, EvidenceViewer, ProfileCard, SourcedAnswer, SourcingTabs, CriteriaStrip, BuyerSuggestionCard, ShortlistSummary, type ActivityItem, type ReadinessStep, type JourneyStep, type ChecklistItem, type AccessBoundaryItem, type MissionStep, type MemorandumSection, type PlanTask, type ReportSection, type SourcingTab, type BuyerSuggestion } from './workflow-components';
