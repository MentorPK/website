//import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { RootContext } from './context';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

/* export const loader: LoaderFunction = async () => {
  return json({
    width: innerWidth,
  });
};
 */
const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default function App() {
  const window = hasWindow() ? 'browser' : 'server';
  console.log(window);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="text-slate-300 min-h-screen">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
