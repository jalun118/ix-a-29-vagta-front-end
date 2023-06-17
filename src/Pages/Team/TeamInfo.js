import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { BrandTitle2 } from "../../lib/Lib";
import { AppContext } from "../../lib/context/app-context";
import "./team.css";

export default function TeamInfo() {
  const context = useContext(AppContext);
  const { GetTeam } = context.GetTeam;

  // const checkAndAddElements = (sentence, keywords, elements) => {
  //   const parts = [];
  //   let currentPart = sentence;

  //   for (let i = 0; i < keywords.length; i++) {
  //     const keyword = keywords[i];
  //     const element = elements[i];

  //     if (currentPart.includes(keyword)) {
  //       const keywordIndex = currentPart.indexOf(keyword);
  //       const afterKeyword = currentPart.substring(keywordIndex + keyword.length);
  //       parts.push(element);
  //       currentPart = afterKeyword;
  //     }
  //   }

  //   parts.push(currentPart);

  //   return (
  //     <div>
  //       {parts.map((part, index) => (
  //         <Fragment key={index}>{part}</Fragment>
  //       ))}
  //     </div>
  //   );
  // };

  // const sentence = 'Ini adalah kalimat contoh yang mengandung kata kunci pertama, kata kunci kedua, dan kata kunci ketiga.';
  // const keywords = ['kata kunci pertama', 'kata kunci kedua', 'kata kunci ketiga'];
  // const elements = [
  //   <strong>Elemen Pertama</strong>,
  //   <em>Elemen Kedua</em>,
  //   <span style={{ color: 'blue' }}>Elemen Ketiga</span>,
  //   <span style={{ color: 'blue' }}>Elemen EMpat</span>,
  //   <span style={{ color: 'blue' }}>Elemen Lima</span>,
  //   <span style={{ color: 'blue' }}>Elemen Enam</span>,
  //   <span style={{ color: 'blue' }}>Elemen Tujuh</span>,
  // ];
  // const modifiedSentence = checkAndAddElements(sentence, keywords, elements);

  return (
    <>
      <div className="md:mx-10 mt-3 pb-5 mx-4 flex justify-center">
        <div className="lg:max-w-[80%] font-sans">
          <div>
            <h1 className="inline-block text-[2rem] font-bold tracking-tight text-black dark:text-white font-roboto">Informasi Tambahan</h1>
            <p className="mb-4 text-lg font-light dark:text-gray-300 text-justify"><span className="mr-10" /> Kelas 9A angkatan 29 merupakan salah satu kelas di SMPN 1 Pagedangan yang penuh dengan semangat dan dedikasi. Mereka adalah kelompok siswa yang berbakat, cerdas, dan memiliki motivasi tinggi dalam mengejar prestasi akademik dan non-akademik. Dalam lingkungan sekolah, mereka dikenal sebagai kelompok yang solid dan saling mendukung.</p>
            <p className="mb-11 text-lg font-light dark:text-gray-300 text-justify"><span className="mr-10" /> Dengan kehadiran guru yang berkompeten dan fasilitas yang memadai di SMPN 1 Pagedangan, kelas 9A angkatan 29 memiliki kesempatan untuk berkembang secara optimal. Kebersamaan dan kolaborasi adalah nilai yang ditanamkan dalam kelas ini, sehingga setiap individu memiliki peran penting dalam mencapai tujuan bersama..</p>
            <p className="mb-4 text-base font-light dark:text-gray-300 text-justify"><BrandTitle2 /> dikelola oleh tim pendiri dan sekelompok kecil kontributor.</p>
            <ul className="w-[90%] sm:w-[70%] mb-4 text-base font-medium text-gray-900 bg-white border bg-opacity-70 border-gray-500 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {GetTeam.map((idx, i) => {
                return (
                  <a className="item-team list-item" key={i} target={"_blank"} href={idx.repository} rel="noreferrer">
                    <img src={idx.profile} width="40" height="40" className="inline-block rounded-lg" alt="daadad" />
                    <span className="mx-2 mr-1">{idx.name}</span>
                    <span className="font-light">@{idx.github_name}</span>
                  </a>
                );
              })}
            </ul>
            <p className="mb-2 text-base font-light dark:text-gray-300 text-justify">Kalau ada yang mau ikut membangun atau pun memperbaiki <BrandTitle2 /> dibagian front end, boleh langsung ke <a href="https://github.com/jalun118/ix-a-29-vagta-front-end" target="_blank" rel="noreferrer" className="underline text-blue-700 dark:text-blue-400">github</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}