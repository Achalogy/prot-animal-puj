import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=8" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=8" />
        <link rel="manifest" href="/site.webmanifest?v=8" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
