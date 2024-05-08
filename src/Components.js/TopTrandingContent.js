import { useEffect, useState } from "react";
import { API_component } from "../Utils/Utils";
import { Spinner } from "./Spinner";
function TopTrandingContent({
  video,
  vote_average,
  backdrop_path,
  title,
  original_title,
  media_type,
  id,
}) {
  const [videoPreview, setVideoPreview] = useState("");
  const [imgLoad, setImgLoad] = useState(false);
  useEffect(() => {
    async function getVideoPreview() {
      const videoPreview = await API_component.getVideoPreview(media_type, id);
      setVideoPreview(videoPreview);
    }

    function loadImg(src) {
      let image = new Image();
      image.src = src;
      image.alt = title;
      image.onload = () => {
        setImgLoad(true);
      };
    }
    if (video) {
      getVideoPreview();
    }
    loadImg(
      `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
    );
  }, []);
  return (
    <section className="film-week">
      {imgLoad ? (
        <div
          className="container film-week__container"
          data-rating={vote_average.toFixed(1)}
        >
          <div className="film-week__poster-wrapper">
            <img
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`}
              alt={title}
              className="film-week__poster"
            />
            <p className="film-week__title_origin">{original_title}</p>
          </div>
          <h2 className="film-week__title">{title}</h2>
          <a
            className="film-week__watch-trailer tube"
            href={`https://youtu.be/${videoPreview}`}
            aria-label="смотреть трейлер"
            target="_blank"
          ></a>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
export { TopTrandingContent };
