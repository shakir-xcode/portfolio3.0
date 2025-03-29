import mock0 from "@/public/projects/mock0.webp";
import mock1 from "@/public/projects/mock1.webp";
import mock2 from "@/public/projects/mock2.webp";
import mock3 from "@/public/projects/mock3.webp";
import mock4 from "@/public/projects/mock4.webp";
import mock5 from "@/public/projects/mock5.webp";
import mock6 from "@/public/projects/mock6.webp";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: any;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 0,
    title: "Styled-Invoice",
    category: "Web Application",
    description:
      "Styled-Invoice is a user-friendly invoice generator that helps businesses and freelancers create professional invoices.",
    fullDescription:
      "Styled-Invoice is a user-friendly invoice generator that helps businesses and freelancers create professional invoices effortlessly. Customize details, add taxes, discounts, and terms, and generate invoices in seconds. Keep track of payments, download PDFs, and streamline your billing process with ease.",
    features: [
      "Create professional invoices quickly",
      "Add multiple products/services with rates and quantities",
      "Automatic calculation of subtotal, tax, discount, and total amount",
      "Generate and download invoices as PDFs",
      "Supports multiple currencies",
      "User-friendly and responsive design",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwindcss",
      "Next.js",
    ],
    liveUrl: "https://styled-invoice.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
    githubUrl: "https://github.com/shakir-xcode/invoice-generator", // this should be a link to the **repository** of the project, where the code is hosted.
    image: mock0,
  },
  {
    id: 1,
    title: "Global Talk",
    category: "Api Integration",
    description:
      "An instant messaging application supporting realtime message translation.",
    fullDescription:
      "An instant messaging application that lets people from across the world communicate in their native language. The app lets people who don't share a common language communicate fluently in their native languages.",
    features: [
      "The app uses Google Translation API for real-time message translation",
      "The app supports over 130 languages",
      "Socket.io for real-time communication",
      "Screen sharing, Video and Voice calling implemented using webRTC",
      "JWT Authentication",
      "ExpressJS APIs and mongoDB as database",
      "Includes a Chabot using openAI API integration",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwindcss",
      "Node.js",
      "Express.js",
      "MongoDb",
    ],
    liveUrl: "https://global-talk.netlify.app/",
    githubUrl: "https://github.com/shakir-xcode/GlobalTalk-client",
    image: mock1,
  },
  {
    id: 2,
    title: "MoviesHub",
    category: "Web Design",
    description:
      "MoviesHub is a platform that allows us to browse and discover movies.",
    fullDescription:
      "MoviesHub is a platform that allows us to browse and discover movies from various genres. it provides detailed information about each movie including plot summaries, release date, rating etc.",
    features: [
      " Search functionality",
      "Favorite movies using local storage",
      "Detailed movie information",
      "Easy to use and intuitive interface",
      "Utilizes OMDb api",
      "Powered by redux",
    ],
    technologies: [
      "  HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Redux",
      "Tailwindcss",
      "Axios",
      "React-router",
      "Node.js",
      "Express.js",
    ],
    liveUrl: "https://movieshub08.netlify.app/",
    githubUrl: "https://github.com/shakir-xcode/movies-app",
    image: mock2,
  },
  {
    id: 3,
    title: "Tour and Travel Website",
    category: "Web Design",
    description:
      "A comprehensive multi-page website for a tour and travel agency, showcasing a range of tour packages, hotels, and cab services.",
    fullDescription: `<i>This project was developed during my internship at <b>Mir Web Solutions</b></i><br><br>Developed a comprehensive multi-page website for a tour and travel agency, showcasing a range of tour packages, hotels, and cab services. Key features included an optimized image gallery and a responsive design that provided seamless navigation across devices.
<br><br>
<b>My Role:</b> Full front-end development using WordPress and Elementor, integrating dynamic content sections for packages, hotels, and services, and optimizing the contact form for user inquiries.`,
    features: [
      "Responsive and visually appealing interface",
      "Scroll animations",
      "Integrated Google Maps",
      "Booking Inquiry Form",
      "Designed with mobile-first approach",
    ],
    technologies: ["HTML", "CSS", "Wordpress", "Elementor"],
    liveUrl: "https://cipellatours.in",
    githubUrl: "#",
    image: mock3,
  },
  //   {
  //     id: 4,
  //     title: "Landing Page",
  //     category: "Web Design",
  //     description:
  //       "Designed and developed a visually appealing single landing page for a tour and travel agency.",
  //     fullDescription: `<i>This project was developed during my internship at <b>Mir Web Solutions</b></i><br><br><b>Project Overview:</b> Designed and developed a visually appealing single landing page for a tour and travel agency. The page highlighted various tour packages, focusing on user-friendly navigation and an intuitive layout to enhance user engagement.<br><br>
  // <b>My Role:</b> Front-end development using WordPress and Elementor, including the creation of custom sections for showcasing packages and integrating a contact form for user inquiries.`,
  //     features: [
  //       "Responsive and visually appealing interface",
  //       "Scroll animations",
  //       "Designed with mobile-first approach",
  //     ],
  //     technologies: ["HTML", "CSS", "Wordpress", "Elementor"],
  //     liveUrl: "https://kashmir.threeregion.com/",
  //     githubUrl: "#",
  //     image: mock4,
  //   },
  {
    id: 5,
    title: "Tesla Clone",
    category: "UI/UX Design",
    description:
      "Tesla clone app to recreate the visually attractive and user-friendly homepage.",
    fullDescription:
      "I created Tesla clone app to recreate the visually attractive and user-friendly homepage of Tesla's official website.",
    features: [
      "Responsive design",
      "Navigation menu",
      "  Simple and intuitive interface",
    ],
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Tailwindcss"],
    liveUrl: "https://tesla-clone08.netlify.app/",
    githubUrl: "https://github.com/shakir-xcode/tesla-clone",
    image: mock5,
  },
  {
    id: 6,
    title: "Code Editor",
    category: "Web Application",
    description:
      "A minimalist code editor that can be used to run, test and visualize ui.",
    fullDescription:
      "A minimalist code editor that can be used to run, test and visualize html, css and javascript code.",
    features: [
      "Powered by React.js",
      "Fast and light weight",
      "Uses localStorage to save code",
      "Supports HTML, CSS and Javascript",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwindcss",
      "Codemirror",
    ],
    liveUrl: "https://code-editor08.netlify.app/",
    githubUrl: "https://github.com/shakir-xcode/code-editor",
    image: mock6,
  },
];
