import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {(process.env.NODE_ENV === "development" ||
          process.env.NEXT_PUBLIC_VERCEL_ENV === "production") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="VlFg2Ivc3gEpBuWzaWKL3B4clZbv3RYchHPGIGMC"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
