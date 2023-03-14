import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from "~/styles/index.css";

export const meta: MetaFunction = () => ({
  title: "Remix Jokes!",
  description: "Remix Jokes app. Learn Remix and laugh at the same time!",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function IndexRoute() {
  return (
    <div className="j-container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
