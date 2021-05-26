import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setInterval(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
