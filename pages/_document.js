import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/favicon-blue.png' type='image/png' />
      </Head>
        <title>Rentopedia</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
