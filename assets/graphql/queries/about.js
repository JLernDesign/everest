import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const whyQuery = gql`
  query {
    whyMain {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ...HeroFragment
      }
      flexibleContent {
        ...FlexibleContentFragment
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${HeroFragment}
  ${HeaderFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${FlexibleContentFragment}
`;
