import { fetchSanity } from "./client";
import {
  ceoMessageQuery,
  eventQuery,
  eventsQuery,
  governanceGroupQuery,
  impactMetricsQuery,
  navigationQuery,
  newsArticleQuery,
  newsQuery,
  pageQuery,
  productsQuery,
  projectQuery,
  projectsQuery,
  researchProgrammesQuery,
  servicesQuery,
  siteSettingsQuery,
} from "./queries";
import {
  fallbackCeoMessage,
  fallbackEvents,
  fallbackGovernanceGroups,
  fallbackImpactMetrics,
  fallbackNavigation,
  fallbackNews,
  fallbackPages,
  fallbackProducts,
  fallbackProjects,
  fallbackResearchProgrammes,
  fallbackServices,
  fallbackSettings,
} from "./fallback";
import type {
  CeoMessage,
  EventItem,
  GovernanceGroup,
  ImpactMetric,
  MarketingPage,
  NavigationGroup,
  NewsArticle,
  ProductItem,
  Project,
  ResearchProgramme,
  ServiceItem,
  SiteSettings,
} from "./types";

export const getSiteSettings = () => fetchSanity<SiteSettings>(siteSettingsQuery, {}, fallbackSettings);
export const getNavigation = () => fetchSanity<NavigationGroup[]>(navigationQuery, {}, fallbackNavigation);

export function getPage(slug: string): Promise<MarketingPage> {
  return fetchSanity<MarketingPage>(pageQuery, { slug }, fallbackPages[slug] ?? fallbackPages.about);
}

export function getGovernanceGroup(slug: string): Promise<GovernanceGroup | null> {
  const fallback = fallbackGovernanceGroups[slug] ?? null;
  return fetchSanity<GovernanceGroup | null>(governanceGroupQuery, { slug }, fallback);
}

export const getCeoMessage = () => fetchSanity<CeoMessage>(ceoMessageQuery, {}, fallbackCeoMessage);
export const getProjects = () => fetchSanity<Project[]>(projectsQuery, {}, fallbackProjects);
export const getProject = (slug: string) => fetchSanity<Project | null>(projectQuery, { slug }, fallbackProjects.find((item) => item.slug === slug) ?? null);
export const getEvents = () => fetchSanity<EventItem[]>(eventsQuery, {}, fallbackEvents);
export const getEvent = (slug: string) => fetchSanity<EventItem | null>(eventQuery, { slug }, fallbackEvents.find((item) => item.slug === slug) ?? null);
export const getNews = () => fetchSanity<NewsArticle[]>(newsQuery, {}, fallbackNews);
export const getNewsArticle = (slug: string) => fetchSanity<NewsArticle | null>(newsArticleQuery, { slug }, fallbackNews.find((item) => item.slug === slug) ?? null);
export const getResearchProgrammes = () => fetchSanity<ResearchProgramme[]>(researchProgrammesQuery, {}, fallbackResearchProgrammes);
export const getProducts = () => fetchSanity<ProductItem[]>(productsQuery, {}, fallbackProducts);
export const getServices = () => fetchSanity<ServiceItem[]>(servicesQuery, {}, fallbackServices);
export const getImpactMetrics = () => fetchSanity<ImpactMetric[]>(impactMetricsQuery, {}, fallbackImpactMetrics);
