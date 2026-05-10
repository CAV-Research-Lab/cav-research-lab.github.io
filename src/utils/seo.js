const SITE_URL = 'https://www.cav-lab.io';
const DEFAULT_IMAGE = `${SITE_URL}/social-preview.jpg`;

export const routeMetadata = {
  '/': {
    title: 'CAV-Lab | Connected Autonomous Research Lab',
    description: 'Connected Autonomous Research Lab at the University of Surrey, advancing safe, trustworthy AI for autonomous vehicles, robotics, and connected mobility.',
  },
  '/research': {
    title: 'CAV-Lab Research Projects',
    description: 'Explore CAV-Lab research projects in autonomous driving, robotics, trustworthy AI, connected mobility, and safe intelligent transport systems.',
  },
  '/Innovations': {
    title: 'CAV-Lab Innovations',
    description: 'Discover CAV-Lab innovations, prototypes, and applied research outputs for connected autonomous vehicles, robotics, and trustworthy AI.',
  },
  '/impact': {
    title: 'CAV-Lab Research Impact',
    description: 'Browse CAV-Lab publications, books, patents, policy contributions, public engagement, and research impact from the University of Surrey.',
  },
  '/publications': {
    title: 'CAV-Lab Publications',
    description: 'Selected CAV-Lab research publications on autonomous vehicles, robotics, trustworthy AI, reinforcement learning, and connected mobility.',
  },
  '/team': {
    title: 'CAV-Lab Research Team',
    description: 'Meet the CAV-Lab research team working on connected autonomous vehicles, robotics, safe AI, and intelligent mobility at the University of Surrey.',
  },
  '/news': {
    title: 'CAV-Lab News',
    description: 'Read the latest CAV-Lab news, announcements, media coverage, events, and research updates from the Connected Autonomous Research Lab.',
  },
  '/blog': {
    title: 'CAV-Lab Blog',
    description: 'Insights from CAV-Lab researchers on autonomous driving, robotics, trustworthy AI, reinforcement learning, and connected mobility research.',
  },
};

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/$/, '');
}

export function getRouteMetadata(pathname) {
  return routeMetadata[normalizePathname(pathname)] || routeMetadata['/'];
}

export function getCanonicalUrl(pathname) {
  const normalizedPathname = normalizePathname(pathname);

  if (normalizedPathname === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${normalizedPathname}/`;
}

export function getStructuredData(pathname = '/') {
  const metadata = getRouteMetadata(pathname);
  const canonicalUrl = getCanonicalUrl(pathname);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Connected Autonomous Research Lab',
      alternateName: 'CAV-Lab',
      url: SITE_URL,
      logo: `${SITE_URL}/logo512.png`,
      image: DEFAULT_IMAGE,
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Surrey',
        url: 'https://www.surrey.ac.uk/',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CAV-Lab',
      alternateName: 'Connected Autonomous Research Lab',
      url: SITE_URL,
      publisher: {
        '@type': 'Organization',
        name: 'Connected Autonomous Research Lab',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'CAV-Lab',
        url: SITE_URL,
      },
      about: {
        '@type': 'Organization',
        name: 'Connected Autonomous Research Lab',
        url: SITE_URL,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE,
      },
    },
  ];
}

function updateMetaAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

function updateCanonicalLink(canonicalUrl) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', canonicalUrl);
}

function updateStructuredData(pathname) {
  const existingScript = document.getElementById('structured-data');

  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(getStructuredData(pathname));
  document.head.appendChild(script);
}

export function updatePageSeo(pathname) {
  const metadata = getRouteMetadata(pathname);
  const canonicalUrl = getCanonicalUrl(pathname);

  document.title = metadata.title;
  updateMetaAttribute('meta[name="description"]', 'content', metadata.description);
  updateMetaAttribute('meta[property="og:title"]', 'content', metadata.title);
  updateMetaAttribute('meta[property="og:description"]', 'content', metadata.description);
  updateMetaAttribute('meta[property="og:url"]', 'content', canonicalUrl);
  updateMetaAttribute('meta[name="twitter:title"]', 'content', metadata.title);
  updateMetaAttribute('meta[name="twitter:description"]', 'content', metadata.description);
  updateCanonicalLink(canonicalUrl);
  updateStructuredData(pathname);
}
