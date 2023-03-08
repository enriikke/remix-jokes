import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { LiveReload, Outlet, Links } from "@remix-run/react";
import globalStyles from "~/styles/global.css";
import globalMediumStyles from "~/styles/global-medium.css";
import globalLargeStyles from "~/styles/global-large.css";

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Joke's On You!",
//   viewport: "width=device-width,initial-scale=1",
// });

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  {
    rel: "stylesheet",
    href: globalMediumStyles,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStyles,
    media: "screen and (min-width: 1024px)",
  },
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
