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
      ... on BlogLandingRecord {
        __typename
      }
      ... on AboutRecord {
        __typename
      }
      ... on LeadershipRecord {
        __typename
      }
      ... on MediaCollectionRecord {
        __typename
        tag {
          slug
        }
      }
      ... on NewsCollectionRecord {
        __typename
        tag {
          slug
        }
      }
      ... on CasestudyLandingRecord {
        __typename
      }
      ... on CaseStudyRecord {
        __typename
        slug
      }
    }
  }
`;

export const menuQuery = gql`
  query ($locale: SiteLocale!) {
    menu(locale: $locale) {
      main {
        ... on MenuGroupRecord {
          __typename
          label
          id
          submenu {
            ... on MenuItemRecord {
              __typename
              label
              description
              ...InternalFragment
              external
              icon {
                url
              }
            }
            ... on MenuGroupRecord {
              __typename
              label
              submenu {
                ... on MenuItemRecord {
                  __typename
                  label
                  ...InternalFragment
                  external
                }
              }
            }
          }
        }
        ... on MenuItemRecord {
          __typename
          label
          id
          ...InternalFragment
          external
        }
      }
    }
  }
  ${InternalFragment}
`;
