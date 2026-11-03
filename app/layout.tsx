import { Inter, Cal_Sans, Bebas_Neue, Space_Grotesk, Geist } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotest",
})
const fontMono = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
})
const fontBebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        fontMono.variable,
        spaceGrotesk.variable,
        inter.variable,
        fontBebas.variable,
        geist.variable
      )}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7ZJ9WHCC62"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7ZJ9WHCC62');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8G3HDR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
