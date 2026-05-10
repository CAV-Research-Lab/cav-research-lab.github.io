const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let analyticsInitialized = false;
let lastTrackedPath = '';

export function initializeAnalytics() {
  if (!GA_MEASUREMENT_ID || analyticsInitialized || typeof window === 'undefined') {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  analyticsInitialized = true;
}

export function trackPageView(path) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function' || path === lastTrackedPath) {
    return;
  }

  lastTrackedPath = path;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
