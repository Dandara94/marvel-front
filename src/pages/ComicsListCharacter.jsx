import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ComicsListCharacter = () => {
  const [comicsListData, setComicsListData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchComicsListData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        console.log(data);
        setComicsListData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsListData();
  }, [characterId]);

  return isLoading ? (
    <div>Chargement ...</div>
  ) : (
    <main>
      <div className="title">
        <h1>Details</h1>
      </div>

      <div className="big-card">
        <div>
          <h2>{comicsListData.name}</h2>
          {comicsListData.description ? (
            <p> {comicsListData.description}</p>
          ) : (
            <p>Oups! ... Pas de description pour le moment, mais prochainement !</p>
          )}
        </div>

        {comicsListData.thumbnail.path ? (
          <img
            src={
              comicsListData.thumbnail.path +
              "/standard_fantastic." +
              comicsListData.thumbnail.extension
            }
            alt={comicsListData.name}
          />
        ) : null}
      </div>

      <div className="title">
        <h1>La liste de comics</h1>
      </div>

      <section className="small-cards-section">
        {comicsListData.comics.map((list) => {
          return (
            <>
              <div className="small-card" key={list.id}>
                <h2>{list.title}</h2>
                <p>{list.description}</p>
                {list.thumbnail.path ? (
                  <img
                    src={
                      list.thumbnail.path +
                      "/portrait_uncanny." +
                      list.thumbnail.extension
                    }
                    alt={list.title}
                  />
                ) : null}
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default ComicsListCharacter;
