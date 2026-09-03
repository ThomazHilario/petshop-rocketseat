import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../styles';
import { QueryClientProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'petshop',
  description: 'Serviço de cuidados ao seu pet!',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col text-white">
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
