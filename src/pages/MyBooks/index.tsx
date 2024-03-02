import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
// import { PageLayout } from '../layouts/PageLayout';

type BookList = {
  kind: String;
  totalItems: Number;
  items: Book[];
};
type Book = {
  kind: string;
};

async function getBooks(): Promise<Book[]> {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=excel';
  const response = await axios.get<BookList>(url);
  return response.data.items;
}
const MyBooks = () => {
  const [books, setBooks] = useState<[] | Book[]>([]);
  useEffect(() => {
    (async () => {
      const books = await getBooks();
      setBooks(books);
    })();
  }, []);
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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
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
        <div className="feature-content">
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
