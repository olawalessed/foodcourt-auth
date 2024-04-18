// import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-10">
      <p className="md:text-sm text-xs">
        ⓒ {new Date().getFullYear().toString()}, All rights reserved
      </p>
    </div>
  );
}
