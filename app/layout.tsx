import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Predict Customer Churn 30 Days Before It Happens',
  description: 'Analyzes user behavior patterns and engagement metrics to predict churn risk and trigger retention campaigns for SaaS founders and customer success teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="842fd859-67a5-49ce-a9a2-82f125b739f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
