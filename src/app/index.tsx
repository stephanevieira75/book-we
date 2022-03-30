import { Button, Layout, Row, Typography } from "antd";
import { useBooksList } from "../hooks/use-books-list";
import { BooksAPIClient } from "../services/books-api-client";

import "./styles.scss";

const { Header, Content } = Layout;
const { Title } = Typography;
function App() {
  const { books } = useBooksList();
  return (
    <Layout className="app--container">
      <Header className="app--header">
        <Row className="app--row" align="middle">
          <Title level={3} className="app--title">
            Book we
          </Title>
        </Row>
      </Header>

      <Content className="app--content">
        <Row className="app--row" align="middle">
          <Button
            onClick={async () => {
              const response = await BooksAPIClient.list({
                pageNumber: 1,
                pageSize: 10,
              });

              console.log(
                "This should log the response from the Books API",
                response
              );
            }}
          >
            Show me first books page using the Books API client
          </Button>

          <Button
            onClick={() =>
              console.log("This is the current books list state", books)
            }
          >
            Show me the books list state
          </Button>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
