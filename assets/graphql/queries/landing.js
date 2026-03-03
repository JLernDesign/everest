import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  ResponsiveImageFragment,
  FaqFragment,
  MediaSliderFragment,
  VideoFragment,
  AscendingSliderFragment,
} from "../fragments/global";

const LogosBlockFragment = gql`
  fragment LogosBlockFragment on LogosBlockRecord {
    __typename
    title
    logos {
      url
    }
  }
`;

const BasicColumnsFragment = gql`
  fragment BasicColumnsFragment on LandingBasicRecord {
    __typename
    layout
    headline
    body
    cta {
      ...LinkFragment
    }
    image {
      __typename
      ... on ImageBlockRecord {
        image {
          ...ResponsiveImageFragment
        }
      }
      ... on ImageCaptionRecord {
        image {
          ...ResponsiveImageFragment
        }
        caption
      }
      ... on QuoteBlockRecord {
        quote
        name
        title
        person {
          ...ResponsiveImageFragment
        }
        bgImage {
          ...ResponsiveImageFragment
        }
        bgColor
      }
      ...MediaSliderFragment
    }
  }
`;

const ListModuleFragment = gql`
  fragment ListModuleFragment on ListModuleRecord {
    __typename
    headline
    intro
    layout
    logoGroup {
      logos {
        url
      }
    }
    cta {
      ...LinkFragment
    }
    listItems {
      headline
      description
    }
  }
`;

const ImageFullFragment = gql`
  fragment ImageFullFragment on ImageFullRecord {
    __typename
    header {
      ...HeaderFragment
    }
    image {
      ...ResponsiveImageFragment
    }
    bgColor
  }
`;

const CenteredTextFragment = gql`
  fragment CenteredTextFragment on CenteredTextRecord {
    __typename
    headline
    logoGroup {
      logos {
        url
      }
    }
    intro
    cta {
      ...LinkFragment
    }
    logoIcon {
      url
    }
  }
`;

const CtaFormFragment = gql`
  fragment CtaFormFragment on CtaFormRecord {
    __typename
    jaggedEdge
    header {
      ...HeaderFragment
    }
    rep {
      name
      photo {
        url
      }
    }
    hubspotId
  }
`;

const BasicCenteredTextFragment = gql`
  fragment BasicCenteredTextFragment on BasicCenteredTextRecord {
    __typename
    header {
      ...HeaderFragment
    }
  }
`;

const BasicSliderFragment = gql`
  fragment BasicSliderFragment on BasicSliderRecord {
    __typename
    header {
      ...HeaderFragment
    }
    imageSlides {
      ...ResponsiveImageFragment
    }
  }
`;

const CoauthorModuleFragment = gql`
  fragment CoauthorModuleFragment on CoauthorModuleRecord {
    __typename
    header {
      ...HeaderFragment
    }
    authors {
      name
      title
      photo {
        url
      }
      workHistory {
        text
      }
    }
  }
`;

export const landingQuery = gql`
  query ($slug: String!) {
    paidLanding(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      title
      slug
      hideHeader
      eyebrow
      headline
      intro
      heroLogo {
        url
        alt
      }
      rep {
        name
        photo {
          url
        }
      }
      cta {
        ...LinkFragment
      }
      heroImage {
        __typename
        ... on ImageBgRecord {
          image {
            ...ResponsiveImageFragment
          }
          bgColor
          bgImage {
            ...ResponsiveImageFragment
          }
        }
        ... on ImageBlockRecord {
          image {
            ...ResponsiveImageFragment
          }
        }
        ... on FormBlockRecord {
          hubspotId
        }
      }
      landingFlexible {
        landingModules {
          __typename
          ...FaqFragment
          ...LogosBlockFragment
          ...BasicColumnsFragment
          ...ListModuleFragment
          ...CenteredTextFragment
          ...ImageFullFragment
          ...CtaFormFragment
          ...BasicCenteredTextFragment
          ...BasicSliderFragment
          ...CoauthorModuleFragment
          ...AscendingSliderFragment
        }
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
  ${HeaderFragment}
  ${ResponsiveImageFragment}
  ${FaqFragment}
  ${LogosBlockFragment}
  ${BasicColumnsFragment}
  ${MediaSliderFragment}
  ${VideoFragment}
  ${ListModuleFragment}
  ${CenteredTextFragment}
  ${ImageFullFragment}
  ${CtaFormFragment}
  ${BasicCenteredTextFragment}
  ${BasicSliderFragment}
  ${CoauthorModuleFragment}
  ${AscendingSliderFragment}
`;
