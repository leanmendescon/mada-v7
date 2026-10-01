import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MADA V7 - Construtora do ConnecttAI',
  description: 'MADA V7 - leanmendescon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
