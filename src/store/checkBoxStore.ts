import { create } from "zustand";

export type CheckBoxName =
  | "uppercase"
  | "lowercase"
  | "figure"
  | "specialCharacter"
  | "minLength";

interface CheckBoxType {
  checkboxes: {
    uppercase: boolean;
    lowercase: boolean;
    figure: boolean;
    specialCharacter: boolean;
    minLength: boolean;
  };
  toggleCheckbox: (name: CheckBoxName) => void;
}

const useCheckBoxStore = create<CheckBoxType>()((set) => ({
  checkboxes: {
    uppercase: false,
    lowercase: false,
    figure: false,
    specialCharacter: false,
    minLength: false,
  },
  toggleCheckbox: (name) =>
    set((state) => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: !state.checkboxes[name],
      },
    })),
}));

// const updateLocalStorage = (checkboxes: CheckBoxType) => {
//   localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
// };

// const checkBoxValues = localStorage.getItem("checkboxes")!;
// const storedCheckboxes = JSON.parse(checkBoxValues);
// if (storedCheckboxes) {
//   useCheckBoxStore.setState((state) => ({
//     checkboxes: {
//       ...state.checkboxes,
//       ...storedCheckboxes,
//     },
//   }));
// }

export { useCheckBoxStore }; //updateLocalStorage }
