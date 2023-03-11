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

function Document({
  children,
  title = `Joke's On You!`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
