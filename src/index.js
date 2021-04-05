import React from "react";
import ReactDOM from "react-dom";
import { books } from './books'
import SpecificBook from './Book'

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
     {/* {books.map(book =>  <Book key={book.id} book={book}></Book> */}
      {books.map(book =>  <SpecificBook key={book.id} {...book}></SpecificBook>
     )}
    </section> 
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

//Dumb component - no state
//always return something
//stateless component
//always return JSX

/* function Greeting() {
    return ( 
    <h4>This is my first react component!</h4>
    );
} */

// const Greeting = () => {
//   return React.createElement('h2', {} , 'hello world');
// };

//JSX rules
//-always return a single element
//-follow HTML semantics
//-div/ section/ article or React fragment
// - with React fragment, you can enclose 2 diff div sections
// - use <React.Fragment> or just <>

//use camelCase for html attributes
//use className instead of class
//formatting
//close every element

// const Greeting = () => {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Message = () => {
//   return (
//     <p>My meesage is simple</p>
//   );

// };

// function Person () {
//   return (
//       <h1>Name: React</h1>
//   );
// }

// const Author = () => {
//   return <p style={ { color: '#617d98', fontSize:'0.75rem', margin:'0.25rem'} }> Shankaracharya </p>
// };
