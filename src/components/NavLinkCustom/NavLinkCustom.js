import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavLinkCustom({ to, children, ...props }) {
  const { pathname } = useResolvedPath(to);
  const match = useMatch({ path: pathname, end: true });

  return (
    <Link to={to} {...props} className={match ? `${props.className} active` : props.className}>
      {children}
    </Link>
  );
}
