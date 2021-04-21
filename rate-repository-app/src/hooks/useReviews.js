import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

const useReviews = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, { 
    fetchPolicy: 'cache-and-network',
    variables,
    onCompleted: () => {
      console.log("COMPLETED useReviews WITH VARS", variables)
    }
  })

  console.log("useReviews data", data?.repository.reviews)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  return {
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
}

export default useReviews;
