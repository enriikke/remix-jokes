import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  return <div>Hello world! From Index!</div>;
}
