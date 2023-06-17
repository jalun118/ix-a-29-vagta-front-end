import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorPage from "../../../components/Errorpage/ErrorPage";
import Card from "../../../components/card/Card";
import { LoadingSpiner, NameIndexPage, TabTitle } from "../../../lib/Lib";
import { AppContext } from "../../../lib/context/app-context";

const handleScrollToSelectID = (idElement) => {
  const element = document.getElementById(idElement);
  const elementNav = document.getElementById("header-nav");
  if (element) {
    window.scrollTo({
      top: element.offsetTop - elementNav.offsetHeight,
      left: 0,
      behavior: "smooth"
    });
  }
};

export default function FotoSubmenu() {
  TabTitle("Foto | Album | " + NameIndexPage);
  const context = useContext(AppContext);
  const { GetFoto, LoadingFoto, ErrorFoto } = context.foto;
  const { hash } = useLocation();
  const IDElement = hash.split("#")[1];

  const NotLoading = !LoadingFoto;

  const mapping = GetFoto.map((idx, i) => {
    return (
      <Card
        key={i}
        id={idx.id_build}
        thumbnail={idx.link_foto}
        title={idx.judul}
        describe={idx.deskripsi} date={idx.createdAt}
        linkDownload={idx.link_download_foto}
        linkRepo={idx.link_original_foto}
      />
    );
  });

  useEffect(() => {
    handleScrollToSelectID(IDElement);
  }, [NotLoading, IDElement]);

  return (
    <>
      {LoadingFoto ? <LoadingSpiner /> : (ErrorFoto[0] === false) ? <ErrorPage message={ErrorFoto[2]} ErrorCode={ErrorFoto[1]} />
        : (
          <div className="grid gap-0 md:gap-7 pb-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 md:container">
            {mapping}
          </div>
        )}
    </>
  );
}
