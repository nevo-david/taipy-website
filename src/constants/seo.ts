import { ROUTE } from './routes';

export const SEO_DATA = {
  INDEX: {
    title: 'Taipy — Build Python Data & AI web applications',
    description:
      'From simple pilots to production-ready web applications in no times. No more compromise on performance, customization, and scalability.',
    pathname: ROUTE.INDEX as string, // /
  },
  ENTERPRISE: {
    title: 'Enterprise | Taipy',
    description:
      'Explore our premium offer and take your business to the next level with Taipy Enterprise Edition!',
    pathname: ROUTE.ENTERPRISE as string, // /enterprise
  },
  PRICING: {
    title: 'License Fees | Taipy',
    description: 'Compare Taipy editions and license fees, or ask for a custom quote!',
    pathname: ROUTE.PRICING as string, // /pricing
  },
  ABOUT_US: {
    title: 'About Us | Taipy',
    description:
      'Join us on our journey and meet the team behind Taipy, an open-source Data and AI app builder!',
    pathname: ROUTE.ABOUT_US as string, // /about-us
  },
  BLOG: {
    title: 'Our Blog | Taipy',
    description:
      'Explore all the tutorials, articles, videos, and experiments made by Taipy team or Taipy community',
    pathname: ROUTE.BLOG as string, // /blog
  },
};
