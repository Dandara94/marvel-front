import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// import ComicsListCharacter from "./ComicsListCharacter";

const Character = () => {
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  // console.log(useParams());

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/character/${characterId}`
        );

        // console.log(data);
        setCharacterData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacterData();
  }, [characterId]);

  return isLoading ? (
    <div>Chargement ...</div>
  ) : (
    <>
      <main>
        <h1>Character</h1>

        <div>
          <h2>{characterData.name}</h2>
          <p> {characterData.description}</p>
          {characterData.thumbnail.path ? (
            <img
              src={
                characterData.thumbnail.path +
                "/standard_xlarge." +
                characterData.thumbnail.extension
              }
              alt={characterData.name}
            />
          ) : null}
        </div>
        {/* <ComicsListCharacter /> */}
        {/* <h2>Comics:</h2>
      <ul>
        {characterData.comics.map((comicId) => (
          <li key={comicId}>{comicId}</li>
        ))}
      </ul> */}
      </main>
    </>
  );
};

export default Character;
