import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';

import PostGrid from '../components/PostsGrid/PostGrid';
import SearchInput from '../components/SearchInput/SearchInput';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Home = () => {
  const [sendRequest, data, isLoading, error] = useHttp();
  const [filteredText, setFilteredText] = useState('');

  useEffect(() => {
    sendRequest('https://jsonplaceholder.typicode.com/posts', '', 'GET');
  }, [sendRequest]);

  const searchHandler = (text) => {
    console.log(text);
    setFilteredText(text);
  };

  const filteredData = data?.filter((el) => el.title.includes(filteredText));

  const dataToShow = filteredText.length === 0 ? data : filteredData;

  return (
    <>
      <SearchInput searchHandler={searchHandler} />
      {isLoading && !error && <LoadingSpinner />}
      {!isLoading && !error && <PostGrid data={dataToShow} />}
      {error && !isLoading && <p>{error}</p>}
    </>
  );
};

export default Home;
