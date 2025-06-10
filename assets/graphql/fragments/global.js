import gql from "graphql-tag";

// reuse parts
export const LinkFragment = gql`
  fragment LinkFragment on CallToActionRecord {
    buttons {
      label
      internal {
        ... on HomeRecord {
          title
        }
        ... on PostRecord {
          __typename
          slug
        }
        ... on ProductRecord {
          __typename
          slug
        }
        ... on WhyMainRecord {
          title
        }
        ... on WhySubpageRecord {
          __typename
          slug
        }
        ... on AiFirstRecord {
          title
        }
      }
      external
      style
    }
  }
`;
export const HeroFragment = gql`
  fragment HeroFragment on HeroRecord {
    headline
    intro
    cta {
      ...LinkFragment
    }
    image {
      url
    }
  }
`;
export const HeaderFragment = gql`
  fragment HeaderFragment on SectionHeaderRecord {
    eyebrow
    headline
    intro
    cta {
      ...LinkFragment
    }
  }
`;
export const FooterFragment = gql`
  fragment FooterFragment on FooterBannerRecord {
    headline
    intro
    cta {
      ...LinkFragment
    }
  }
`;

// modules
const AdvantageFragment = gql`
  fragment AdvantageFragment on AdvantageRecord {
    __typename
    eyebrow
    headline
    color
    contentBlocks {
      __typename
      ... on AdvantageTextRecord {
        content
        stats {
          stats {
            figure
            label
          }
        }
      }
      ... on AdvantageImageRecord {
        image {
          url
        }
      }
    }
  }
`;
const AscendingSliderFragment = gql`
  fragment AscendingSliderFragment on AscendingSliderRecord {
    __typename
    header {
      ...HeaderFragment
    }
    modules {
      headline
      body
      image {
        url
      }
    }
  }
`;
const BannerCalloutFragment = gql`
  fragment BannerCalloutFragment on BannerCalloutRecord {
    __typename
    headline
    intro
    cta {
      ...LinkFragment
    }
  }
`;
const BlogCalloutFragment = gql`
  fragment BlogCalloutFragment on BlogCalloutRecord {
    __typename
  }
`;
const ClientSuccessFragment = gql`
  fragment ClientSuccessFragment on ClientSuccessRecord {
    __typename
    header {
      ...HeaderFragment
    }
    jaggedEdge
    slides {
      name
      title
      quote
      statsGroup {
        stats {
          figure
          label
        }
      }
      media {
        image {
          url
        }
        video {
          url
        }
      }
      logo {
        url
      }
    }
  }
`;
const FaqFragment = gql`
  fragment FaqFragment on FaqRecord {
    __typename
    header {
      ...HeaderFragment
    }
    items {
      question
      answer
    }
  }
`;
const ClientCardsFragment = gql`
  fragment ClientCardsFragment on ClientCardsModuleRecord {
    __typename
    header {
      ...HeaderFragment
    }
    slides {
      name
      title
      industry
      quote
      image {
        url
      }
    }
    cta {
      ...LinkFragment
    }
  }
`;
const IntegrationListFragment = gql`
  fragment IntegrationListFragment on IntegrationListRecord {
    __typename
    header {
      ...HeaderFragment
    }
    groups {
      title
      headerLeft
      headerRight
      items {
        name
        description
        image {
          url
        }
      }
    }
  }
`;
const NumberBucketGroupFragment = gql`
  fragment NumberBucketGroupFragment on NumberBucketGroupRecord {
    __typename
    header {
      ...HeaderFragment
    }
    buckets {
      headline
      description
    }
  }
`;
const OverviewFragment = gql`
  fragment OverviewFragment on OverviewRecord {
    __typename
    header {
      ...HeaderFragment
    }
    sections {
      id
      title
      headline
      body
      cta {
        ...LinkFragment
      }
      image {
        url
      }
    }
  }
`;
const ProblemFragment = gql`
  fragment ProblemFragment on ProblemRecord {
    __typename
    header {
      ...HeaderFragment
    }
    slides {
      headline
      description
      icon {
        url
      }
    }
  }
`;

export const FlexibleContentFragment = gql`
  fragment FlexibleContentFragment on FlexibleContentRecord {
    modules {
      __typename
      ...AdvantageFragment
      ...AscendingSliderFragment
      ...BannerCalloutFragment
      ...BlogCalloutFragment
      ...ClientSuccessFragment
      ...ClientCardsFragment
      ...FaqFragment
      ...IntegrationListFragment
      ...NumberBucketGroupFragment
      ...OverviewFragment
      ...ProblemFragment
    }
  }
  ${AdvantageFragment}
  ${AscendingSliderFragment}
  ${BannerCalloutFragment}
  ${BlogCalloutFragment}
  ${ClientSuccessFragment}
  ${ClientCardsFragment}
  ${FaqFragment}
  ${IntegrationListFragment}
  ${NumberBucketGroupFragment}
  ${OverviewFragment}
  ${ProblemFragment}
`;
