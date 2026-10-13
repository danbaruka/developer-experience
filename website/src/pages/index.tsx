import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CommunitySection from '@site/src/components/CommunitySection';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Join the Developer Experience Working Group at Intersect MBO. Connect with developer advocates, access comprehensive Cardano resources, and participate in community-driven initiatives to enhance the developer ecosystem.">
      <main>
        <HomepageFeatures />
        <CommunitySection />
      </main>
    </Layout>
  );
}
