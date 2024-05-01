import styles from "./People.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../lib/utils/fetchStarWars";
import Person from "../Person/Person";
import { starWarsEndpoints } from "../../lib/constants/endpoints";

const People = () => {
  const { data, status, fetchNextPage, lastPage } = useInfiniteQuery(
    ["people", starWarsEndpoints.people],
    fetchPeople,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next === null) return;
        return +lastPage.next.split("page=")[1];
      },
      onSuccess: () => console.log("data received ok!"),
      onError: () => console.log("data received ko!"),
    }
  );

  return (
    <div className={styles.people}>
      <h2>People</h2>
      {status === "loading" ? (
        <div>loading data...</div>
      ) : status === "error" ? (
        <div>Error fecthing data</div>
      ) : (
        status === "success" && (
          <div>
            {data.pages.map((page, i) => (
              <div key={i}>
                {page.results.map((person) => (
                  <Person key={person.name} person={person} />
                ))}
              </div>
            ))}
          </div>
        )
      )}
      <button
        onClick={fetchNextPage}
        hidden={!data}
        disabled={data?.pages.at(-1)?.next === null}>
        More results...
      </button>
    </div>
  );
};

export default People;
