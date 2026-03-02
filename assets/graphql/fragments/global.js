import gql from "graphql-tag";

// reuse parts
export const ResponsiveImageFragment = gql`
  fragment ResponsiveImageFragment on FileField {
    url
    width
    height
    alt
    title
    responsiveImage {
      srcSet
      webpSrcSet
      sizes
      src
      width
      height
      aspectRatio
      alt
      title
      base64
    }
  }
`;
export const LinkFragment = gql`
  fragment LinkFragment on CallToActionRecord {
    buttons {
      label
      internal {
        ... on HomeRecord {
          __typename
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
          __typename
        }
        ... on WhySubpageRecord {
          __typename
          slug
        }
        ... on AiFirstRecord {
          __typename
        }
        ... on ClientSuccessRecord {
          __typename
        }
        ... on BookDemoRecord {
          __typename
        }
        ... on BlogLandingRecord {
          __typename
        }
        ... on AboutRecord {
          __typename
        }
        ... on LeadershipRecord {
          __typename
        }
        ... on MediaCollectionRecord {
          __typename
          tag {
            slug
          }
        }
        ... on MediaPostRecord {
          __typename
          slug
        }
        ... on CaseStudyRecord {
          __typename
          slug
        }
        ... on CasestudyLandingRecord {
          __typename
        }
      }
      external
      style
    }
  }
`;
export const SingleLinkFragment = gql`
  fragment SingleLinkFragment on LinkRecord {
    internal {
      ... on HomeRecord {
        __typename
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
        __typename
      }
      ... on WhySubpageRecord {
        __typename
        slug
      }
      ... on AiFirstRecord {
        __typename
      }
      ... on ClientSuccessRecord {
        __typename
      }
      ... on BookDemoRecord {
        __typename
      }
      ... on BlogLandingRecord {
        __typename
      }
      ... on AboutRecord {
        __typename
      }
      ... on LeadershipRecord {
        __typename
      }
      ... on MediaCollectionRecord {
        __typename
        tag {
          slug
        }
      }
      ... on MediaPostRecord {
        __typename
        slug
      }
      ... on CaseStudyRecord {
        __typename
        slug
      }
      ... on CasestudyLandingRecord {
        __typename
      }
    }
    external
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
      ...ResponsiveImageFragment
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
export const VideoFragment = gql`
  fragment VideoFragment on VideoRecord {
    file {
      video {
        muxPlaybackId
        title
        width
        height
        thumbhash
        blurUpThumb
        thumbnailUrl
      }
    }
    external {
      height
      provider
      providerUid
      thumbnailUrl
      title
      url
      width
    }
    loopClip {
      url
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
          ...ResponsiveImageFragment
        }
      }
    }
  }
