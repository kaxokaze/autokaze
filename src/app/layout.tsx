import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
 title: { default: 'AUTOKAZE — Creator operations', template: '%s · AUTOKAZE' },
 description: 'A clear, safety-first workspace for creator operations and video publishing readiness.',
 applicationName: 'AUTOKAZE',
 icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
}
export const viewport: Viewport = { themeColor: '#101010', colorScheme: 'dark' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en"><body className={inter.className}>{children}</body></html>
}
