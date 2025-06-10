import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  FooterFragment,
} from "../fragments/global";

const AiFirstBasicFragment = gql`
  fragment AiFirstBasicFragment on AiFirstBasicRecord {
    __typename
    headline
    body
    accentColor
  }
`;

const AiFirstBigtextFragment = gql`
  fragment AiFirstBigtextFragment on AiFirstBigtextRecord {
    __typename
    headline
    cta {
      ...LinkFragment
    }
  }
`;

const AiFirstBucketFragment = gql`
  fragment AiFirstBucketFragment on AiFirstBucketGroupRecord {
    __typename
    headline
    intro
    buckets {
      headline
      description
      icon {
        url
      }
      accentColor
    }
  }
`;

const AiFirstSlidesFragment = gql`
  fragment AiFirstSlidesFragment on AiFirstSlideModuleRecord {
    __typename
    slides {
      title
      description
      image {
        url
      }
      accentColor
    }
  }
`;

export const aiFirstQuery = gql`
  query {
    aiFirst {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ...HeroFragment
      }
      aiFirstFlexible {
        aiFirstModules {
          __typename
          ...AiFirstBasicFragment
          ...AiFirstBigtextFragment
          ...AiFirstBucketFragment
          ...AiFirstSlidesFragment
        }
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${AiFirstBasicFragment}
  ${AiFirstBigtextFragment}
  ${AiFirstBucketFragment}
  ${AiFirstSlidesFragment}
`;
