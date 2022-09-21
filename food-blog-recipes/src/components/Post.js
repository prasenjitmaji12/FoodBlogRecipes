import React from "react";
import marked from "marked";

const Post = ({ article }) => {
  // console.log("article", article);
  const { name, foodImage } = article.fields;
  const postDescription = marked(foodImage.fields.description);
  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      {foodImage && (
        <img
          className="featuredImage"
          src={foodImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};

export default Post;
