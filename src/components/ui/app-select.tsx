import { Children, Fragment, isValidElement, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu";
import "./app-select.css";

type Option = { value: string; label: ReactNode; disabled?: boolean };
function optionsFrom(children: ReactNode): Option[] {
  return Children.toArray(children).flatMap(child => {
    if (!isValidElement<{ value?: string | number; children?: ReactNode; disabled?: boolean }>(child)) return [];
    if (child.type === Fragment) return optionsFrom(child.props.children);
    return [{ value: String(child.props.value ?? Children.toArray(child.props.children).join('')), label: child.props.children, disabled: child.props.disabled }];
  });
}
export function AppSelect({ value, defaultValue, onValueChange, children, required, disabled = false, id, 'aria-label': label }: {
  value?: string | number; defaultValue?: string | number; onValueChange?: (value: string) => void;
  children: ReactNode; required?: boolean; disabled?: boolean; id?: string; 'aria-label'?: string;
}) {
  const options = optionsFrom(children);
  const [local, setLocal] = useState(String(defaultValue ?? options[0]?.value ?? ''));
  const [invalid, setInvalid] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const selected = String(value ?? local);
  return <><DropdownMenu onOpenChange={open => { if (open) setContainer(trigger.current?.closest('dialog') ?? null); }}>
    <DropdownMenuTrigger asChild><button ref={trigger} type="button" id={id} disabled={disabled} aria-label={label} aria-required={required} aria-invalid={invalid || undefined} className="app-select"><span>{options.find(option => option.value === selected)?.label ?? 'Sélectionner…'}</span><ChevronDown size={12}/></button></DropdownMenuTrigger>
    <DropdownMenuContent container={container} className="app-select-menu" align="start">
      {options.map(option => <DropdownMenuItem key={option.value} role="menuitemradio" aria-checked={selected === option.value} disabled={option.disabled} onSelect={() => { setInvalid(false); setLocal(option.value); onValueChange?.(option.value); }}><span className="app-select-check">{selected === option.value && <Check size={13}/>}</span><span>{option.label}</span></DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>{required && <input className="app-select-validation" aria-hidden="true" tabIndex={-1} disabled={disabled} required value={selected} onChange={() => {}} onInvalid={e => { e.preventDefault(); trigger.current?.focus(); setInvalid(true); }} />}</>;
}
