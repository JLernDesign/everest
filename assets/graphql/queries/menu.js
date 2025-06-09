import gql from "graphql-tag";

export const InternalFragment = gql`
  fragment InternalFragment on MenuItemRecord {
    internal {
      ... on HomeRecord {
        title
      }
      ... on PostRecord {
        __typename
        slug
      }
      ... on ProductRecord {
        __typename
        slug
      }
      ... on WhyMainRecord {
        title
      }
      ... on WhySubpageRecord {
        __typename
        slug
      }
    }
  }
`;

export const menuQuery = gql`
  query {
    menu {
      main {
        ... on MenuGroupRecord {
          __typename
          label
          submenu {
            label
            description
            ...InternalFragment
            external
            icon {
              url
            }
          }
        }
        ... on MenuItemRecord {
          __typename
          label
          ...InternalFragment
          external
        }
      }
    }
  }
  ${InternalFragment}
`;
