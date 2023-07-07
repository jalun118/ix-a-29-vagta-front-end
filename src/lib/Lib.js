import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LOGO from "../img/logo.svg";
import "./lazy.css";

const lib = {};

lib.apiPoint = "https://api-a29vagta.vercel.app/api/";
lib.keyData = "EzL8m8zkUW_XsGNTjm24pEJu6akCy_cUp8GvGWvlTHdeqHoUDr9O8pLtB_q0";
lib.origin = window.location.origin;

/**
 * @param {Date} date 
 * @returns {string}
 */

function timeSince(date) {
  let NewDate = new Date(date);

  const seconds = Math.floor((new Date() - NewDate) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) return interval + " tahun yang lalu";

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval + " bulan yang lalu";

  interval = Math.floor(seconds / 604800);
  if (interval >= 1) return interval + " minggu yang lalu";

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval + " hari yang lalu";

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + " jam yang lalu";

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval + " menit yang lalu";

  return "baru saja";
}

/**
 * @param {string} newTitle 
 * @returns {HTMLMetaElement}
 */

const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};

const defaultDescription = "website ix a angkatan 29 smpn 1 pagedangan atau vagta";

/**
 * @param {string} newDescription 
 * @returns {HTMLMetaElement}
 */

const metaDescription = (newDescription) => {
  return (document.querySelector("meta[name=\"description\"]").setAttribute("content", newDescription || defaultDescription));
};

const defaultSViewPort = "width=device-width, initial-scale=1";
const SetUPViewPort = "maximum-scale=1.0, user-scalable=no";

/**
 * @param {string} SetViportSetUP 
 * @param {boolean} isZoom
 * @returns {HTMLMetaElement}
 */

const metaViewPort = (SetViportSetUP = "", isZoom) => {
  return (document.querySelector("meta[name=\"viewport\"]")).setAttribute("content", isZoom ? `${defaultSViewPort}, ${SetViportSetUP}` : `${defaultSViewPort}, ${SetUPViewPort}`);
};

const NameIndexPage = "IX A 29 - SMPN 1 PAGEDANGAN";

/**
 * @param {React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>} props 
 * @returns {React.JSX.Element}
 */

function Brand(props) {
  return (
    <img
      src={LOGO}
      {...props}
    />
  );
}

/**
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>} props 
 * @returns {React.JSX.Element}
 */

function BrandTitle(props) {
  return (
    <>
      IX A 29 -{" "}
      <span {...props}>
        1 Vagta
      </span>
    </>
  );
}

/**
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>} props 
 * @returns {React.JSX.Element}
 */

function BrandTitle2(props) {
  return (
    <>
      IX A 29 -{" "}
      <span {...props}>
        SMPN 1 PAGEDANGAN
      </span>
    </>
  );
}

const registerObserver = (ref, setShowImage, minDelay = 0, maxDelay = 0) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const RandWacth = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
      };
      setTimeout(() => {
        setShowImage(true);
      }, RandWacth(minDelay, maxDelay));
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

/**
 * @returns {React.JSX.Element}
 */

function LazyImage({ children, ratio, mindelay = null, maxdelay = null, className = "", background = true, ...props }) {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    registerObserver(imageRef.current, setShowImage, mindelay, maxdelay);
  }, [mindelay, maxdelay]);

  return (
    <>
      {showImage ? (
        <div className={`${className} p-0 m-0 ${background ? "bg-[#E0E0E0] dark:bg-[#323d4e]" : ""}`} {...props} style={{ aspectRatio: ratio ? ratio : 8.7 / 4.9 }}>
          {children}
        </div>
      ) : (
        <div ref={imageRef} className={`loading-img ${background ? "bg-[#E0E0E0] dark:bg-[#323d4e]" : ""}`}></div>
      )}
    </>
  );
}

function LoadingSpiner() {
  return (
    <div className="py-80 text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-[spin_0.4s_linear_infinite] dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
      </div>
    </div>
  );
}

function Spiner() {
  return (
    <div className="text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-[spin_0.4s_linear_infinite] dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @returns {object<URLSearchParams>}
 */

function useSearchQuery() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  return { query: searchParams, search: search };
}

/**
 * @param {RequestInfo|URL} url
 * @param {RequestInit|undefined} data
 * @returns {Promise<Response>}
 */

async function FetchRequest(url, data = {}) {
  const Respon = await fetch(url, data);
  return await Respon.json();
}

const SatuanWaktu = {
  tahun: 31536000,
  bulan: 2592000,
  minggu: 604800,
  hari: 86400,
  jam: 3600,
  menit: 60
};

/**
 * @param {Date|string|number} DateFormat
 * @param {boolean} since
 * @param {SatuanWaktu.menit|number} sinceState
 * @param {number|undefined} afterDate
 * @returns {object}
 */

function LocaleFormatIndonesia(DateFormat, since = false, sinceState = 60, afterDate = 3) {
  const date = new Date(DateFormat);
  let tahun = date.getFullYear();
  let bulan = date.getMonth();
  let tanggal = date.getDate();
  let hari = date.getDay();
  let jam = date.getHours();
  let menit = date.getMinutes();
  let detik = date.getSeconds();

  switch (hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    default: break;
  }
  switch (bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
    default: break;
  }

  const Tanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
  const Waktu = "Jam: " + jam + ":" + menit + ":" + detik;
  const TanggalNotHari = tanggal + " " + bulan + " " + tahun;

  const ObjFormat = { Tanggal, Waktu, TanggalNotHari };

  if (since) {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / sinceState);
    if (interval >= afterDate) return ObjFormat;
    return;
  }
  return ObjFormat;
}

/**
 * @param {number} min
 * @param {number} max
 * @param {Array<any>} logic
 * @param {*} isLogic
 * @param {null|undefined} Plus
 * @param {null|undefined} Minus
 * @returns {number}
 */

function randInt(min, max, logic = [], isLogic, operator = "-", Plus = null, Minus = null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (logic.includes(isLogic) && operator === "-") {
    return -Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (logic.includes(isLogic)) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (Plus) {
    return Math.floor(Math.random() * (Plus.max - Plus.min + 1) + Plus.min);
  }
  if (Minus) {
    return Math.floor(Math.random() * (Minus.max - Minus.min + 1) + Minus.min);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {number} min
 * @param {number} max
 * @param {Array<any>} logic
 * @param {*} isLogic
 * @param {null|undefined} Plus
 * @param {null|undefined} Minus
 * @returns {number}
 */

function randFloat(min, max, logic = [], index, operator = "-") {
  if (logic.includes(index) && operator === "-") {
    return -(Math.random() * (max - min) + min);
  }
  if (logic.includes(index)) {
    return +(Math.random() * (max - min) + min);
  }
  return Math.random() * (max - min) + min;
}

/**
 * @param {URL|RequestInfo|string} imgUrl
 * @param {void} callback
 * @returns {string}
 */

function ImageToBase64(imgUrl, callback = () => {}) {
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = imgUrl;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = image.naturalHeight;
  canvas.width = image.naturalWidth;
  ctx.drawImage(image, 0, 0);
  const dataUrl = canvas.toDataURL();
  callback && callback(dataUrl);
  return dataUrl;
}

export { Brand, BrandTitle, BrandTitle2, FetchRequest, ImageToBase64, LazyImage, LoadingSpiner, LocaleFormatIndonesia, NameIndexPage, SatuanWaktu, Spiner, TabTitle, defaultDescription, lib, metaDescription, metaViewPort, randFloat, randInt, timeSince, useSearchQuery };

