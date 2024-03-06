import { useQuery } from '@tanstack/react-query';
import { useRepoDetails } from 'src/hooks/get-repo-details';

export type RepoDetails = {
  name: String;
  description: String;
  subscribers_count: Number;
  stargazers_count: Number;
  forks_count: Number;
};
const ReactQuery = () => {
  //   const { isLoading, error, data } = useQuery({
  //     queryKey: ['repoData'],
  //     queryFn: () =>
  //       fetch('https://api.github.com/repos/TanStack/query').then(res =>
  //         res.json(),
  //       ),
  //   });
  const { data: response } = useRepoDetails();
  const { data: repoDetails } = response || {};
  return (
    <>
      <div>
        {repoDetails && (
          <>
            <h1>{repoDetails.name}</h1>
            <p>{repoDetails.description}</p>
            <strong>👀 {repoDetails.subscribers_count}</strong>
            <strong>✨ {repoDetails.stargazers_count}</strong>
            <strong>🍴 {repoDetails.forks_count}</strong>
          </>
        )}
      </div>
    </>
  );
};

export default ReactQuery;
