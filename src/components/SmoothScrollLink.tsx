import { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useActiveRoute } from "./NavigationContext";

export function scrollToElement(e: MouseEvent, targetElementId: string, callback?: (params: unknown) => void) {
  e.preventDefault();
  const element = document.getElementById(targetElementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    callback && callback(targetElementId);
  }
}

type SmoothScrollLinkProps = {
  to: string;
  children: ReactNode;
};
export default function SmoothScrollLink({ to, children }: SmoothScrollLinkProps) {
  const [activeRoute, setActiveRoute] = useActiveRoute();
  return (
    <Link
      to={to}
      onClick={(e) => scrollToElement(e, to.slice(1), () => setActiveRoute(to))}
      className={`navigation__link ${activeRoute === to ? "navigation__link--active" : ""}`}
    >
      {children}
    </Link>
  );
}
