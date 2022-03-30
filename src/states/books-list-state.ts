import { atom } from "recoil";

import { Book } from "../types/book";

export const BooksListState = atom<Book[]>({
  key: "BooksListState",
  default: [],
});
