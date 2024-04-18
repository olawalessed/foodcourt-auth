// import React from 'react'

import { Img } from "@chakra-ui/react";
import SettingsMenu from "../settings/SettingsMenu";

export default function HeaderBar() {
  return (
    <>
      <div className="w-full h-[10vh] flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-10">
        <a className="block text-teal-600" href="#">
          <Img src="/src/assets/fc.png" alt="" className="w-40 h-7" />
        </a>
        <SettingsMenu />
      </div>
    </>
  );
}
