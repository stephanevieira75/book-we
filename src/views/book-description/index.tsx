import { Button, Descriptions, Row, Typography } from "antd";

import { useLocation, useNavigate } from "react-router-dom";
import { CharacterCard } from "../../components";

import { useBook } from "../../hooks/use-book";
import { useCharactersList } from "../../hooks/use-characters-list";

import "./styles.scss";

const { Link } = Typography;
const { Item } = Descriptions;
const labelStyle = { fontWeight: "bold" };

export function BookDescription() {
  const location = useLocation();
  const navigateTo = useNavigate();

  // Get the book url from the location state
  const { book } = useBook((location.state as { bookUrl: string }).bookUrl);

  // Get the characters list using the book characters url list
  const { charactersList, nextCharacters } = useCharactersList(
    book?.characters || []
  );

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

        <Item label="characters" labelStyle={labelStyle} span={3}>
          {charactersList?.length ? (
            <div className="characters-list--container">
              {charactersList.map((character) => (
                <CharacterCard key={character.url} character={character} />
              ))}

              <Row
                className="characters-list-link--row"
                align="middle"
                justify="center"
              >
                <Link onClick={() => nextCharacters()}>Load more</Link>
              </Row>
            </div>
          ) : (
            "No characters provided"
          )}
        </Item>
      </Descriptions>
    </>
  );
}
