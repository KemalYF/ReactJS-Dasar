import { useContext } from "react";
import { GlobalContext } from "../context";

// cara pertama
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>[New]</span>;
}

// cara kedua
// const newArticle = () => {
//   return <span>[Baru]</span>;
// }

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>Date : {props.date}, tags : {props.tags.join(", ")} </small>
      
      {/* conditional rendering */}
      <ArticleStatus isNew={props.isNew} />
      {/* {props.isNew && newArticle()} */}
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;