import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const whySubpageQuery = gql`
  query ($slug: String) {
    whySubpage(filter: { slug: { eq: $slug } }) {
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
