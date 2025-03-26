import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
        <div id="root">
          {isHydrated ? children : (
            <div className="min-h-screen bg-[#1C1C25] flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#9AE362]"></div>
            </div>
          )}
        </div>
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

function ErrorComponent({ status, title, message }: { status: string; title: string; message: string }) {
  return (
    <div className="min-h-screen bg-[#1C1C25] flex items-center justify-center px-4">
      <div className="text-center">
        <div>
          <h1 className="text-9xl font-bold text-[#9AE362]">{status}</h1>
          <h2 className="text-4xl font-bold text-white mt-8 mb-4">{title}</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {message}
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9AE362] to-[#8ACF57] 
                     text-black px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document title="Not Found">
        <ErrorComponent
          status="404"
          title="Page Not Found"
          message="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
      </Document>
    );
  }

  return (
    <Document title="Error!">
      <ErrorComponent
        status="500"
        title="Something went wrong"
        message="An unexpected error occurred. Please try again later."
      />
    </Document>
  );
}


