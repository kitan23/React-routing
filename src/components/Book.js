const books = [
  {
    id: 1,
    title: "Built to Last",
    author: "Jim Collins",
    img: "https://m.media-amazon.com/images/I/51xOuGJUNpL.jpg",
  },
  {
    id: 2,
    title: "Factfulness",
    author: "Hans Rosling",
    img: "https://m.media-amazon.com/images/I/51Xj-fPxZHL.jpg",
  },
  {
    id: 3,
    title: "Man's Search for Meaning",
    author: "Victor E. Frankl",
    img: "https://m.media-amazon.com/images/I/51pe3EbYuqL.jpg",
  },
];

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <ul className="book">
      <img src={img} alt="" />
      <li className="title">{title}</li>
      <li className="author">{author.toUpperCase()}</li>
    </ul>
  );
};

const BookList = () => {
  return (
    <section>
      <div className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </div>
    </section>
  );
};

export default BookList;
