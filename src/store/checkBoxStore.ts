import { create } from "zustand";

export type CheckBoxName =
  | "uppercase"
  | "lowercase"
  | "figure"
  | "specialCharacter"
  | "minLength";

interface CheckBoxObject {
  uppercase: boolean;
  lowercase: boolean;
  figure: boolean;
  specialCharacter: boolean;
  minLength: boolean;
}

interface CheckBoxType {
  checkboxes: CheckBoxObject;
  isFormActive: boolean;
  toggleCheckbox: (name: CheckBoxName) => void;
//   disableFormInput: () => void;
//   enableFormInput: () => void;
}

const useCheckBoxStore = create<CheckBoxType>()((set) => ({
  checkboxes: {
    uppercase: false,
    lowercase: false,
    figure: false,
    specialCharacter: false,
    minLength: false,
  },
  isFormActive: false,
  toggleCheckbox: (name) =>
    set((state) => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: !state.checkboxes[name],
      },
    })),
//   disableFormInput: () => set(() => ({ isFormActive: true })),
//   enableFormInput: () => set(() => ({ isFormActive: false })),
}));

const updateLocalStorage = (checkboxes: CheckBoxObject) => {
  localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
};

const checkBoxValues = localStorage.getItem("checkboxes")!;
const storedCheckboxes = JSON.parse(checkBoxValues);
if (storedCheckboxes) {
  useCheckBoxStore.setState((state) => ({
    checkboxes: {
      ...state.checkboxes,
      ...storedCheckboxes,
    },
  }));
}

const nonHookCheckBoxStoreValue = () => {
  return useCheckBoxStore.getState()
}

export { useCheckBoxStore, storedCheckboxes, updateLocalStorage, nonHookCheckBoxStoreValue }; //updateLocalStorage }
