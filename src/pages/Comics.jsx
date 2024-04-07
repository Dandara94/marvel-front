import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/comics");
        // console.log(data);
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  }, []);

  return isLoading ? (
    <div>Chargement ...</div>
  ) : (
   
    <main>
      <section className="hero-comics">
        <div className="hero-content-comics">
          <h1>Comics</h1>
        </div>
      </section>

      {comicsData.results.map((comic) => {
        return (
          <>
            <div className="container">
              <article key={comic._id}>
                <Link to={`/comic/${comic._id}`}>
                  <div className="card">
                    <h2>{comic.title}</h2>
                    {comic.thumbnail.path ? (
                      <img
                        src={
                          comic.thumbnail.path +
                          "/standard_large." +
                          comic.thumbnail.extension
                        }
                        alt={comic.name}
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

export default Comics;
