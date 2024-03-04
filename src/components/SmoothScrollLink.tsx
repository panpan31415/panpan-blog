import { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useActiveRoute } from "./NavigationContext";

type SmoothScrollLinkProps = {
  to: string;
  children: ReactNode;
};
export default function SmoothScrollLink({
  to,
  children,
}: SmoothScrollLinkProps) {
  const [activeRoute, setActiveRoute] = useActiveRoute();
  const scrollToElement = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveRoute(to);
    }
  };
  return (
    <Link
      to={to}
      onClick={scrollToElement}
      className={`navigation__link ${
        activeRoute === to ? "navigation__link--active" : ""
      }`}
    >
      {children}
    </Link>
  );
}
