import gql from "graphql-tag";
import { LinkFragment } from "../fragments/global";

export const settingsQuery = gql`
  query {
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
    home {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    global {
      headerCta {
        ...LinkFragment
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
      badges {
        url
      }
    }
  }
  ${LinkFragment}
`;
