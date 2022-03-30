import { ListResponseData } from "./response";

// TODO: Use real data types instead of any
export type Character = { [key: string]: any };

export type CharacterResponseData = ListResponseData<Character>;
