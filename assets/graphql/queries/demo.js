import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const demoQuery = gql`
  query {
    bookDemo {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      headline
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
`;
