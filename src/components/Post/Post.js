import { useState } from 'react';
import classes from './Post.module.css';
import Comments from '../Comments/Comments';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [sendRequest, data, isLoading, error] = useHttp();
  const { title, body, id } = props;

  const showCommentsHandler = () => {
    setShowComments((prev) => !prev);
    sendRequest(
      'https://jsonplaceholder.typicode.com/comments?postId=',
      `${id}`,
      'GET'
    );
  };

  return (
    <li className={classes.postWrap}>
      <h2>{title}</h2>
      <div className={classes.content}>
        <p>{body}</p>
        <button className={classes.btn} onClick={showCommentsHandler}>
          comments
        </button>
        {showComments && isLoading && !error && <LoadingSpinner />}
        <ul>
          {showComments &&
            !isLoading &&
            !error &&
            data?.map((el) => (
              <Comments key={el.id} email={el.email} body={el.body} />
            ))}
        </ul>
        {showComments && !isLoading && error && <p>{error}</p>}
      </div>
    </li>
  );
};

export default Post;
