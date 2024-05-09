import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeMenu } from "../redux/BurgerMenuSlice";
import { API_component } from "../Utils/Utils";
import { Spinner } from "./Spinner";
import { ContentItem } from "./ContentItem";
const paramsLang = {
  movie: "фильмы",
  tv: "сериалы",
  popular: "популярные",
  top: "топ",
};
function Categories() {
  const { searchParam } = useParams();

  const [activeType, setActiveType] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [list, setList] = useState([]);
  const [modifiedList, setModifiedList] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  function handleChangePage() {
    setLoadMore(true);
    setPage(page + 1);
  }
  useEffect(() => {
    dispatch(closeMenu());
    async function getData() {
      if (searchParam === "triends") {
        setTitle("В тренде");
        const { results } = await API_component.getTrending("week", page);
        setList(results);
      } else {
        const [type, media_type] = searchParam.split("-");
        const { results } = await API_component.getData(
          media_type,
          type === "top" ? "top_rated" : type,
          page
        );
        setActiveType(media_type);
        setTitle(`${paramsLang[type]} ${paramsLang[media_type]}`);
        setList(results);
      }
    }
    getData();
  }, [searchParam, page]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
    setModifiedList([]);
  }, [searchParam]);
  useEffect(() => {
    async function loadImg(array) {
      async function getImages(src) {
        return new Promise((resolve, reject) => {
          let image = new Image();
          image.src =
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2` + src;
          image.onload = () => {
            resolve(image.src);
          };
        });
      }

      const data = await Promise.all(
        array.map(async (item) => {
          const res = await getImages(item.poster_path);
          const videosPreview = await API_component.getVideoPreview(
            item.media_type || activeType,
            item.id
          );
          item.videosPreview =
            videosPreview && videosPreview.results[0]
              ? `https://youtu.be/${videosPreview.results[0].key}`
              : "";
          item.poster_path = res;
          return item;
        })
      );
      setModifiedList([...modifiedList, ...data]);
      setLoadMore(false);
    }
    if (list.length > 0) {
      loadImg(list);
    }
  }, [list]);
  return (
    <section className="other-films">
      <div className="container">
        <h2 className="other-films__title" data-active-films="" data-type="">
          {title && (
            <>
              {title}
              <span className="other-films__title-add">на TS Cinema</span>
            </>
          )}
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
          modifiedList.length > 0 && (
            <button
              className="other-films__title_load-more"
              onClick={handleChangePage}
            >
              Загрузить ещe
            </button>
          )
        )}
      </div>
    </section>
  );
}
export { Categories };
