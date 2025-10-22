import gql from "graphql-tag";
import {
  LinkFragment,
  HeroFragment,
  HeaderFragment,
  FooterFragment,
  ResponsiveImageFragment,
  FaqFragment,
} from "../fragments/global";

export const landingQuery = gql`
  query {
    paidLanding {
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
        image {
          ...ResponsiveImageFragment
        }
        useBg
        bgColor
        bgImage {
          ...ResponsiveImageFragment
        }
      }
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
`;
