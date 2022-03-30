import axios from "axios";
import { useEffect, useState } from "react";

import { Character, CharacterResponseData } from "../types/character";

export function useCharactersList(charactersUrls: string[]) {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [charactersLimit, setCharactersLimit] = useState<number>(5);

  const fetchSomeCharacters = async () => {
    const charactersThatNeedToBeRequested = charactersUrls.slice(
      charactersList.length || 0,
      charactersLimit
    );

    charactersThatNeedToBeRequested.forEach(async (characterUrl) => {
      // TODO: create a CharacterAPIClient service instead
      const character = (
        await axios.get<undefined, CharacterResponseData>(characterUrl)
      ).data;

      setCharactersList((prevState) =>
        prevState && prevState.length ? [...prevState, character] : [character]
      );
    });
  };

  const nextCharacters = () => setCharactersLimit((current) => current + 5);

  useEffect(() => {
    fetchSomeCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charactersLimit, charactersUrls]);

  return {
    charactersList,
    nextCharacters,
  };
}
