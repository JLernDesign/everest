import gql from "graphql-tag";
import {
  LinkFragment,
  FooterFragment,
  ResponsiveImageFragment,
} from "../fragments/global";

const ResultsSliderFragment = gql`
  fragment ResultsSliderFragment on ResultsSliderRecord {
    __typename
    intro
    slides {
      text
    }
  }
`;

const CasestudyBasicFragment = gql`
  fragment CasestudyBasicFragment on CasestudyBasicRecord {
    headline
    contentBlocks {
      __typename
      ... on TextBlockRecord {
        content
      }
      ... on ImageBlockRecord {
        image {
          ...ResponsiveImageFragment
        }
      }
    }
  }
`;

const ClientQuoteFragment = gql`
  fragment ClientQuoteFragment on ClientQuoteRecord {
    text
    byline
  }
`;

export const caseStudyQuery = gql`
  query ($slug: String) {
    caseStudy(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      headline
      image {
        ...ResponsiveImageFragment
      }
      details {
        label
        text
      }
      casestudyFlexible {
        casestudyModules {
          __typename
          ...ResultsSliderFragment
          ...CasestudyBasicFragment
          ...ClientQuoteFragment
        }
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
  ${ResultsSliderFragment}
  ${CasestudyBasicFragment}
  ${ClientQuoteFragment}
`;
