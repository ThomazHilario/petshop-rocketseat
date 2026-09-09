'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useParams = (keyParam: string) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get(keyParam);

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value.trim());
    router.push(pathName + '?' + params.toString());
  };

  return {
    param,
    setParam,
  };
};
