import { useState } from "react";
import ButtonToTop from "./ButtonToTop";
import ButtonTrigerOpen from "./ButtonTrigerOpen";
import ThemesButton from "./ThemesButton";

export default function ButtonSetting() {
  const [isOpen, SetOpen] = useState(false)

  return (
    <div className="fixed flex flex-col-reverse bottom-[5.5rem] right-6 z-10 lg:hidden">
      <ButtonTrigerOpen isOpen={isOpen} callback={(e) => SetOpen(e)} />
      <ThemesButton OnOpen={isOpen} />
      <ButtonToTop OnOpen={isOpen} callback={() => SetOpen(false)} />
    </div >
  )
}
