import { UsesType } from '../models/uses.model';
export const uses: UsesType[] = [
  {
    name: '💻 Software',
    items: [
      {
        name: 'iTerm2 with zsh',
        link: 'https://iterm2.com/',
        description: 'Boosts productivity as compared to the default terminal!',
      },
      {
        name: 'Sublime Text 2',
        link: 'https://www.sublimetext.com/2',
      },
      {
        name: 'Visual Studio Code',
        description:
          'better IDE for openning big data like logs or JSON files.',
      },
    ],
  },
  {
    name: '✍🏽 Scripting',
    items: [
      {
        name: 'Bash',
        description: 'scripting language to automate tasks',
      },
      {
        name: 'Python',
        description: 'for Selenium projects',
      },
    ],
  },
  {
    name: '🌍 Operating System',
    items: [
      {
        name: 'Linux',
        link: 'https://www.linux.org/',
        description: 'OS used on cloud instances',
      },
      {
        name: 'MacOS',
        link: 'https://en.wikipedia.org/wiki/MacOS',
        description: 'OS to connect to Linux servers via SSH',
      },
    ],
  },
  {
    name: '🌩 Cloud provider',
    items: [
      {
        name: 'Amazon Web Services (AWS)',
        link: 'https://aws.amazon.com/',
        description: 'most familiar with and preferred Cloud provider',
      },
      {
        name: 'Google Cloud Platform',
        link: 'https://cloud.google.com/',
        description: 'used for Kubernetes services',
      },
    ],
  },
  {
    name: '☁ Web Server',
    items: [
      {
        name: 'NGINX',
        description: 'most used web server',
      },
      {
        name: 'Apache',
        description: 'used to maintain legacy websites',
      },
      {
        name: 'Traefik Proxy',
        description:
          'lightweight application that can be used as reverse proxy',
      },
    ],
  },
  {
    name: '📦 Containers',
    items: [
      {
        name: 'Docker',
        description: 'for packaging application into containers',
      },
    ],
  },
  {
    name: '💼 Container Orchestration',
    items: [
      {
        name: 'Kubernetes',
        link: 'https://kubernetes.io/',
      },
      {
        name: 'Docker Swarm',
        link: 'https://docs.docker.com/get-started/swarm-deploy/',
      },
    ],
  },
  {
    name: '⚙️ Configuration Management',
    items: [
      {
        name: 'Chef',
        link: 'https://aws.amazon.com/opsworks/chefautomate/',
        description:
          'to automate infrastructure configuration using AWS Opsworks',
      },
    ],
  },
  {
    name: '🕸 Service Mesh',
    items: [
      {
        name: 'Istio',
        link: 'https://istio.io/',
        description:
          'recommended for applying on a cluster because of secure service-to-service communication',
      },
    ],
  },
  {
    name: '⌨️ Version Control',
    items: [
      {
        name: 'GitHub',
        link: 'https://github.com/',
        description: 'used as placeholder for personal scripts',
      },
      {
        name: 'Atlassian Bitbucket',
        link: 'https://bitbucket.org/product',
        description:
          'maintains scripts, config and data. Preferred rather than GitHub.',
      },
    ],
  },
  {
    name: '🔍 CI/CD',
    items: [
      {
        name: 'Atlassian Bamboo',
        link: 'https://www.atlassian.com/software/bamboo',
        description: 'easy to use and configure',
      },
      {
        name: 'Spinnaker',
        description: 'used on GCP for creating Pipelines',
      },
      {
        name: 'AWS CodeBuild',
        link: 'https://aws.amazon.com/codebuild/',
      },
      {
        name: 'AWS Code Deploy',
        link: 'https://aws.amazon.com/codedeploy/',
      },
      {
        name: 'AWS CodePipeline',
        link: 'https://aws.amazon.com/codepipeline/',
      },
    ],
  },
  {
    name: '🚨 Monitoring, Alerting and Logging',
    items: [
      {
        name: 'AWS Cloudwatch',
        link: 'https://aws.amazon.com/cloudwatch/',
        description:
          'configurable metrics and alerting. Recommended monitoring and alerting for AWS products.',
      },
      {
        name: 'Google Operations',
        link: 'https://cloud.google.com/products/operations',
        description:
          'used to track Kubernetes and Google Cloud Platform HTTP requests',
      },
      {
        name: 'TICK Stack (Telegraf, InfluxDB, Chronograf, Kapacitor)',
      },
      {
        name: 'Prometheus and Grafana',
        link: 'https://prometheus.io/docs/visualization/grafana/',
        description: 'monitoring for Kubernetes',
      },
      {
        name: 'Dynatrace',
        description: 'awesome monitoring but pricey. Used before for POC.',
      },
    ],
  },
  {
    name: '📜 SSL Certificate',
    items: [
      {
        name: 'Let’s Encrypt',
        description:
          'used to create free certificates on non-production environments',
      },
    ],
  },
];
