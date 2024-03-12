import { create } from 'zustand';

const useTodoTimerStore = create((set) => ({
  effortTime: 0,
  setEffortTime: (val) =>
    set({
      effortTime: val,
    }),
  increaseEffortTime: () =>
    set((prev) => ({ effortTime: prev.effortTime + 1 })),
}));

export default useTodoTimerStore;
