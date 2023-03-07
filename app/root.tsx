import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { LiveReload, Outlet, Links } from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css";

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Joke's On You!",
//   viewport: "width=device-width,initial-scale=1",
// });

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Joke's On You!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
