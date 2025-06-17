import gql from "graphql-tag";
import {
  LinkFragment,
  FooterFragment,
  HeaderFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const aboutQuery = gql`
  query {
    about {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      heroHeadline
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
