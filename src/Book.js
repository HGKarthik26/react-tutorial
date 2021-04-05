import React from "react";

const Book = (props) => {
  // const {img, title, author } = props.book;

  // attributes, eventHandlers
  // onClick, onMouseOver
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  // when param is passed to eventHandler function
  // Then () => ... have this, so that only when event is triggered, the call is made
  //if we directly invoke it, it gets executed as soon as page is loaded
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Image img={img} />
      <Title title={title} />
      <h4 onClick={() => console.log(author)}> {author}</h4>
      <button type="button" onClick={clickHandler}>
        Event Handling example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

const Image = (props) => (
    <img src={props.img} alt="" width="150px" height="200px" />
  );
  
  const Title = (props) => <h1>{props.title}</h1>;

export default Book;
