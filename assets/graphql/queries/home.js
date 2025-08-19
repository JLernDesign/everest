import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  FlexibleContentFragment,
  MediaSliderFragment,
  VideoFragment,
} from "../fragments/global";

export const homeQuery = gql`
  query ($locale: SiteLocale!) {
    home(locale: $locale) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
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
  ${VideoFragment}
`;
