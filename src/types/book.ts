import { ListResponseData } from "./response";

// TODO: Use real data types instead of any
export type Book = { [key: string]: any; characters: string[]; url: string };

export type BooksListResponseData = ListResponseData<Book[]>;