`;
export const AscendingSliderFragment = gql`
  fragment AscendingSliderFragment on AscendingSliderRecord {
    __typename
    background
    header {
      ...HeaderFragment
    }
    modules {
      headline
      body
      image {
        ...ResponsiveImageFragment
      }
      bgColor
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
const PressCalloutFragment = gql`
  fragment PressCalloutFragment on PressCalloutRecord {
    __typename
  }
`;
export const ClientSuccessFragment = gql`
  fragment ClientSuccessFragment on ClientSuccessModuleRecord {
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
          ...ResponsiveImageFragment
        }
        video {
          url
        }
      }
      logo {
        ...ResponsiveImageFragment
      }
    }
  }
`;
export const FaqFragment = gql`
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
        ...ResponsiveImageFragment
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
      items {
        image {
          ...ResponsiveImageFragment
        }
        link
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
      body
      productPage {
        slug
        title
        infographic
        hero {
          image {
            ...ResponsiveImageFragment
          }
        }
      }
    }
  }
`;
const SolutionCardsFragment = gql`
  fragment SolutionCardsFragment on SolutionModuleRecord {
    __typename
    header {
      ...HeaderFragment
    }
    sections {
      id
      title
      headline
      body
      bullets {
        title
        text
      }
      stats {
        stats {
          figure
          label
        }
      }
      cta {
        ...LinkFragment
      }
      bgImage {
        ...ResponsiveImageFragment
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
const BigQuoteFragment = gql`
  fragment BigQuoteFragment on BigQuoteRecord {
    __typename
    quote
    name
    title
    image {
      ...ResponsiveImageFragment
    }
  }
`;
const ClientListFragment = gql`
  fragment ClientListFragment on ClientQuoteListRecord {
    __typename
    slides {
      name
      title
      industry
      quote
      image {
        ...ResponsiveImageFragment
      }
    }
  }
`;
const MapModuleFragment = gql`
  fragment MapModuleFragment on MapModuleRecord {
    __typename
    headline
    intro
  }
`;
const FullPhotoFragment = gql`
  fragment FullPhotoFragment on FullPhotoRecord {
    __typename
    image {
      ...ResponsiveImageFragment
    }
  }
`;
const BasicContentFragment = gql`
  fragment BasicContentFragment on BasicContentRecord {
    __typename
    header {
      ...HeaderFragment
    }
    jaggedEdge
    layout
    body
    cta {
      ...LinkFragment
    }
    image {
      ...ResponsiveImageFragment
    }
  }
`;
export const MediaPostFragment = gql`
  fragment MediaPostFragment on MediaPostRecord {
    __typename
    id
    slug
    title
    intro
    publishDate
    tag {
      name
      slug
    }
    cta {
      ...LinkFragment
    }
    accentColor {
      bgColor
    }
    gatedContent
    gateForm {
      title
      headline
      intro
      hubspotId
    }
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
      ... on MediaVideoRecord {
        __typename
        image {
          ...ResponsiveImageFragment
        }
        video {
          ...VideoFragment
        }
      }
      ... on PodcastRecord {
        __typename
        bgColor
        person {
          name
          photo {
            url
          }
        }
        externalLink
      }
      ... on EbookRecord {
        __typename
        bgColor
        document {
          url
        }
      }
    }
  }
`;
export const MediaSliderFragment = gql`
  fragment MediaSliderFragment on MediaSliderRecord {
    __typename
    mediaSlides {
      post {
        ...MediaPostFragment
        ... on PostRecord {
          title
          slug
          image {
            ...ResponsiveImageFragment
          }
        }
      }
    }
  }
  ${MediaPostFragment}
`;
const HappeningsFragment = gql`
  fragment HappeningsFragment on HappeningsSliderRecord {
    __typename
    header {
      ...HeaderFragment
    }
    slides {
      photo {
        ...ResponsiveImageFragment
      }
      caption
      link
    }
  }
`;
const EventsFragment = gql`
  fragment EventsFragment on EventListRecord {
    __typename
    header {
      ...HeaderFragment
    }
    events {
      startDate
      endDate
      location
      title
      description
      link
      image {
        ...ResponsiveImageFragment
      }
    }
  }
`;
const CompareTableFragment = gql`
  fragment CompareTableFragment on CompareTableRecord {
    __typename
    header {
      ...HeaderFragment
    }
    tableData
  }
`;
export const AifirstCalloutFragment = gql`
  fragment AifirstCalloutFragment on AifirstCalloutRecord {
    __typename
    headline
    intro
    cta {
      ...LinkFragment
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
      ...BigQuoteFragment
      ...BlogCalloutFragment
      ...ClientSuccessFragment
      ...ClientCardsFragment
      ...ClientListFragment
      ...FaqFragment
      ...IntegrationListFragment
      ...NumberBucketGroupFragment
      ...OverviewFragment
      ...SolutionCardsFragment
      ...PressCalloutFragment
      ...ProblemFragment
      ...BasicContentFragment
      ...MapModuleFragment
      ...FullPhotoFragment
      ...HappeningsFragment
      ...EventsFragment
      ...CompareTableFragment
      ...AifirstCalloutFragment
    }
  }
  ${AdvantageFragment}
  ${AscendingSliderFragment}
  ${BannerCalloutFragment}
  ${BigQuoteFragment}
  ${BlogCalloutFragment}
  ${ClientSuccessFragment}
  ${ClientCardsFragment}
  ${ClientListFragment}
  ${FaqFragment}
  ${IntegrationListFragment}
  ${NumberBucketGroupFragment}
  ${OverviewFragment}
  ${SolutionCardsFragment}
  ${PressCalloutFragment}
  ${ProblemFragment}
  ${ResponsiveImageFragment}
  ${BasicContentFragment}
  ${MapModuleFragment}
  ${FullPhotoFragment}
  ${HappeningsFragment}
  ${EventsFragment}
  ${CompareTableFragment}
  ${AifirstCalloutFragment}
`;
