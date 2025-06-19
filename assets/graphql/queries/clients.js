import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
  ResponsiveImageFragment,
  VideoFragment,
} from "../fragments/global";

const ClientGridFragment = gql`
  fragment ClientGridFragment on ClientSuccessRecord {
    clientGrid {
      blocks {
        style
        name
        title
        quote
        image {
          ...ResponsiveImageFragment
        }
        logo {
          url
        }
        statsGroup {
          stats {
            figure
            label
          }
        }
        bgColor
      }
    }
  }
`;

export const clientsQuery = gql`
  query {
    clientSuccess {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ...HeroFragment
      }
      clientSlider {
        image {
          ...ResponsiveImageFragment
        }
        logo {
          url
        }
        video {
          ...VideoFragment
        }
        quote
        name
        title
      }
      ...ClientGridFragment
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
  ${ClientGridFragment}
  ${FlexibleContentFragment}
  ${VideoFragment}
`;
