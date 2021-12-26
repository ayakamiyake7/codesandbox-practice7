export const Todo = (props) => {
  console.log(props);
  const { title, userId } = props;
  return <p>{`${title}(User: ${userId})`}</p>;
};
