import { useNavigate } from "react-router-dom";

export default function ButtonLink({ to, className, children, onClick, ...props }) {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <button className={className} {...props} onClick={(e) => handlerClick(e)}>{children}</button>
  );
}
