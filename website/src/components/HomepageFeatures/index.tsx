import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Guides',
    icon: '📚',
    description: (
      <>
        Step-by-step guides from beginner to advanced, covering everything from
        setting up your development environment to building complex dApps on Cardano.
      </>
    ),
  },
  {
    title: 'Hands-On Learning',
    icon: '🛠️',
    description: (
      <>
        Interactive tutorials and workshops that get you building immediately.
        Learn by doing with real examples and practical exercises.
      </>
    ),
  },
  {
    title: 'Community Driven',
    icon: '🤝',
    description: (
      <>
        Built by the community, for the community. Join our working groups
        and help shape the future of Cardano development.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
