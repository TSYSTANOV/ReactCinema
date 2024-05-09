import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_component } from "../Utils/Utils";
import { ContentItem } from "./ContentItem";
import { Spinner } from "./Spinner";
function Search() {
  const { searchParam } = useParams();
  const [listContent, setListContent] = useState([]);
  const [modifiedList, setModifiedList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  useEffect(() => {
    async function getData() {
      const { results } = await API_component.getSearch(searchParam);
      if (results.length > 0) {
        setListContent([...results]);
      }else{
         setModifiedList([]);
      }
      setLoadMore(false);
    }
    getData();
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
       let data = await Promise.all(
       array.map(async (item) => {
          if(item.media_type !== 'person'){
            if(item.poster_path){
              const res = await getImages(item.poster_path);
              item.poster_path = res;                        
            }
            
          const videosPreview =  await API_component.getVideoPreview(
            item.media_type,
            item.id
          )
          item.videosPreview =  videosPreview.results[0]
            ? `https://youtu.be/${videosPreview.results[0].key}`
            : "";
          return item;
          }else{
            return item
          }
        })
      )  
      data = data.filter((data)=>data.media_type !== 'person')
      setModifiedList(data);
      setLoadMore(false);
    }
    if (listContent.length > 0) {
      setModifiedList([])
      setLoadMore(true);
      loadImg(listContent);
    }
  }, [listContent]);
  return (
    <section className="other-films">
      <div className="container">
        <h2 className="other-films__title" data-active-films="" data-type="">
          {listContent.length > 0
            ? `Результаты поиска по запросу: '${searchParam}'`
            : `По вашему запросу -${searchParam} ничего не найдено`}{" "}
          <span className="other-films__title-add">на TS Cinema</span>
        </h2>
      </div>
      {loadMore && <Spinner/>}
      {modifiedList.length > 0 && (
        <ul className="other-films__list">
          {modifiedList.map((item) => {
            return <ContentItem key={item.id} {...item} />;
          })}
        </ul>
      )}
    </section>
  );
}
export { Search };
