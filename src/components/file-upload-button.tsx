import {useRef, type ChangeEvent} from 'react';
import {Upload} from 'lucide-react';
import {Button, type ButtonProps} from './ui/button';

export type FileUploadButtonProps={
  label?:string;
  accept?:string;
  onSelect:(file:File)=>void;
  buttonProps?:Omit<ButtonProps,'onClick'|'children'>;
};

export function FileUploadButton({label='Upload',accept='.pdf,.doc,.docx,.xls,.xlsx,.csv',onSelect,buttonProps}:FileUploadButtonProps){
 const input=useRef<HTMLInputElement>(null);
 function change(event:ChangeEvent<HTMLInputElement>){const file=event.target.files?.[0];if(file)onSelect(file);event.target.value=''}
 return <><input ref={input} type="file" hidden accept={accept} onChange={change}/><Button small {...buttonProps} onClick={event=>{event.stopPropagation();input.current?.click()}}><Upload size={13}/>{label}</Button></>;
}
