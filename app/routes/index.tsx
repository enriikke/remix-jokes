import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
};

export default function IndexRoute() {
  return (
    <div>Hello world! From Index!</div>
  );
}
