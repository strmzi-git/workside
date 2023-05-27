import { create } from "zustand";

interface useLoginModalProps {
  isOpen: boolean;
  showSignUp: boolean;
  setSignUp: () => void;
  setLogin: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const useLoginModal = create<useLoginModalProps>((set) => {
  return {
    isOpen: false,
    showSignUp: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    setLogin: () => set({ showSignUp: false }),
    setSignUp: () => set({ showSignUp: true }),
  };
});

export default useLoginModal;
