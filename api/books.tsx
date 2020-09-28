import { gql } from 'graphql-request';
import { QueryResult, useQuery } from 'react-query';

import { graphQLClient } from './client';

enum BookStatus {
  AVAILABLE = 'available',
}
type Book = {
  id: number;
  title: string;
  description: string;
  status: BookStatus;
  isbn?: string;
  barCode?: number;
};

export function useBooks(): QueryResult<Book[], unknown> {
  return useQuery('books', async () => {
    const response = await graphQLClient.request<{ books: Book[] }>(
      gql`
        {
          books {
            id
            title
            description
            status
            isbn
            barCode: bar_code
            authors_books {
              author {
                id
                given_name
                family_name
                bio
              }
            }
          }
        }
      `,
    );
    return response.books;
  });
}
