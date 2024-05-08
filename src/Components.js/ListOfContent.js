import { useEffect, useState } from "react";
import { ContentItem } from "./ContentItem";
import { API_component } from "../Utils/Utils";
import { Spinner } from "./Spinner";
function ListOfContent(props) {
  const { list, setPage } = props;
  const [modifiedList, setModifiedList] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    async function loadImg(array) {
      async function getImages(src) {
        return new Promise((resolve, reject) => {
          let image = new Image();
          image.src =
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` + src;
          image.onload = () => {
            resolve(image.src);
          };
        });
      }
      const data = await Promise.all(
        array.map(async (item) => {
          const res = await getImages(item.poster_path);
          const videosPreview = await API_component.getVideoPreview(
            item.media_type,
            item.id
          );
          item.videosPreview = videosPreview.results[0]
            ? `https://youtu.be/${videosPreview.results[0].key}`
            : "";
          item.poster_path = res;
          return item;
        })
      );
      setModifiedList(data);
      setLoadMore(false);
    }
    loadImg(list);
  }, [list]);
  function handleChangePage() {
    setPage((state) => {
      return state + 1;
    });
    setLoadMore(true);
  }
  return (
    <section className="other-films">
      <div className="container">
        <h2 className="other-films__title" data-active-films="" data-type="">
          Другие фильмы
          <span className="other-films__title-add">на TS Cinema</span>
        </h2>

        {modifiedList.length > 0 ? (
          <ul className="other-films__list">
            {modifiedList.map((item) => {
              return <ContentItem key={item.id} {...item} />;
            })}
          </ul>
        ) : (
          <Spinner />
        )}
        {loadMore ? (
          <Spinner />
        ) : (
          <button
            className="other-films__title_load-more"
            onClick={handleChangePage}
          >
            Загрузить ещe
          </button>
        )}
      </div>
    </section>
  );
}
export { ListOfContent };
