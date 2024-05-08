import { useEffect, useState } from "react";
import { API_component } from "../Utils/Utils";
import { TopTrandingContent } from "./TopTrandingContent";
import { ListOfContent } from "./ListOfContent";
function MainPage() {
  const [page, setPage] = useState(1);
  const [topTranding, setTopTranding] = useState([]);
  const [listOfContent, setListOfContent] = useState([]);
  useEffect(() => {
    async function getData() {
      const { results } = await API_component.getTrending("week", page);
      setTopTranding(results[0]);
      if (page === 1) {
        setListOfContent([...listOfContent, ...results.slice(1)]);
      } else {
        setListOfContent([...listOfContent, ...results]);
      }
    }

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
