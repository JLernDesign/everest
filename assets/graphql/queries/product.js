import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
  VideoFragment,
} from "../fragments/global";

export const productQuery = gql`
  query ($slug: String) {
    product(filter: { slug: { eq: $slug } }) {
      order
      demoVideo {
        title
        media {
          ... on ProductDemoRecord {
            __typename
            screen {
              ...ResponsiveImageFragment
            }
            video {
              ...VideoFragment
            }
          }
        }
      }
      infographic
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ...HeroFragment
      }
      clientQuote {
        name
        title
        industry
        quote
        image {
          ...ResponsiveImageFragment
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
  ${HeroFragment}
  ${HeaderFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${FlexibleContentFragment}
  ${VideoFragment}
`;
