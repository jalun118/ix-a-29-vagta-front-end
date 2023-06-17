import { useLocation, useNavigate } from "react-router-dom";

export default function ButtonActive({ to, className, children, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.toLowerCase() === to;

  const handlerClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <>
      <button className={isActive ? `${className} active` : className} {...props} onClick={(e) => handlerClick(e)}>{children}</button>
    </>
  );
}
