import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { useGoogleBooksData } from 'src/hooks/get-books';
// import { PageLayout } from '../layouts/PageLayout';

type BookList = {
  kind: String;
  totalItems: Number;
  items: Book[];
};
type Book = {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
};

// async function getBooks(): Promise<Book[]> {
//   const url = 'https://www.googleapis.com/books/v1/volumes?q=excel';
//   const response = await axios.get<BookList>(url);
//   return response.data.items;
// }
const MyBooks = () => {
  // const { data: allBooks, isLoading } = useGoogleBooksData();
  // const [books, setBooks] = useState<Book[]>([]);

  // let booksData: Book[] = [];
  // useEffect(() => {
  //   if (allBooks?.items != null) {
  //     setBooks(allBooks.items);
  //     booksData = books.map(
  //       book =>
  //         ({
  //           id: book.id,
  //           title: book.title,
  //           subtitle: book.subtitle,
  //           publishedDate: book.publishedDate,
  //         } as Book),
  //     );
  //   }
  // }, [allBooks]);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
    },
    {
      title: 'Published Date',
      dataIndex: 'publishedDate',
      key: 'publishedDate',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  return (
    <div className="main-body-section">
      <div className="container">
        <div className="block-title">
          <h2>My Books Web Application</h2>
        </div>
        <div className="feature-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            earum animi possimus, iusto consectetur vel accusantium ipsam beatae
            minus unde ipsum, cumque, perspiciatis rerum laborum! Accusamus
            magnam sequi, a in ab quam temporibus excepturi debitis soluta
            inventore error nihil minima consectetur aliquid, ullam quos. A quae
            iusto nulla culpa! Amet optio accusamus laborum similique incidunt
            totam nemo expedita odit saepe quisquam numquam nesciunt beatae
            repellat illo doloremque inventore quibusdam ut earum consequuntur
            enim sunt, sint dolore! Maxime provident maiores eos velit. Adipisci
            at asperiores ullam praesentium. Illum, temporibus libero. Cumque
            officia consectetur, dolores id natus dolorem recusandae sunt eaque
            quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
            blanditiis minima possimus quasi esse facere excepturi mollitia
            corrupti dicta praesentium sunt, saepe placeat aliquam, commodi
            magnam cumque temporibus corporis beatae? Doloribus voluptate
            dolorem saepe voluptatum culpa odit fugiat, sunt atque hic animi
            sequi cupiditate ad. Ratione omnis eos nesciunt.
          </p>
        </div>
        {/* <div className="feature-content">
          <Table dataSource={booksData} columns={columns} />;
        </div> */}
      </div>
    </div>
  );
};

export default MyBooks;
