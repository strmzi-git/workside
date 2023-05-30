import { create } from "zustand";

interface useShowDetailsProps {
  id: string;
  showDetails: boolean;
  useShowDetails: () => void;
  useHideDetail: () => void;
}

const useShowDetails = create<useShowDetailsProps>((set) => ({
  id: "",
  showDetails: false,
  useShowDetails: () => set({ showDetails: true }),
  useHideDetail: () => set({ showDetails: false }),
}));

export default useShowDetails;
