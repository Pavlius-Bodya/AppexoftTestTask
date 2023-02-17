import { useState, useEffect } from "react";
import { useGetData } from "../../hooks/useGetData";
import "./LeftPage.scss";
import Button from "@mui/material/Button";

const PAGE_SIZE = 12;

export const LeftPage = ({ setUrl }) => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const { getData, data } = useGetData(
    `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${PAGE_SIZE}`
  );

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    if (data) {
      setPokemons(data.results);
    }
  }, [data]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(0, prevPage - PAGE_SIZE));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + PAGE_SIZE);
  };

  const handlePokemonClick = (url) => {
    setUrl(url);
  };

  return (
    <div className="LeftPage">
      <div className="LeftPage__Pokemons">
        {pokemons.map((pokemon) => (
          <Button
            key={pokemon.name}
            onClick={() => handlePokemonClick(pokemon.url)}
            sx={{
              width: "30%",
              margin: "5px",
              height: "50px",
              borderRadius: "2em",
              padding: "1em 2em",
              backgroundColor: "#FF5C00",
              color: "#FFF",
              "&:hover": {
                backgroundColor: "#D45500",
              },
            }}
          >
            {pokemon.name}
          </Button>
        ))}
      </div>
      <div className="LeftPage__Pagination">
        <Button
          variant="contained"
          onClick={handlePrevPage}
          disabled={page === 0}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={!pokemons.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
