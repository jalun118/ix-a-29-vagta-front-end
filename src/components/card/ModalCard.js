import { useRef, useState } from "react";

const body = document.querySelector("body");

function StatisModal(isStatis) {
  if (isStatis) {
    return body.style.overflow = "hidden";
  }
  return body.removeAttribute('style');
}

export default function ModalCard({ callBack, link, isShowModal }) {
  const [SUCCES_SELECT, SET_SUCCES_SELECT] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const SELECTOR = useRef();

  function SendEmail() {
    window.open("mailto:");
  }

  if (isShowModal) {
    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }

  function CopyToClipbord() {
    SELECTOR.current.select();
    SELECTOR.current.setSelectionRange(0, 99999);
    if (navigator.clipboard.writeText) {
      navigator.clipboard.writeText(SELECTOR.current.value);
      SET_SUCCES_SELECT(true);
      const HIDDEN_COMENT = setTimeout(() => {
        SET_SUCCES_SELECT(false);
      }, 2000);
      return () => clearTimeout(HIDDEN_COMENT);
    }

    return alert("browser not allow clipboard");
  }

  function handlerClose(e) {
    setIsShow(false);
    setTimeout(() => {
      if (callBack) {
        callBack(e);
      }
      return StatisModal(false);
    }, 200);
  }

  StatisModal(true);

  return (
    <>
      <div id="modal" tabIndex="-1" aria-hidden="true" className={`fixed justify-center items-center z-50 flex w-full p-4 overflow-x-hidden overflow-y-auto inset-0 md:h-full transition duration-200 ease-in-out bg-black ${isShow ? "bg-opacity-60" : "bg-opacity-0 opacity-0"}`}>
        <div className="relative w-full max-w-md lg:max-w-lg h-auto">
          <div className={`relative bg-white rounded-lg shadow lg:scale-[1.1] transition duration-300 ease-in-out dark:bg-gray-700 ${isShow ? "" : "translate-y-4"}`}>
            <button onClick={(e) => handlerClose(e)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crypto-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Share
              </h3>
            </div>
            <div className="p-6 pt-3">

              <div className="my-4 mt-1">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <input type="search" ref={SELECTOR} id="default-search" className="block w-full p-3 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linknya coy" defaultValue={link} />
                  <button onClick={() => CopyToClipbord()} className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy</button>
                </div>
                <span className={`${SUCCES_SELECT ? "block" : "hidden"}`}>Link berhasil di copy</span>
              </div>

              <ul className="my-3 mt-1 space-x-3 flex flex-row overflow-auto">
                <li>
                  <a href={"https://api.whatsapp.com/send/?text=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="text-[2.2rem] bg-[#25D366] p-3 px-[0.86rem] rounded-full text-white">
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href={"https://www.facebook.com/dialog/share?href=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="text-[2.2rem] bg-[#3B5998] p-3 px-[1.2rem] rounded-full text-white">
                      <i className="fa-brands fa-facebook-f"></i>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href={"https://twitter.com/intent/tweet?url=" + link} target="_blank" className="flex items-center flex-col text-base font-bold rounded-lg" rel="noreferrer">
                    <span className="text-[2.2rem] bg-[#1DA1F2] p-3 px-3 rounded-full text-white">
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Twitter</span>
                  </a>
                </li>
                <li>
                  <button onClick={() => SendEmail()} className="flex items-center flex-col text-base font-bold rounded-lg">
                    <span className="text-[2.2rem] bg-[#888888] p-3 px-3 rounded-full text-white">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="font-[300] mt-2 text-sm text-black dark:text-gray-100">Email</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
