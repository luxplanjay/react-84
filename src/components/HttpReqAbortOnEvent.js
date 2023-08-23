import { useRef } from 'react';
import axios from 'axios';

// 1 -> создали реф
// 2 -> проверим есть ли реф с 1 -> если есть отменить -> создать реф 2
// 3 -> проверить есть ли реф с 2 -> если есть отменить -> создать реф 3

export const HttpReqAbortOnEvent = () => {
  const controllerRef = useRef();

  const fetchData = async () => {
    // Если контроллер ЕСТЬ, отменить запрос
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Если контроллера НЕТ или ОТМЕНИЛИ, создать новый
    controllerRef.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, {
        signal: controllerRef.current.signal,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      <button onClick={() => controllerRef.current.abort()}>Cancel req</button>
    </div>
  );
};
