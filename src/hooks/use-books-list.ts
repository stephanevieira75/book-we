import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Book } from "../types/book";
import { BooksAPIClient } from "../services/books-api-client";
import { BooksListState } from "../states/books-list-state";
import { PaginationObject } from "../types/pagination";

/**
 * Hook to get all books from the API using pagination.
 *
 * @returns {[Book[], PaginationObject, (pagination?: PaginationObject) => void]}
 */
export function useBooksList(): {
  books: Book[];
  currentPagination: PaginationObject;
  refresh: (pagination?: PaginationObject) => void;
  nextPage: () => void;
  loading: boolean;
} {
  const [books, setBooks] = useRecoilState(BooksListState);
  const [loading, setLoading] = useState<boolean>(false);

  const refresh = async (pagination?: PaginationObject) => {
    setLoading(true);

    const updatedList = (await BooksAPIClient.list(pagination)).data;

    if (updatedList)
      setBooks(
        pagination?.next?.length ? [...books, ...updatedList] : updatedList
      );

    setLoading(false);
  };

  const nextPage = () => refresh(BooksAPIClient.pagination);

  // Initialize the book list
  useEffect(() => {
    refresh({
      pageNumber: 1,
      pageSize: 10,
    });

    // There is actually no missing dependency here so i'm using empty array and disable the warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    books,
    refresh,
    nextPage,
    currentPagination: BooksAPIClient.pagination,
    loading,
  };
}
