import Post from '../Post/Post';
import classes from './PostGrid.module.css';

const PostGrid = (props) => {
  const { data } = props;

  return (
    <section className={classes.wrap}>
      {data.map((el) => (
        <Post title={el.title} body={el.body} key={el.id} id={el.id} />
      ))}
    </section>
  );
};

export default PostGrid;
