import { Row, Table, Typography } from "antd";

import { useBooksList } from "../../hooks/use-books-list";
import { Book } from "../../types/book";

const { Title, Link } = Typography;
export function BooksList() {
  const {
    books,
    currentPagination,
    nextPage,
    loading: isLoadingBooks,
  } = useBooksList();

  const dataSource = books.map((book: Book, index: number) => ({
    ...book,
    key: index + 1,
    authors: book.authors.join(", "),
    url: book.url,
  }));

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      title: "name",
    },
    {
      dataIndex: "authors",
      key: "authors",
      title: "authors",
    },
  ];

  return (
    <>
      <Row>
        <Title level={2}>Books list</Title>
      </Row>

      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoadingBooks}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            // TODO: navigate to the book details page
          },
        })}
      />

      {currentPagination.next?.length && (
        <Row align="middle" justify="center" style={{ padding: "8px 0" }}>
          <Link onClick={nextPage}>Load more</Link>
        </Row>
      )}
    </>
  );
}
