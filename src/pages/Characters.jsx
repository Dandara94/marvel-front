import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/characters");
        // console.log(data);
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
  }, []);

  return isLoading ? (
    <div>Chargement ...</div>
  ) : (
    <main>
      <section className="hero-character">
        <div className="hero-content-character">
          <h1>Characters</h1>
        </div>
      </section>

      {charactersData.results.map((character) => {
        // console.log(character.thumbnail.path);
        return (
          <>
            <div className="container">
              <article key={character._id}>
                <Link to={`/comics/${character._id}`}>
                  <div className="card">
                    <h2>{character.name}</h2>
                    {character.thumbnail.path ? (
                      <img
                        src={
                          character.thumbnail.path +
                          "/standard_large." +
                          character.thumbnail.extension
                        }
                        alt={character.name}
                      />
                    ) : null}
                  </div>
                </Link>
              </article>
            </div>
          </>
        );
      })}
    </main>
  );
};

export default Characters;
