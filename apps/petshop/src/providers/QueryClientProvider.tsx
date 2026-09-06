'use client';

import {
  QueryClientProvider as QueryClientComponent,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

type QueryClientProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => (
  <QueryClientComponent client={queryClient}>{children}</QueryClientComponent>
);
