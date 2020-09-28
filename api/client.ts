import { GraphQLClient } from 'graphql-request';

function createClient() {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '';
  const authKey = process.env.NEXT_PUBLIC_GRAPHQL_AUTH_KEY ?? '';
  const authSecret = process.env.NEXT_PUBLIC_GRAPHQL_AUTH_SECRET ?? '';

  const headers: Record<string, string> = {};

  if (authKey !== '') {
    headers[authKey] = authSecret;
  }
  return new GraphQLClient(endpoint, {
    headers,
  });
}

export const graphQLClient = createClient();
