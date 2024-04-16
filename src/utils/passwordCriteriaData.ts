import { CheckBoxName } from "../store/checkBoxStore";

interface CheckBoxInfo {
  name: string;
  value: CheckBoxName;
  description: string;
}

export const checkboxesInfo: CheckBoxInfo[] = [
  {
    name: "Uppercase",
    value: "uppercase",
    description: "At least one uppercase letter (A-Z)",
  },
  {
    name: "Lowercase",
    value: "lowercase",
    description: "At least one lowercase letter (a-z)",
  },
  {
    name: "Figure(Number)",
    value: "figure",
    description: "At least one digit (0-9)",
  },

  {
    name: "Special character",
    value: "specialCharacter",
    description: "At least one special character (!@#$%^&*())",
  },
  {
    name: "8 characters long",
    value: "minLength",
    description: "At least 8 characters in length",
  },
];
