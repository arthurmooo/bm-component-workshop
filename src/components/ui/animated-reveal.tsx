import { motionTokens } from '../../design-system/motion';
import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function AnimatedReveal({open, children}: {open: boolean; children: ReactNode}) {
  const reduced = useReducedMotion();
  return <motion.div className="animated-reveal" inert={!open} aria-hidden={!open}
    initial={false} animate={{height:open?'auto':0,opacity:open?1:0}}
    transition={{duration:reduced?0:motionTokens.reveal,ease:motionTokens.ease}} style={{overflow:'hidden'}}>
    <div style={{display:'flow-root'}}>{children}</div>
  </motion.div>;
}
