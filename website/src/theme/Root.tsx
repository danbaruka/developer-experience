import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MeetupReminderButton from "@site/src/components/MeetupReminderButton";

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IntersectMBO" />
        <link rel="canonical" href={siteUrl} />
      </Head>
      {children}
      <MeetupReminderButton />
    </>
  );
}
