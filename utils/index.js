import React from "react";

export const Routes = [
  {
    title: "Home",
    route: "#home",
    id: "home"
  },
  {
    title: "Portfolio",
    route: "#portfolio",
    id: "portfolio",
    subTitle: "Each project is a unique piece of development"
  },
  {
    title: "About Me",
    route: "#about",
    id: "about",
    subTitle: "A passionate Front-End Developer based in"
  },
  /*{
    title: "Work Process",
    route: "#work-process",
    id: "work-process",
    textToUseForSubTitleSection: "Using the right tools with a well structured process leads to the collaboration’s success"
  },*/
  {
    title: "Work History",
    route: "#work-history",
    id: "work-history",
    subTitle: "Working Period"
  },
  {
    title: "Skills",
    route: "#skills",
    id: "skills"
  },
  {
    title: "Contact",
    route: "#contact",
    id: "contact",
    subTitle: "Let’s create something amazing together"
  }
];

export const SkillsList = [
  {
    label: "React.js",
    url: "skills/reactjs.svg"
  },
  {
    label: "Next.js",
    url: "skills/nextjs-black.svg"
  },
  {
    label: "Redux",
    url: "skills/redux.svg"
  },
  {
    label: "Material-UI",
    url: "skills/material-ui.svg"
  },
  {
    label: "Bootstrap",
    url: "skills/bootstrap.svg"
  },
  {
    label: "Tailwind CSS",
    url: "skills/tailwindcss-short.svg"
  },
  {
    label: "HTML5",
    url: "skills/html-5.svg"
  },
  {
    label: "SCSS/SASS",
    url: "skills/sass.svg"
  },
  {
    label: "Javascript",
    url: "skills/javascript.svg"
  },
  {
    label: "Typescript",
    url: "skills/typescript.svg"
  },
  {
    label: "Progressive Web App",
    url: "skills/pwa.svg"
  },
  {
    label: "Graphql",
    url: "skills/graphql.svg",
    hidden: true
  },
  {
    label: "API Integration",
    url: "skills/api.svg"
  },
  {
    label: "Google Maps Integration",
    url: "skills/google-maps.svg"
  },
  {
    label: "Stripe Payments Integration",
    url: "skills/stripe.svg"
  },
  {
    label: "AWS",
    url: "skills/aws.svg"
  },
  {
    label: "Figma",
    url: "skills/figma.svg"
  }
].filter(d => !d?.hidden);

