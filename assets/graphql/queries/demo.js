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
      intro
      hubspotId
      featuredLogos {
        title
        logos {
          url
        }
      }
      flexibleContent {
        ...FlexibleContentFragment
      }
      footerCallout {
        ...FooterFragment
      }
    }
    global {
      locations {
        location
        address
      }
    }
  }
  ${HeaderFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${FlexibleContentFragment}
`;
