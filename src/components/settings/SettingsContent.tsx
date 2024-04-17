
import { useModalStore } from "../../store/modalStore";
import CheckBoxGroup from "./child/CheckBoxGroup";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function SettingsContent() {

    


  return (
    <div className="flex flex-col space-y-5">
        
      <div className="">
        <h4 className="text-2xl font-book">Select criteria for your password</h4>
        <h4 className="font-book font-light text-3xl hidden">
          Select criteria for password
        </h4>
      </div>

      <div className="">
        <CheckBoxGroup />
      </div>
    </div>
  );
}
