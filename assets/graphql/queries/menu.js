import gql from "graphql-tag";

export const InternalFragment = gql`
  fragment InternalFragment on MenuItemRecord {
    internal {
      ... on HomeRecord {
        __typename
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
        __typename
      }
      ... on WhySubpageRecord {
        __typename
        slug
      }
      ... on AiFirstRecord {
        __typename
      }
      ... on ClientSuccessRecord {
        __typename
      }
      ... on BookDemoRecord {
        __typename
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
