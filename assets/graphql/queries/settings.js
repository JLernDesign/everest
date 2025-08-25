import gql from "graphql-tag";
import { LinkFragment } from "../fragments/global";

export const settingsQuery = gql`
  query ($locale: SiteLocale!) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
      globalSeo {
        fallbackSeo {
          title
          description
        }
      }
    }
    global(locale: $locale) {
      headerCta {
        ...LinkFragment
      }
      topBanner {
        bannerText
        bgColor
      }
      signIn
      investors {
        title
        logos {
          url
        }
      }
      description
      footerCta {
        ...LinkFragment
      }
      socialMedia {
        platform
        url
      }
      locations {
        location
        address
        coords
      }
      emailAddress
      badges {
        url
      }
      gatedHeadline
      gatedIntro
    }
  }
  ${LinkFragment}
`;
