import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  console.log(props);
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Done]" : "[Not Yet]";
  return <p>{`${completeMark} ${title}(User: ${userId})`}</p>;
};
