import { useQuery } from '@tanstack/react-query';

export const useRepoDetails = () => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(res =>
        res.json(),
      ),
    select: data => {
      if (data instanceof Error) {
        return { error: data };
      }
      return { data, isEmpty: data.total === 0 };
    },
  });
};
