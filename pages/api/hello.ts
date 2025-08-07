import type { Metadata } from "next";
import type { NextApiRequest, NextApiResponse } from 'next'

const thisSiteUrl = "http://localhost:3000"; // TODO - MUDAR PARA HTTPS QUANDO EM PRODUÇÃO 

export const metadata: Metadata = {
  metadataBase: new URL(thisSiteUrl),
  robots: { index: false, follow: false },
  title: { absolute: "Ensinamentos Baseados na Bíblia Sagrada", template: "%s | Ensinamentos Baseados na Bíblia Sagrada" },
  description: "Descrição Ensinamentos Baseados na Bíblia Sagrada",
  applicationName: "Ensinamentos Baseados na Bíblia Sagrada",
  creator: "Andrey Djason Viana",
  authors: [{name: "Andrey Djason Viana"}],
  generator: "Next.js",
  keywords: ['teste1', 'teste2', 'teste3'],
  alternates: {
    canonical: thisSiteUrl,
    languages: {
      'pt-BR': thisSiteUrl +'/pt-BR',
      'en':  thisSiteUrl +'/en-US',
      'en-US':  thisSiteUrl + '/en-US',
      'de-DE':  thisSiteUrl + '/de-DE'
    }
  },
  openGraph: {
    title: 'Ensinamentos Baseados na Bíblia Sagrada',
    description: 'Descrição Ensinamentos Baseados na Bíblia Sagrada',
    url: thisSiteUrl,
    siteName: 'Ensinamentos Baseados na Bíblia Sagrada',
    images: [{ url: thisSiteUrl + '/og.png' }]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.ico"
  },
  manifest: thisSiteUrl + "manifest.json"
};

type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Next.js!' })
  } else {
    res.status(404).json({ message: 'Requisição inválida.' })
  }
}