import { nonHookCheckBoxStoreValue } from "../store/checkBoxStore";

export const passwordConditions = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  specialCharacter: /[!@#$%^&*()]/,
  figure: /[0-9]/,
  minLength: /^.{8,}$/,
};

const checkboxesValue = nonHookCheckBoxStoreValue().checkboxes;

export const validInputChecker = (input: string, isEmail: string) => {
  // Getting the user-selected checkbox options
  const userCheckboxOptions = Object.entries(checkboxesValue)
    .filter((option) => option[1] === true)
    .map((option) => option[0]);

  // Validate input based on selected checkbox options
  for (const option of userCheckboxOptions) {
    switch (option) {
      case "uppercase":
        if (!input.match(passwordConditions.uppercase)) return false;
        break;
      case "lowercase":
        if (!input.match(passwordConditions.lowercase)) return false;
        break;
      case "figure":
        if (!input.match(passwordConditions.figure)) return false;
        break;
      case "specialCharacter":
        if (!input.match(passwordConditions.specialCharacter)) return false;
        break;
      case "minLength":
        if (!input.match(passwordConditions.minLength)) return false;
        break;
      default:
        break;
    }
  }

  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isEmail.length) {
    return false;
  }
  if (!emailRegx.test(isEmail)) return false;

  return true;
};

export const pwc = {
  hard: "HARD",
  medium: "MEDIUM",
  easy: "EASY",
};

export const checkPasswordStrength = (userInput: string) => {
  const isMeetHardPasswordCondition =
    Object.values(passwordConditions).every((condition) =>
      condition.test(userInput)
    ) && userInput.length >= 10;

  const isMeetMediumPasswordCondition =
    passwordConditions.uppercase.test(userInput) &&
    passwordConditions.lowercase.test(userInput) &&
    passwordConditions.specialCharacter.test(userInput);

  if (isMeetHardPasswordCondition) {
    return pwc.hard;
  } else if (isMeetMediumPasswordCondition) {
    return pwc.medium;
  } else {
    return pwc.easy;
  }
};
