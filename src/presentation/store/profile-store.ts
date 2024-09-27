import { create } from "zustand";

export interface ProfileState {
  name: string,
  email: string,
  changeProfile: (name: string, email: string) => void;
};

export const useProfileStore = create<ProfileState>()( (set, get) => ({
  name: 'Jhon Doe',
  email: 'jhon.doe@email.com',


  changeProfile: (name: string, email: string) => {
    console.log(get())
    set({name: name, email: email})
  }
}));