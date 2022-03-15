import Post from '../Post/Post';
import classes from './PostGrid.module.css';

const PostGrid = (props) => {
  const { data } = props;

  if (data?.length === 0) {
    return (
      <div className={classes.nofound}>
        <p>No posts found!</p>
      </div>
    );
  }

  return (
    <section className={classes.wrap}>
      {data.map((el) => (
        <Post title={el.title} body={el.body} key={el.id} id={el.id} />
      ))}
    </section>
  );
};

export default PostGrid;
