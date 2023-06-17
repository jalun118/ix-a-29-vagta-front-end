import { useEffect, useState } from "react";

export default function ButtonToTop({ OnOpen, callback }) {
  const [isOffSet, SetIsOffSet] = useState(false)

  const handlerToTop = (e) => {
    if (callback) {
      callback(e)
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const onScroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) return SetIsOffSet(true);
    return SetIsOffSet(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button onClick={() => handlerToTop()} className={`text-white bg-emerald-500 dark:bg-emerald-400 flex justify-center items-center font-medium rounded-full text-sm p-2 shadow-xl shadow-gray-700/50 transition-all duration-300 ease-in-out ${OnOpen && isOffSet ? "translate-y-0 mb-2 scale-1 z-0 visible hover:scale-[1.1] active:scale-[1.1]" : "translate-y-[5.5rem] scale-0 -z-40 invisible"} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}
