import { NextDevtoolsProvider } from '@next-devtools/core'
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextDevtoolsProvider>
          {children}
        </NextDevtoolsProvider>
      </body>
    </html>
  );
}