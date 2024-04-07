import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Comic = () => {
  const [comicData, setComicData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { comicId } = useParams();

  useEffect(() => {
    const fetchComicData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comic/${comicId}`
        );
        // console.log(data);
        setComicData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicData();
  }, [comicId]);

  return isLoading ? (
    <div>Chargement ...</div>
  ) : (
    <main>
      <div className="title">
        <h1>Comic</h1>
      </div>

      <div className="big-card">
        <div>
          <h2>{comicData.title}</h2>
          <p>{comicData.description}</p>
        </div>

        {comicData.thumbnail.path ? (
          <img
            src={
              comicData.thumbnail.path +
              "/standard_fantastic." +
              comicData.thumbnail.extension
            }
            alt={comicData.name}
          />
        ) : null}
      </div>
    </main>
  );
};

export default Comic;
