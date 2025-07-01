import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
  MediaSliderFragment,
} from "../fragments/global";

export const homeQuery = gql`
  query {
    home {
      hero {
        ...HeroFragment
      }
      mediaSlider {
        ...MediaSliderFragment
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
  ${MediaSliderFragment}
`;
