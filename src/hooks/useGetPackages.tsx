import { useEffect, useState } from 'react';

export interface Package {
  id?: string;
  name?: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export const useGetPackages = (): [Package[], boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://shift-backend.onrender.com/delivery/package/types')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.packages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [packages, isLoading];
};
