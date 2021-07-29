import { useEffect } from 'react';

import useNavigationFlow from 'state/stores/navigation-flow';

export default function useNavigationStep(currentStep: number): void {
  const setNavigationStep = useNavigationFlow(
    (state) => state.setNavigationStep
  );

  useEffect(() => {
    setNavigationStep(currentStep);
  }, [currentStep, setNavigationStep]);
}
