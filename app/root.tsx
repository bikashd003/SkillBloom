import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "SkillBloom - Learn and Grow" },
    { name: "description", content: "Enhance your skills with SkillBloom's expert-led courses" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { charSet: "utf-8" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
];

function Document({
  children,
  title = "SkillBloom",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className="h-full">
        <div id="root">{children}</div>
        <ScrollRestoration />
        <Scripts />
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

// Modern error boundary for Remix v2
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">
            {error.status} {error.statusText}
          </h1>
          <p className="text-gray-600">{error.data}</p>
          <p>
            <a href="/" className="text-blue-600 hover:underline">
              Return to home page
            </a>
          </p>
        </div>
      </Document>
    );
  }

  return (
    <Document title="Error!">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
        <p className="text-gray-600">Please try again later</p>
        <p>
          <a href="/" className="text-blue-600 hover:underline">
            Return to home page
          </a>
        </p>
      </div>
    </Document>
  );
}

// Catch boundary for handling expected errors (404, etc.)
export function CatchBoundary() {
  return (
    <Document title="Not Found">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </Document>
  );
}





