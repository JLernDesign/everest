import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
  ResponsiveImageFragment,
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
          id
          url
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
`;