const getUUID = () => {
  let dt = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

export const ProjectsList = [
  {
    id: 1,
    project_name: "Paid",
    type: "Web",
    description: `<p>- Worked as a Web developer on e-Commerce and User Payment platform with the Business teams on
aligning business requirements with technical ones.</p>
<p>- Created reusable Front end responsive UI components with a mobile-first approach.</p>
<p>- Translated designs and wireframes into quality code.</p>
<p>- Developed large Dynamic UI forms to and from API data using Redux Form library.</p>
<p>- Implemented some Node.js base Rest APIs.</p>`,
    tags: ["Front-End Development", "Responsive Design", "Mockup", "React.js", "Redux", "Bootstrap", "Reactstrap", "HTML", "CSS",
      "SCSS", "Javascript", "Stripe Payments Integration", "RESTful API Integration", "Duda", "Google Maps Autocomplete",
      "Google Analytics", "Axios", "Chart.js"],
    project_url: "https://paid.com/",
    images: [
      "paid/PaidCart+Store+Setup.webp",
      "paid/Add+Product1.webp",
      "paid/Paid-Payments-dashboard.webp",
      "paid/payments-customized1.webp",
      "paid/Create-Invoices-Quickly.webp",
      "paid/recurring-billing-for-repeat-customers1.webp",
      "paid/PaidWeb-SitesList.webp",
      "paid/Template1.webp"
    ]
  },
  {
    id: 2,
    project_name: "Sentient",
    type: "Web",
    description: `<p>- Developed "Sentient", an In-house Front-end web app, to analyze, compare multiple Android Applications
based on Play store Reviews Ratings, Downloads, etc using NLP-based Rest APIs.</p>
<p>- Implemented Typeahead Search of Apps, Charts (PIE, BAR), and Word Cloud on the basis of Rest APIs.</p>
<p>- Designed and developed Front end responsive UI components with a mobile-first approach using Material-UI.</p>`,
    tags: ["Front-End Development", "Responsive Design", "React.js", "Redux", "Material-UI", "HTML", "CSS", "SCSS",
      "Javascript", "RESTful API Integration", "Axios", "Recharts", "Chart.js", "PDF.js"],
    project_url: "https://www.sentient-app.tech/",
    note: "Client has moved web app to their personal server as a result Login will not work",
    images:
      [
        "sentient/Sentient-Landing-page1.webp",
        "sentient/Sentient-Landing-page2.webp",
        "sentient/Sentient+Dashboard.webp",
        "sentient/Sentient-App-Pros-Cons.webp",
        "sentient/Sentient-Product-Details-Modal.webp",
        "sentient/Sentient-Dashboard-mobile.webp",
        "sentient/Sentient-Pros-Cons-mobile.webp"
      ]
  },
  {
    id: 3,
    project_name: "Luxembourg Expats",
    type: "Web",
    description: `<p>- Developed an online marketplace for "Luxembourg Expats", To connect with Local Businesses, 
Real- estate (Buy/Sell/Rent) services, Events, Meet People, Request Offer, Typeahead searches, and Chat with Emojis.</p>
<p>- Designed and developed Front end responsive UI components from scratch.</p>
<p>- Used React.js and Next.js framework and implemented Server Side Rendered (SSR) and Static Site Generated (SSG) 
pages and integrated RESTful APIs.</p>
<p>- Implemented Chat system on the client-side using Socket-io.</p>
<p>- Integrated Stripe for Payment and maintained User Subscriptions, Google Tag Manager (GTM) to log
specific Page Views and Events and Mixpanel events to track user interactions with a web application.</p>
<p>- Implemented Admin Panel to manager Users and Other Front Site Listings for Super Admin.</p>`,
    tags: ["Front-End Development", "Responsive Design", "React.js", "Next.js", "Redux", "Material-UI", "HTML", "CSS",
      "SCSS", "Javascript", "Stripe Payments Integration", "RESTful API Integration", "Google Maps with Places and Autocomplete",
      "Google Analytics", "Mix Panel", "Google and Facebook Login", "Axios"],
    project_url: "https://www.luxembourgexpats.lu/",
    images:
      [
        "luxexpats/Add+New+Post+Modal+new.webp",
        "luxexpats/Real-Estate-in-Luxembourg-new.webp",
        "luxexpats/Real-Estate-Details-Page1.webp",
        "luxexpats/Real-Estate-Details-Page2.webp",
        "luxexpats/Real-Estate-Payment-new.webp",
        "luxexpats/Users+Chat1.webp"
      ]
  },
  {
    id: 4,
    project_name: "Pinegray",
    type: "Web",
    description: `<p>- Developed a Fintech Platform named "Pinegray Investments", an Investment Marketplace to raise
money online and help businesses grow through equity crowdfunding.</p>
<p>- Implemented Typeahead Search, CapTable, Manage Access to Invite people to check deals for
funding, Investment Interest for both Owner and Invited User on deals.</p>
<p>- Designed and developed Front end responsive UI components with a mobile-first approach.</p>
<p>- Used React.js and Next.js framework and implemented Server Side Rendered (SSR) and Static Site Generated (SSG) 
pages and integrated RESTful APIs.</p>`,
    tags: ["Front-End Development", "Responsive Design", "React.js", "Next.js", "Redux", "Material-UI", "HTML", "CSS",
      "SCSS", "Javascript", "Stripe Payments Integration", "RESTful API Integration", "Google Maps with Places and Autocomplete", "Axios"],
    note: "URL/Screen Shots can't be disclose due to NDA"
  },
  {
    id: 5,
    project_name: "Waterboy Rentals",
    type: "Web",
    description: `<p>- Worked as a Freelance Frontend developer, Developed an online platform for "Golf Cart and Surf
Board Rentals" website.</p>
<p>- Created Front end responsive UI components with a mobile-first approach.</p>
<p>- Maintained Cart items and Integrated Stripe for payments.</p>
<p>- Designed pages from the given layout.</p>`,
    tags: ["Front-End Development", "Responsive Design", "React.js", "Redux", "Bootstrap", "HTML", "CSS", "SCSS",
      "Javascript", "API Integration", "Stripe Payments", "Axios"],
    project_url: "https://waterboyrentals.com/",
    images:
      [
        "waterboy/Home.webp",
        "waterboy/Booking.webp",
        "waterboy/faqs.webp"
      ]
  },
  {
    id: 6,
    project_name: "Resume Maker, CV Builder",
    type: "Android App",
    description: `<p>- Worked as an Android Application Developer.</p>
<p>- Developed core features for the mobile app and database wrapper functions for data staging.</p>
<p>- Integrated Back end APIs, Background Services, Map integration, and third-party SDKs.</p>
<p>- Application Maintenance.</p>`,
    tags: ["Mobile App Development", "Java", "Android", "RESTful API Integration"],
    project_url: "https://bit.ly/3q8BIqK"
  }
].filter(d => !d?.hidden);