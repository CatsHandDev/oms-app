// src/app/layout.tsx
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';

export const metadata: Metadata = {
  title: '多店舗連携OMS',
  description: '受注・在庫・出荷を一元管理するシステム',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline はブラウザ間のCSS差異を標準化します */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}