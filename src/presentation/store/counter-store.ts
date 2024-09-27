import { create } from "zustand";

export interface CounterState {
 count: number;

 incrementBy: (value: number) => void;
}

export const useCounterState = create<CounterState>()( (set,get) => ({
  count: 0,

  incrementBy:(value: number) => {
    // console.log(get());
    // set (state => ({ count: state.count + value })); // no pasamos por el get
    set({count: get().count + value });
  }
}) );