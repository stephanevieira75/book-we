import axios from "axios";

import { BooksListResponseData } from "../types/book";
import { PaginationObject } from "../types/pagination";

class BooksAPIClientService {
  private apiUrl = `${process.env.REACT_APP_API_URL}/books`;

  public pagination: PaginationObject = {};

  /**
   * This method is used to get all books from the API using pagination.
   *
   * @param params {Object}
   * @returns {Promise<Book[]>}
   */
  list(pagination?: PaginationObject): Promise<BooksListResponseData> {
    return axios
      .get<undefined, BooksListResponseData>(this.buildUrl(pagination))
      .then((response) => {
        return response;
      });
  }

  /**
   * This method is used to build the URL for the API.
   *
   * @param params {Object}
   * @returns {String}
   */
  buildUrl(pagination?: PaginationObject): string {
    if (pagination?.next) {
      return pagination.next;
    }

    if (pagination?.prev) {
      return pagination.prev;
    }

    if (pagination?.last) {
      return pagination.last;
    }

    return `${this.apiUrl}${
      pagination?.pageNumber ? `?page=${pagination?.pageNumber}` : ""
    }${pagination?.pageSize ? `&pageSize=${pagination?.pageSize}` : ""}`;
  }
}

export const BooksAPIClient = new BooksAPIClientService();
