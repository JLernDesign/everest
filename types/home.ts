import type { SeoMetaTagType } from "vue-datocms";
import type { CallToAction } from "~/types/settings";

export type ResponsiveImage = {
  url: string;
  width?: number | null;
  height?: number | null;
  alt?: string | null;
  title?: string | null;
  responsiveImage?: {
    srcSet: string;
    webpSrcSet: string;
    sizes: string;
    src: string;
    width: number;
    height: number;
    aspectRatio: number;
    alt?: string | null;
    title?: string | null;
    base64?: string | null;
  } | null;
};

export type HeroRecord = {
  headline: string;
  intro?: string | null;
  cta?: CallToAction | null;
  image?: ResponsiveImage | null;
};

export type SectionHeaderRecord = {
  eyebrow?: string | null;
  headline: string;
  intro?: string | null;
  cta?: CallToAction | null;
};

export type FooterBannerRecord = {
  headline: string;
  intro?: string | null;
  cta?: CallToAction | null;
};

export type FeaturedLogos = {
  title: string;
  logos: { url: string }[];
};

export type VideoRecord = {
  file?: {
    video?: {
      muxPlaybackId: string;
      title?: string | null;
      width?: number | null;
      height?: number | null;
      thumbhash?: string | null;
      blurUpThumb?: string | null;
      thumbnailUrl?: string | null;
    } | null;
  } | null;
  external?: {
    height?: number | null;
    provider?: string | null;
    providerUid?: string | null;
    thumbnailUrl?: string | null;
    title?: string | null;
    url?: string | null;
    width?: number | null;
  } | null;
  loopClip?: { url: string } | null;
};

export type MediaPostRecord = {
  __typename?: "MediaPostRecord";
  id: string;
  slug: string;
  title: string;
  intro?: string | null;
  publishDate?: string | null;
  tag?: { name: string; slug: string } | null;
  cta?: CallToAction | null;
  accentColor?: { bgColor: string } | null;
  gatedContent?: boolean | null;
  gateForm?: {
    title: string;
    headline: string;
    intro: string;
    hubspotId: string;
  } | null;
  media?: Record<string, unknown> | null;
};

export type PostRecord = {
  __typename: "PostRecord";
  title: string;
  slug: string;
  image?: ResponsiveImage | null;
};

export type MediaSlide = {
  post: MediaPostRecord | PostRecord;
};

export type MediaSliderRecord = {
  __typename: "MediaSliderRecord";
  mediaSlides: MediaSlide[];
};

export type FlexibleContentModule = {
  __typename:
    | "AdvantageRecord"
    | "AscendingSliderRecord"
    | "BannerCalloutRecord"
    | "BigQuoteRecord"
    | "BlogCalloutRecord"
    | "ClientSuccessModuleRecord"
    | "ClientCardsModuleRecord"
    | "ClientQuoteListRecord"
    | "FaqRecord"
    | "IntegrationListRecord"
    | "NumberBucketGroupRecord"
    | "OverviewRecord"
    | "SolutionModuleRecord"
    | "PressCalloutRecord"
    | "ProblemRecord"
    | "BasicContentRecord"
    | "MapModuleRecord"
    | "FullPhotoRecord"
    | "HappeningsSliderRecord"
    | "EventListRecord"
    | "CompareTableRecord"
    | "AifirstCalloutRecord";
  header?: {
    eyebrow?: string | null;
  };
};

export type HomePage = {
  seo: SeoMetaTagType[];
  hero: HeroRecord | null;
  mediaSlider: MediaSliderRecord;
  intro: SectionHeaderRecord | null;
  featuredLogos: FeaturedLogos;
  flexibleContent: {
    modules: FlexibleContentModule[];
  };
  footerCallout: FooterBannerRecord;
};

export type HomeQueryData = {
  home: HomePage;
};
