import { useState, useEffect } from 'react';

export const useResource = (url, defaultValue = null) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(defaultValue);
  
    useEffect(() => {
      console.log('Loading data from ' + url + '...');
      const loadedData = {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
      };
      setData(loadedData);
      setIsLoading(false);
    }, [])
  
    return { isLoading, data };
}