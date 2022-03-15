import { useState } from 'react';
import classes from './SearchInput.module.css';

const SearchInput = (props) => {
  const [searchText, setSearchText] = useState('');

  const onTypeHandler = (event) => {
    setSearchText(event.target.value);
    props.searchHandler(event.target.value);
  };

  return (
    <>
      <div className={classes.input}>
        <input
          type='text'
          value={searchText}
          onChange={onTypeHandler}
          placeholder='search'
          className={classes.search}
        ></input>
      </div>
      <hr className={classes.hr}></hr>
    </>
  );
};

export default SearchInput;
