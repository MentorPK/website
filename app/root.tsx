//import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import useScrollPosition from './hooks/useScrollPosition';
import { useState } from 'react';
import Header from './components/Header';
import FancyPantsyMenuButton from './components/FancyPantsyMenuButton';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  const [clicked, setClicked] = useState(false);
  const pos = useScrollPosition();
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
          <FancyPantsyMenuButton
            pos={pos}
            addStyle={'ml-20'}
            clicked={clicked}
            setClicked={setClicked}
          />
          <Header clicked={clicked} sticky />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
