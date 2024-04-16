// import React from 'react'

import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { initialState, reducer } from "../../store/modalReducer";
import { useReducer } from "react";
import { OPEN_MODAL } from "../../store/modalConstants";


type SettingsMenuProps = {
  openModal: boolean
  handleOpenModal: () => void
}

export default function SettingsMenu({openModal, handleOpenModal}: SettingsMenuProps) {
  
  


  return (
    <>
      <div className="flex items-center justify-end mb-20">
        <div className="group">
          {/* <div className="hidden justify-center items-center h-12 rounded-lg cursor-pointer hover:bg-rose-100 group-hover:flex bg-rose-400 absolute translate-x-1 translate-y-1" /> */}
          <button
            className={`flex justify-center space-x-2 items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-rose-600 ${
              openModal ? "bg-rose-500 text-white" : "bg-gray-50"
            }  relative focus:outline-none outline-none`}
            type="button"
            onClick={handleOpenModal}
          >
            <p className="group-hover:text-white">Settings</p>
            <Cog6ToothIcon className={`w-5 h-5 group-hover:text-white ${openModal ? "text-white" : "text-black"}`} />
          </button>
        </div>
      </div>
    </>
  );
}