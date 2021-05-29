import { useEffect, useState } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = [], id: number | string = '') => {
  // const [data, setData] = useState<iData>({} as iData);
  const [data, setData] = useState<T | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoaded(true);
      try {
        const result = await req<T>(endpoint, query, id);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoaded(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoaded,
    isError,
  };
};

export default useData;
