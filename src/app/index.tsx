import { Layout, Row, Typography } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BookDescription, BooksList } from "../views";

import "./styles.scss";

const { Header, Content } = Layout;
const { Title } = Typography;
function App() {
  return (
    <Router>
      <Layout className="app--container">
        <Header className="app--header">
          <Row className="app--row" align="middle">
            <Title level={3} className="app--title">
              Book we
            </Title>
          </Row>
        </Header>

        <Content className="app--content">
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/book/:id" element={<BookDescription />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
