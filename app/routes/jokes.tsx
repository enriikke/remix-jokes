import type { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import styles from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function JokesRoute() {
  return (
    <div className="container flex flex-col px-2">
      <header className="py-5 flex justify-between items-center">
        <Link
          to="/"
          title="Remix Jokes"
          aria-label="Remix Jokes"
        >
          <h1 className="text-5xl font-extrabold">
            <span className="inline-block md:hidden">🤪</span>
            <span className="hidden md:inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              J<span className="text-black">🤪</span>KES
            </span>
          </h1>
        </Link>
      </header>
      <main className="container pt-5 flex gap-2">
        <div className="mr-5">
          <Link to="."><h2 className="text-2xl mb-3">Get a random joke</h2></Link>
          <h3>Here are a few more jokes to check out:</h3>
          <ul>
            <li>
              <Link to="some-joke-id">Hippo</Link>
            </li>
          </ul>
          <Link to="new" className="inline-block shadow p-3 mt-3 rounded bg-sky-500 text-white">
              Add your own
          </Link>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
