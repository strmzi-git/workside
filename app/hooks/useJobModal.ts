import { create } from "zustand";

interface useJobModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useJobModal = create<useJobModalProps>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useJobModal;
