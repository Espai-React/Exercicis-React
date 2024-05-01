import styles from "./Planets.module.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPlanets } from "../../lib/utils/fetchStarWars";
import Planet from "../Planet/Planet";
import { starWarsEndpoints } from "../../lib/constants/endpoints";

const Planets = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  const { data, status, isPreviousData } = useQuery(
    ["planets", starWarsEndpoints.planets, page],
    fetchPlanets,
    {
      keepPreviousData: true,
      onSuccess: () => console.log("data received ok!"),
      onError: () => console.log("data received ko!"),
    }
  );
  console.log(data, status, isPreviousData);

  return (
    <div className={styles.planets}>
      <h2>Planets</h2>
      {status === "loading" && <div>loading data...</div>}
      {status === "error" && <div>Error fecthing data</div>}
      {status === "success" && (
        <div>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}>
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() => {
              if (!isPreviousData && data.next) setPage((prev) => prev + 1);
            }}
            disabled={isPreviousData || !data.next}>
            Next page
          </button>
          <div>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Planets;
