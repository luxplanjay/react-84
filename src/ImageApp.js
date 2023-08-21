const { useState, useEffect } = require('react');

const ImageApp = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (query === '') return;

    console.log(`HTTP запрос за ${query}, и page=${page}`);
  }, [page, query]);

  return (
    <div>
      <div>
        <form
          onSubmit={evt => {
            evt.preventDefault();
            changeQuery(evt.target.elements.query.value);
            evt.target.reset();
          }}
        >
          <input type="text" name="query" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>Gallery</div>

      <div>
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    </div>
  );
};
