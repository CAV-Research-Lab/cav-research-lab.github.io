import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const buildDir = join(repoRoot, 'build');
const indexFile = join(buildDir, 'index.html');
const siteUrl = 'https://www.cav-lab.io';
const defaultImage = `${siteUrl}/social-preview.jpg`;

const routes = [
  {
    route: '',
    path: '/',
    title: 'CAV-Lab | Connected Autonomous Research Lab',
    description: 'Connected Autonomous Research Lab at the University of Surrey, advancing safe, trustworthy AI for autonomous vehicles, robotics, and connected mobility.',
  },
  {
    route: 'research',
    path: '/research/',
    title: 'CAV-Lab Research Projects',
    description: 'Explore CAV-Lab research projects in autonomous driving, robotics, trustworthy AI, connected mobility, and safe intelligent transport systems.',
  },
  {
    route: 'Innovations',
    path: '/Innovations/',
    title: 'CAV-Lab Innovations',
    description: 'Discover CAV-Lab innovations, prototypes, and applied research outputs for connected autonomous vehicles, robotics, and trustworthy AI.',
  },
  {
    route: 'impact',
    path: '/impact/',
    title: 'CAV-Lab Research Impact',
    description: 'Browse CAV-Lab publications, books, patents, policy contributions, public engagement, and research impact from the University of Surrey.',
  },
  {
    route: 'publications',
    path: '/publications/',
    title: 'CAV-Lab Publications',
    description: 'Selected CAV-Lab research publications on autonomous vehicles, robotics, trustworthy AI, reinforcement learning, and connected mobility.',
  },
  {
    route: 'team',
    path: '/team/',
    title: 'CAV-Lab Research Team',
    description: 'Meet the CAV-Lab research team working on connected autonomous vehicles, robotics, safe AI, and intelligent mobility at the University of Surrey.',
  },
  {
    route: 'news',
    path: '/news/',
    title: 'CAV-Lab News',
    description: 'Read the latest CAV-Lab news, announcements, media coverage, events, and research updates from the Connected Autonomous Research Lab.',
  },
  {
    route: 'blog',
    path: '/blog/',
    title: 'CAV-Lab Blog',
    description: 'Insights from CAV-Lab researchers on autonomous driving, robotics, trustworthy AI, reinforcement learning, and connected mobility research.',
  },
];

function getCanonicalUrl(path) {
  if (path === '/') {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path}`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getStructuredData(route) {
  const canonicalUrl = getCanonicalUrl(route.path);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Connected Autonomous Research Lab',
      alternateName: 'CAV-Lab',
      url: siteUrl,
      logo: `${siteUrl}/logo512.png`,
      image: defaultImage,
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
      url: siteUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Connected Autonomous Research Lab',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: route.title,
      description: route.description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'CAV-Lab',
        url: siteUrl,
      },
      about: {
        '@type': 'Organization',
        name: 'Connected Autonomous Research Lab',
        url: siteUrl,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: defaultImage,
      },
    },
  ];
}

function replaceOrInsert(html, regex, replacement) {
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }

  return html.replace('</head>', `    ${replacement}\n  </head>`);
}

function applySeo(html, route) {
  const canonicalUrl = getCanonicalUrl(route.path);
  const structuredData = JSON.stringify(getStructuredData(route)).replace(/</g, '\\u003c');

  let routeHtml = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

  routeHtml = replaceOrInsert(routeHtml, /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/i, `<meta name="description" content="${escapeHtml(route.description)}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/i, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/i, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/i, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
  routeHtml = replaceOrInsert(routeHtml, /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/i, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);
  routeHtml = routeHtml.replace(/\s*<script\s+id="structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, '');

  return routeHtml.replace('</head>', `    <script id="structured-data" type="application/ld+json">${structuredData}</script>\n  </head>`);
}

const baseHtml = readFileSync(indexFile, 'utf8');

routes.forEach((route) => {
  const routeHtml = applySeo(baseHtml, route);

  if (route.path === '/') {
    writeFileSync(indexFile, routeHtml);
    return;
  }

  const routeDir = join(buildDir, route.route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), routeHtml);
});
