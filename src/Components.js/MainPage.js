import { useEffect, useState } from "react";
import { API_component } from "../Utils/Utils";
import { TopTrandingContent } from "./TopTrandingContent";
import { ListOfContent } from "./ListOfContent";
import { closeMenu } from "../redux/BurgerMenuSlice";
import { useDispatch } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [topTranding, setTopTranding] = useState([]);
  const [listOfContent, setListOfContent] = useState([]);
  useEffect(() => {
    async function getData() {
      const { results } = await API_component.getTrending("week", page);
      if (page === 1) {
        setTopTranding(results[0]);
        setListOfContent([...listOfContent, ...results.slice(1)]);
      } else {
        setListOfContent([...listOfContent, ...results]);
      }
    }
    dispatch(closeMenu());
    getData();
  }, [page]);
  return (
    <>
      {topTranding.id && <TopTrandingContent {...topTranding} />}
      {listOfContent.length > 0 && (
        <ListOfContent list={listOfContent} setPage={setPage} />
      )}
    </>
  );
}
export { MainPage };
