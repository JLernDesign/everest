import gql from "graphql-tag";
import {
  LinkFragment,
  FooterFragment,
  ResponsiveImageFragment,
  HeroFragment,
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

const CasestudyThumbFragment = gql`
  fragment CasestudyThumbFragment on CaseStudyRecord {
    title
    slug
    headline
    image {
      ...ResponsiveImageFragment
    }
  }
`;

export const casestudyLandingQuery = gql`
  query {
    casestudyLanding {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      title
      hero {
        ...HeroFragment
      }
      footerCallout {
        ...FooterFragment
      }
    }
    allCaseStudies(orderBy: order_ASC) {
      ...CasestudyThumbFragment
    }
  }
  ${FooterFragment}
  ${HeroFragment}
  ${CasestudyThumbFragment}
  ${ResponsiveImageFragment}
  ${LinkFragment}
`;

export const caseStudiesQuery = gql`
  query {
    allCaseStudies(orderBy: order_ASC) {
      ...CasestudyThumbFragment
    }
  }
  ${CasestudyThumbFragment}
  ${ResponsiveImageFragment}
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
      casestudyResults {
        headline
        intro
        cta {
          ...LinkFragment
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
