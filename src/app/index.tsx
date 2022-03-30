import { Layout, Row, Typography } from "antd";

import "./styles.scss";

const { Header, Content } = Layout;
const { Title } = Typography;
function App() {
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eveniet
        incidunt. Quod veniam qui fuga et unde numquam vero, deserunt
        accusantium praesentium amet deleniti quidem debitis, ullam animi.
        Debitis, aliquid.
      </Content>
    </Layout>
  );
}

export default App;
