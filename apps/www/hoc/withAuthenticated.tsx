import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { useFetchUser } from '../hooks/useFetchUser.hook';

export const withAuthenticated = (Component: React.FC<AppProps>) => {
  const WithAuthenticated = (pageProps: AppProps) => {
    const { user, loading } = useFetchUser();
    const router = useRouter();

    if (loading) {
      return <div>Loading...</div>;
    }
    if (!loading && !user) {
      router.push('/api/login');
    }

    return <Component {...pageProps} />;
  };

  return WithAuthenticated;
};
