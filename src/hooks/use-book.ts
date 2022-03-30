import { useRecoilValue } from "recoil";

import { BookSelector } from "../states/book-selector";
import { Book } from "../types/book";

/**
 * Hook to get a single book from BooksListState with the unique bookUrl.
 *
 * @param bookUrl string
 * @returns {Book | undefined}
 */
export function useBook(bookUrl: string): {
  book: Book | undefined;
} {
  const book = useRecoilValue(BookSelector(bookUrl));

  return {
    book,
  };
}
