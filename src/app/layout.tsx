
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from '@/components/ConvexClientProvider'
import { Header } from './header'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ClerkProvider>
              <Header />
              <ConvexClientProvider>
                <div className='container'>{children}
                   <Toaster />
                </div>
              </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}