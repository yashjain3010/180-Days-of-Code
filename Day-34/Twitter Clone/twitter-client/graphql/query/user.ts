import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`#graphql
query VerifyUserGoogleToken($token : String!){
    verifyGoogleToken(token : $token)
}
`);

export const getCurrentUser = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImageURL
    }
  }
`);