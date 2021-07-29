import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ComponentTransitionProps {
  children: ReactNode;
}

export default function ComponentTransition(
  props: ComponentTransitionProps
): JSX.Element {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
