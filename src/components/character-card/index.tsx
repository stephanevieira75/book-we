import { Card, Descriptions } from "antd";

import { Character } from "../../types/character";
import { shouldDiplayValue } from "../../utils/should-display-value";

type PropsType = {
  character: Character;
};

const labelStyle = { fontWeight: "bold" };

const { Item } = Descriptions;
const noInformationMessage = "No information about this";
export const CharacterCard = ({ character }: PropsType) => (
  <Card title={character.name} bordered={false}>
    <Descriptions>
      <Item label="gender" labelStyle={labelStyle} span={3}>
        {shouldDiplayValue<string, string>(
          character.gender,
          noInformationMessage
        )}
      </Item>

      <Item label="born" labelStyle={labelStyle} span={3}>
        {shouldDiplayValue<string, string>(
          character.born,
          noInformationMessage
        )}
      </Item>

      <Item label="titles" labelStyle={labelStyle} span={3}>
        {shouldDiplayValue<string, string>(
          character.titles ? character.titles.join(", ") : undefined,
          noInformationMessage
        )}
      </Item>

      <Item label="culture" labelStyle={labelStyle} span={3}>
        {shouldDiplayValue<string, string>(
          character.culture,
          noInformationMessage
        )}
      </Item>
    </Descriptions>
  </Card>
);
