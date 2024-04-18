// import React from 'react'

import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { useModalStore } from "../../store/modalStore";
import useCheckSettings from "../../hooks/useCheckSettings";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/16/solid";

export default function SettingsMenu() {
  const isModalOpen = useModalStore((m) => m.isModalOpen);
  const openModal = useModalStore((c) => c.openModal);

  const { disableFormInput } = useCheckSettings();

  return (
    <>
      <div className="group">
        {/* <div className="hidden justify-center items-center h-12 rounded-lg cursor-pointer hover:bg-rose-100 group-hover:flex bg-rose-400 absolute translate-x-1 translate-y-1" /> */}
        <button
          className={`flex justify-center space-x-2 items-center px-2 md:px-4 py-2 rounded-lg cursor-pointer hover:bg-rose-600 relative ${
            isModalOpen ? "bg-rose-500 text-white" : "bg-gray-100"
          }  focus:outline-none outline-none`}
          type="button"
          onClick={openModal}
        >
          <p className="group-hover:text-white text-sm md:text-base">
            Settings
          </p>
          <Cog6ToothIcon
            className={`md:w-5 md:h-5 w-3.5 h-3.5 group-hover:text-white ${
              isModalOpen ? "text-white" : "text-black"
            }`}
          />
          <span className="">
            {disableFormInput ? (
              <ExclamationCircleIcon
                className={` w-5 h-5 md:w-6 md:h-6 rounded-md absolute -right-1.5 -top-1.5 flex justify-center items-center ${"text-rose-600"}`}
              />
            ) : (
              <CheckCircleIcon
                className={` w-4 h-4 md:w-6 md:h-6 rounded-md absolute -right-1.5 -top-1.5 flex justify-center items-center text-emerald-600`}
              />
            )}
          </span>
        </button>
      </div>
    </>
  );
}
