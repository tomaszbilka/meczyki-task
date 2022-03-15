import classes from './Comments.module.css';

const Comments = (props) => {
  const { email, body } = props;

  return (
    <li>
      <p>user: {email}</p>
      <p>{body}</p>
      <hr></hr>
    </li>
  );
};

export default Comments;
