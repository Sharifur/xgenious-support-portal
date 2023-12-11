import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import StyledComponentsRegistry from '../lib/AntdRegistry';

export const metadata: Metadata = {
  title: 'Xgenious Support Portal',
  description: 'xgenious support portal',
}
import {  ConfigProvider } from 'antd';

import theme from '@/theme/themeConfig';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConfigProvider theme={theme}>
          <StyledComponentsRegistry>
          <NextTopLoader />
          {children}
          </StyledComponentsRegistry>
      </ConfigProvider>
      </body>
    </html>
  )
}
