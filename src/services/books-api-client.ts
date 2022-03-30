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
        if (response.headers.link) {
          this.pagination = this.parseLinkHeader(response.headers.link);
        }

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

  /**
   * This method is used to parse the Link header from the API.
   *
   * @param links {String}
   * @returns PaginationObject
   */
  parseLinkHeader(links: string): PaginationObject {
    const linksArray = links.split(", ");

    const finalParsedLinks: PaginationObject = {
      last: undefined,
      next: undefined,
      prev: undefined,
      first: undefined,
      pageNumber: undefined,
      pageSize: undefined,
    };

    linksArray.forEach((link) => {
      if (!link) return;

      if (link.includes('rel="next"')) {
        finalParsedLinks.next = link.split(";")[0].slice(1, -1);
      }

      if (link.includes('rel="prev"')) {
        finalParsedLinks.prev = link.split(";")[0].slice(1, -1);
      }

      if (link.includes('rel="first"')) {
        finalParsedLinks.first = link.split(";")[0].slice(1, -1);
      }

      if (link.includes('rel="last"')) {
        finalParsedLinks.last = link.split(";")[0].slice(1, -1);
      }
    });

    return finalParsedLinks;
  }
}

export const BooksAPIClient = new BooksAPIClientService();
