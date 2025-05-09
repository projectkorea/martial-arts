import { create } from 'zustand';

export interface ShareData {
  title: string;
  explanation: string;
  currentUrl: string;
  resultImageUrl: string;
}

interface StoreState {
  shareData: ShareData;
  setShareData: (data: ShareData) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  answers: string[];
  addAnswer: (answer: string) => void;
  resetAnswers: () => void;
  resetStep: () => void;
}

const useStore = create<StoreState>((set) => ({
  shareData: {
    title: '',
    explanation: '',
    currentUrl: '',
    resultImageUrl: '',
  },
  setShareData: (data) => set({ shareData: data }),
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  answers: [],
  addAnswer: (answer) => set((state) => ({ answers: [...state.answers, answer] })),
  resetAnswers: () => set({ answers: [] }),
  resetStep: () => set({ currentStep: 0 }),
}));

export default useStore; 