import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

import Constants from 'expo-constants'

const useRepositories = () => {
  // const { data: repositories, loading, error } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })
  // console.log("REPOS IN useRepositories", repositories)
  // return { repositories }
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(Constants.manifest.extra.apollo_uri);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
 
};

export default useRepositories;
