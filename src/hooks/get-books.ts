import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGoogleBooksData = (query?: String) => {
  return useQuery({
    queryKey: ['googleBooksData'],
    queryFn: () =>
      axios
        .get('https://www.googleapis.com/books/v1/volumes?q=excel')
        .then(response => response.data),
  });
};
