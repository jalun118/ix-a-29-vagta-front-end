import { Fragment, useContext } from "react";
import ErrorPage from "../../../components/Errorpage/ErrorPage";
import { BadgeBendahara, BadgeChairman, BadgeDevTeam, BadgeEagle, BadgeFlower, BadgeOsis, BadgeSekretaris, BadgeViceChairman } from "../../../lib/AssetIcon/IconCustom";
import { LoadingSpiner, NameIndexPage, TabTitle } from "../../../lib/Lib";
import { AppContext } from "../../../lib/context/app-context";

function CardTeman({ idx, ...props }) {
  const regex = new RegExp('\\b' + "ex " + '\\b', 'gi');

  const checkAndAddElements = (sentence, keywords, elements) => {
    const parts = [];
    let currentPart = sentence.toLowerCase();
    currentPart = currentPart.replace(regex, "");
    currentPart = currentPart.split(", ");

    for (let i = 0; i < keywords.length; i++) {
      const keyword = keywords[i].toLowerCase();
      const element = elements[i];

      for (let j = 0; j < currentPart.length; j++) {
        if (currentPart[j] === keyword) {
          parts.push(element);
        }
      }
    }

    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={index}>{part}</Fragment>
        ))}
      </>
    );
  };

  const keywords = [
    "siswa",
    "siswi",
    "bendahara",
    "osis",
    "ketua kelas",
    "wakil ketua kelas",
    "dev team",
    "sekretaris",
  ];
  const elements = [
    <BadgeEagle className="w-8 h-8 ml-1.5" />,
    <BadgeFlower className="w-8 h-8 ml-1.5" />,
    <BadgeBendahara className="w-8 h-8 ml-1.5" />,
    <BadgeOsis className="w-8 h-8 ml-1.5" />,
    <BadgeChairman className="w-8 h-8 ml-1.5" />,
    <BadgeViceChairman className="w-8 h-8 ml-1.5" />,
    <BadgeDevTeam className="w-8 h-8 ml-1.5" />,
    <BadgeSekretaris className="w-8 h-8 ml-1.5" />,
  ];
  const modifiedSentence = checkAndAddElements(idx.pangkat, keywords, elements);

  return (
    <div {...props} className="w-full max-w-[100%] p-4 px-5 capitalize bg-white border bg-opacity-40 dark:bg-opacity-40 border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-lg md:text-xl font-bold text-gray-900 dark:text-gray-200 align-middle flex items-center">presensi {idx.no_absen} {modifiedSentence}</h5>
      <ul className="space-y-2 my-2">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-700 dark:text-gray-300">Nama : {idx.nama}</span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-700 dark:text-gray-300">kelas : {idx.kelas}</span>
        </li>
      </ul>
    </div>
  );
}

export default function TemanSubMenu() {
  TabTitle("Presensi | Album | " + NameIndexPage);
  const context = useContext(AppContext);
  const { GetTeman, LoadingTeman, ErrorTeman } = context.teman;

  const mapping = GetTeman.map((idx, i) => {
    return (
      <CardTeman idx={idx} key={i} />
    );
  });

  return (
    <>
      {LoadingTeman ? <LoadingSpiner /> : (ErrorTeman[0] === false) ? <ErrorPage message={ErrorTeman[2]} ErrorCode={ErrorTeman[1]} />
        : (
          <div className="container">
            <div className="grid mb-12 lg:mb-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
              {mapping}
            </div>
          </div>
        )}
    </>
  );
}


