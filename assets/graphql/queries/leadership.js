import gql from "graphql-tag";
import {
  LinkFragment,
  FooterFragment,
  HeaderFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const leadershipQuery = gql`
  query {
    leadership {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      team {
        header {
          ...HeaderFragment
        }
        people {
          name
          title
          bio
          image {
            ...ResponsiveImageFragment
          }
          linkedin
        }
      }
      flexibleContent {
        ...FlexibleContentFragment
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${HeaderFragment}
  ${LinkFragment}
  ${FlexibleContentFragment}
`;
