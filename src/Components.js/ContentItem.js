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
          src={poster_path ? poster_path : "./img/noposter.jpeg"}
          alt="постер"
        />
      </a>
    </li>
  );
}
export { ContentItem };
