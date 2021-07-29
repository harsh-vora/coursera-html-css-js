import create from 'zustand';

export interface NavigationFlowState {
  currentStep: number;
  setNavigationStep: (step: number) => void;
}

const useNavigationFlowState = create<NavigationFlowState>((set) => ({
  currentStep: 1,
  setNavigationStep: (step: number) => set({ currentStep: step }),
}));

export default useNavigationFlowState;
