import type { SeoMetaTagType } from "vue-datocms";

export type LinkButton = {
  label: string;
  external?: string | null;
  internal?: {
    __typename: string;
    slug?: string;
    tag?: { slug: string };
  } | null;
};

export type CallToAction = {
  buttons: LinkButton[];
};

export type Location = {
  location: string;
  address: string;
  coords: string;
};

export type Investor = {
  title: string;
  logos: { url: string }[];
};

export type SignupForm = {
  headline: string;
  intro: string;
  hubspotId: string;
};

export type SettingsQueryData = {
  site: {
    favicon: SeoMetaTagType[];
    globalSeo?: {
      fallbackSeo: {
        title: string;
        description: string;
      };
    };
  };
  global: {
    headerCta: CallToAction;
    topBanner: {
      showBanner: boolean;
      bannerText: string;
      bgColor: string;
    };
    signIn: string;
    investors: Investor;
    description: string;
    footerCta: CallToAction;
    socialMedia: { platform: string; url: string }[];
    locations: Location[];
    emailAddress: string;
    badges: { url: string }[];
    gatedHeadline: string;
    gatedIntro: string;
    gatedFormId: string;
    signupForm: SignupForm;
  };
};
