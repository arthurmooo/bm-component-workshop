/** Shared transitions; callers use duration 0 when reduced motion is requested. */
export const motionTokens = {
  feedback: 0.14,
  reveal: 0.24,
  ease: [0.22, 1, 0.36, 1] as const,
};
