import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const imgPath = (path: string) => `https://shaikmohammedfaizan137-sudo.github.io/PRESIDENTIALPRIMESCHOOL${path}`

export const metadata: Metadata = {
  metadataBase: new URL('https://shaikmohammedfaizan137-sudo.github.io/PRESIDENTIALPRIMESCHOOL'),
  title: 'Presidential Prime School | Best School in Kamareddy, Telangana',
  description:
    'Presidential Prime School — a premium English medium school in KPR Colony, Kamareddy, Telangana. Smart classrooms, experienced faculty, safe campus, and holistic learning. Admissions open 2026-27.',
  generator: 'v0.app',
  keywords: [
    'Best School in Kamareddy',
    'Top School in Kamareddy',
    'English Medium School',
    'Admissions Open Kamareddy',
    'School Near KPR Colony',
    'Quality Education Telangana',
    'Presidential Prime School',
  ],
  openGraph: {
    title: 'Presidential Prime School | Shaping Future Leaders with Excellence',
    description:
      'A premium English medium school in Kamareddy, Telangana. Smart classrooms, experienced faculty, safe campus. Admissions open 2026-27.',
    images: [{ url: imgPath('/images/logo.jpeg'), width: 800, height: 800, alt: 'Presidential Prime School logo' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presidential Prime School | Shaping Future Leaders with Excellence',
    description:
      'A premium English medium school in Kamareddy, Telangana. Smart classrooms, experienced faculty, safe campus. Admissions open 2026-27.',
    images: [{ url: imgPath('/images/logo.jpeg'), alt: 'Presidential Prime School logo', width: 800, height: 800 }],
  },
  icons: {
    icon: [{ url: imgPath('/images/logo.jpeg'), type: 'image/jpeg' }],
    apple: imgPath('/images/logo.jpeg'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c1a17',
}

const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Presidential Prime School',
  description:
    'Premium English medium school in Kamareddy, Telangana offering holistic education from Pre-Primary to High School.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Om Shanthi Road, KPR Colony',
    addressLocality: 'Kamareddy',
    addressRegion: 'Telangana',
    postalCode: '503111',
    addressCountry: 'IN',
  },
  telephone: '+919640456760',
  sameAs: ['https://www.instagram.com/presidentialprimeschool'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    bestRating: '5',
    ratingCount: '50',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
