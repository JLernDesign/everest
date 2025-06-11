import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
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
          url
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
