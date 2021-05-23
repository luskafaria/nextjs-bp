import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
