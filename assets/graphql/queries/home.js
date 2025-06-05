import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
} from "../fragments/global";

export const homeQuery = gql`
  query {
    home {
      hero {
        ...HeroFragment
      }
      intro {
        ...HeaderFragment
      }
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
  }
  ${HeroFragment}
  ${HeaderFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${FlexibleContentFragment}
`;
