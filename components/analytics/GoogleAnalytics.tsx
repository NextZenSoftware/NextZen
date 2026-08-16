"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-1Z270ZXVQ7";

export function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - Loaded in head section as recommended by Google */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script 
        id="google-analytics-init" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

