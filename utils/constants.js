export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
export const SEND_GRID_API_KEY = process.env.NEXT_PUBLIC_SEND_GRID_API_KEY;
export const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
export const MY_DOMAIN = process.env.NEXT_PUBLIC_MY_DOMAIN;
export const MY_NAME = "Shahid Farooqui";
export const MY_SHORT_NAME = "Shahid F.";
export const IMAGES_BUCKET_URL = "https://shahid-portfolio-bucket.s3.ap-south-1.amazonaws.com/";
export const MY_PHOTO = `${IMAGES_BUCKET_URL}shahid-farooqui.webp`;
export const MY_PREVIEW_PHOTO = `${IMAGES_BUCKET_URL}sf-preview.jpg`;
export const MY_FULL_NAME_PHOTO = `${IMAGES_BUCKET_URL}my_full_name.webp`;
export const MY_SHORT_NAME_PHOTO = `${IMAGES_BUCKET_URL}my_short_name.webp`;
export const COUNTRY = "INDIA";
export const PHONE_NUMBER_NON_PADDED = "+918734036369";
export const PHONE_NUMBER = "+91 87 340 36 36 9";
export const EMAIL_ID = "sf2288@gmail.com";
export const SUBJECT = "ShahidFarooqui.uk | You have a new requirement from";
export const LATITUDE = "21.1702";
export const LONGITUDE = "72.8311";
export const TWITTER_HANDLE = "@js_shahidf";

export const META_TITLE = "Shahid Farooqui | Freelance Front-End Developer | London | UK | India";
export const META_DESCRIPTION = `Freelance Front-End Developer, Software Developer from SURAT, INDIA. Skilled in developing 
Single Page Apps, Responsive web apps using modern frontend technologies like React.js, Next.js, Redux, Hooks, Bootstrap,
 Material-UI, Progressive Web App (PWA), HTML, CSS, SCSS, Javascript, Typescript, RESTful and Third-party API Integration, etc. and best practices`;

export const META_KEYWORD = `Freelance, Freelancer, Web development, Front-End Developer, Js developer, how to develop a website,
 web developer near me, frontend developer near me, I want to build a website, React js developer needed, e-commerce, fintech,
  marketplace site development, Redesign, Rebuild website, Payments gateway integration, Shahid F., Shahid Farooqui Linkedin, 
  Upwork, Truelancer, Dev, Software Developer, Portfolio, React.js, Next.js, Redux, React Hooks, Bootstrap, Material-UI, mui,
 Progressive Web App (PWA), HTML, CSS, SCSS, Javascript, Typescript, Node.js, SEO, RESTful, Third-party API Integration, Stripe, Google Maps, CMS, 
 Landing Page Design, Home page design, Single Page Application (SPA), Develop Single Page Website, Figma/Adobe XD or 
 Wireframe/mockups to Responsive page, Contractor, Full time, Part time, Full Stack, London, United Kingdom, Remote,
  Work From Home(WFH), Europe, Germany, Amsterdam, Netherlands, Freelancers, Freelance Front-End Developer in london, uk,
   india, Web Developer in london, freelance web developer london, uk, india, United States, US, Front-End Web Developer in US, anywhere, worldwide, ${MY_DOMAIN}`;

export const CV_URL = "https://drive.google.com/file/d/1s00iR1TnXn_oS4lKyAqe5a063kQxMyZ-/view";

export const BUDGET_LIST = ["Less than $1500", "$1500k - $3k", "$3k - $5k", "$5k - $10k", "More than $10k"];
export const MIN_BUDGET = 1500;
export const INITIAL_VALUE_BUDGET = 5000;
export const MAX_BUDGET = 10000;

export const WORK_HISTORY_DOT_COLOR = ["primary", "success", "warning", "secondary", "info", "grey", "error"];
export const REGEX_ONLY_NUMBERS = /^[0-9+\b]+$/;

export const WORK_HISTORY = [
  {
    id: 1,
    title: "Android Developer",
    company_name: "Optimumbrew Technology",
    from: "Feb, 2018",
    to: "May, 2018"
  },
  {
    id: 2,
    title: "Web Developer",
    company_name: "Webosmotic",
    from: "Nov, 2018",
    to: "Sept, 2020"
  },
  {
    id: 3,
    title: "Front-End Developer",
    company_name: "Freelance",
    from: "October, 2020",
    to: "Present"
  },
  {
    id: 4,
    title: "Front-End Developer (Contractual)",
    company_name: "Startup Europe India Network",
    from: "December, 2020",
    to: "Present"
  }
].reverse();

export const CONTACT_MESSAGE = `Hi ${MY_NAME}! I would like to get in touch with you to inquiry about a project.`;

export const MY_SOCIAL_PROFILES = [
  {
    title: "Upwork",
    url: "https://www.upwork.com/freelancers/~01cb04cb0ac71c8b6f/",
    src: `${IMAGES_BUCKET_URL}upwork.svg`,
    target: "_blank",
    name: "upwork"
  },
  {
    title: "Linkedin",
    url: "https://in.linkedin.com/in/shahid-farooqui/",
    src: `${IMAGES_BUCKET_URL}linkedin.svg`,
    target: "_blank",
    name: "linkedin"
  },
  {
    title: "Github",
    url: "https://github.com/sf2288/",
    src: `${IMAGES_BUCKET_URL}github.svg`,
    target: "_blank",
    name: "github"
  },
  {
    title: "WhatsApp",
    url: `https://wa.me/${PHONE_NUMBER_NON_PADDED}/?text=${CONTACT_MESSAGE}`,
    // url: `tel:${PHONE_NUMBER_NON_PADDED}`,
    src: `${IMAGES_BUCKET_URL}whatsapp.svg`,
    target: "_blank",
    name: "whatsapp"
  }
];