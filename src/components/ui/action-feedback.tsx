import { motionTokens } from '../../design-system/motion';
import "./action-feedback.css";
import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export function ActionFeedback({state,icon,text}:{state:string;icon?:ReactNode;text:string}) {
  const reduced=useReducedMotion();
  return <span className="ac-action-label"><AnimatePresence mode="wait" initial={false}><motion.span key={state} initial={{opacity:0,y:reduced?0:5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced?0:-4}} transition={{duration:reduced?0:motionTokens.feedback}}>{icon}<span>{text}</span></motion.span></AnimatePresence></span>;
}
