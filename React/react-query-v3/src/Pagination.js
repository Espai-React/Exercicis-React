import { useQuery } from "react-query";
import { useState } from "react";
import Users from "./Users";

const fetchUsers = async (page) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
  return res.json();
};

const Pagination = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["users", page],
    () => fetchUsers(page),
    { keepPreviousData: true }
  );
  console.log(data, page);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      <h2>Pagination View</h2>
      {data && (
        <div className="card">
          {data.results.map((user, i) => (
            <Users key={i} user={user} />
          ))}
        </div>
      )}
      <div className="nav btn-container">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
          Prev Page
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      </div>
      <div>{isFetching ? "Fetching..." : null}</div>
    </div>
  );
};
export default Pagination;
