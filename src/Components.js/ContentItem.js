function ContentItem({ vote_average, poster_path, videosPreview }) {
  return (
    <li className="other-films__item">
      <a
        className="other-films__link"
        data-rating={vote_average.toFixed(1)}
        target="_blank"
        href={videosPreview ? videosPreview : null}
      >
        <img
          className="other-films__img"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
          alt="постер"
        />
      </a>
    </li>
  );
}
export { ContentItem };
