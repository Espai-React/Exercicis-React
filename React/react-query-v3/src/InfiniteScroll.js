import { useInfiniteQuery } from "react-query";
import Users from "./Users";

const fetchUsers = async ({ pageParam }) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10&seed=abc`
  );
  return res.json();
};

const InfiniteScroll = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["users"], fetchUsers, {
    getNextPageParam: (lastPage, pages) => lastPage.info.page + 1 ?? undefined,
  });
  console.log(data);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      <h2>Infinite Pagination View</h2>
      {data && (
        <div className="card">
          {data.pages.map((page) =>
            page.results.map((user, i) => <Users key={i} user={user} />)
          )}
        </div>
      )}
      <div className="btn-container">
        <button onClick={fetchNextPage}>Load More...</button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};
export default InfiniteScroll;
