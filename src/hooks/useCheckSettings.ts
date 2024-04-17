import { useEffect, useState } from "react";
import { useCheckBoxStore } from "../store/checkBoxStore";
import { useModalStore } from "../store/modalStore";

type PasswordStrength = "Easy" | "Medium" | "Hard";

const useCheckSettings = () => {
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength | null>(null);
  const [disableFormInput, setDisableFormInput] = useState(false);

  const checkboxes = useCheckBoxStore((v) => v.checkboxes);
  const openModal = useModalStore((e) => e.openModal);

  const { uppercase, lowercase, figure, specialCharacter, minLength } =
    checkboxes;
  const isMeetHardPasswordCondition =
    uppercase && lowercase && figure && specialCharacter && minLength;
    const isMeetMediumPasswordCondition = uppercase && lowercase && specialCharacter
  if (isMeetHardPasswordCondition) {
    setPasswordStrength("Hard");
  } else if (isMeetMediumPasswordCondition) {
    setPasswordStrength("Medium");
  } else {
    setPasswordStrength("Easy");
  }

  useEffect(() => {
    const hasSettings = Object.values(checkboxes).some((value) => value);

    if (!hasSettings) {
      console.log("User has no settings yet");
      setDisableFormInput(true);
      openModal();
    } else {
      setDisableFormInput(false);
    }
  }, [checkboxes]);

  return { passwordStrength, disableFormInput };
};

export default useCheckSettings;
