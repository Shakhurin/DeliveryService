import { useEffect, useState } from 'react';

interface Point {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export const useGetDeliveryPoints = (): [Point[], boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://shift-backend.onrender.com/delivery/points')
      .then((res) => res.json())
      .then((data) => {
        setPoints(data.points);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [points, isLoading];
};
