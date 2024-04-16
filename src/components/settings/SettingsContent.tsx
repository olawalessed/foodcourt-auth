
import { useModalStore } from "../../store/modalStore";
import CheckBoxGroup from "./child/CheckBoxGroup";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function SettingsContent() {

    const closeModal = useModalStore(m => m.closeModal)


  return (
    <div className="flex flex-col space-y-5">
        <div className="flex justify-end">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer" onClick={closeModal}>
            <XMarkIcon className="w-7 h-7" />
            </button>
        </div>
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
