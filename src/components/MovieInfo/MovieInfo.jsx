const MovieInfo = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <div>
          <span>Running Time</span>
          <span>142</span>
        </div>
        <div>
          <span>Genre</span>
          <span>Romantic Drama</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
