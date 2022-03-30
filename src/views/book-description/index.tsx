import { Button, Descriptions, Row } from "antd";

import { useLocation, useNavigate } from "react-router-dom";

import { useBook } from "../../hooks/use-book";

const { Item } = Descriptions;
const labelStyle = { fontWeight: "bold" };

export function BookDescription() {
  const location = useLocation();
  const navigateTo = useNavigate();

  // Get the book url from the location state
  const { book } = useBook((location.state as { bookUrl: string }).bookUrl);

  return (
    <>
      <Row align="middle">
        <Button
          type="text"
          // Back to the previous page
          onClick={() => navigateTo(-1)}
          style={{ marginRight: "8px" }}
        >
          &gt; Back to book list
        </Button>
      </Row>

      <Descriptions>
        <Item label="name" labelStyle={labelStyle} span={3}>
          {book?.name}
        </Item>

        <Item label="authors" labelStyle={labelStyle} span={3}>
          {book?.authors.join(", ")}
        </Item>

        <Item label="publisher" labelStyle={labelStyle} span={3}>
          {book?.publisher}
        </Item>

        <Item label="country" labelStyle={labelStyle} span={3}>
          {book?.country}
        </Item>

        <Item label="number of pages" labelStyle={labelStyle} span={3}>
          {book?.numberOfPages}
        </Item>

        {/* TODO: Display the characters names list with a load more button */}
      </Descriptions>
    </>
  );
}
