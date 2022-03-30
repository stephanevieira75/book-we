import { selectorFamily } from "recoil";

import { Book } from "../types/book";
import { BooksListState } from "./books-list-state";

export const BookSelector = selectorFamily<Book | undefined, string>({
  key: "BookSelector",
  get:
    (bookUrl) =>
    ({ get }) => {
      const list = get(BooksListState);

      return list.find((book) => book.url === bookUrl);
    },
});
