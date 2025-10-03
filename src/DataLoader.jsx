import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataLoader = ({ getDataFn = () => {}, resourceName, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await getDataFn();
      setData(newData);
    })()
  }, []);

//exercise : retrive data from local storage using the key "appData"
//   useEffect(() => {
//     (async () => {
//       const storedData = localStorage.getItem('appData');
//       if (storedData) {
//         setData(JSON.parse(storedData));
//       }
//     })()
//   }, []);

  return data && React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { [resourceName]: data });
    } 
    return child;
  })
}