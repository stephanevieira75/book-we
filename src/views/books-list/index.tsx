import { Row, Table, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { useBooksList } from "../../hooks/use-books-list";
import { Book } from "../../types/book";

const { Title, Link } = Typography;
export function BooksList() {
  const navigateTo = useNavigate();

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
        // We do not want to use the pagination component, we use the nextPage function instead
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            // Dirty hack to get the book unique id from the url
            navigateTo(`/book/${record.url.split("/")[5]}`, {
              // Finally we add the book url to the state
              state: { bookUrl: record.url },
            });
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
