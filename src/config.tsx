import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { About } from "./pages/about";
import { Experiences } from "./pages/experiences";
import { Educations } from "./pages/educations";

interface Config {
    email: string;
    socialMedia: {
        name: string;
        url: string;
        iconComponent: () => JSX.Element;
        tooltip?: string
    }[];
    defaultRoute: string;
    navItems: {
        text: string;
        path: string;
        element: JSX.Element;
    }[];
    experiences: {
        position: string;
        company: string;
        start: string;
        end?: string;
        location: string;
        achievements: string[];
        skills: string[];
    }[];
    educations: {
        diploma: string;
        location: string;
        start: string;
        end: string;
        logoFile: string;
        siteLink: string;
    }[];
}

export const config: Config = {
    email: 'julienblacas@gmail.com',
    socialMedia: [
        {
            name: 'MailOutlined',
            url: 'mailto:julienblacas@gmail.com?subject=Prise de contact&body=Votre message ici',
            iconComponent: () => <MailOutlined />,
            tooltip: "E-mail"
        },
        {
            name: 'GitHub',
            url: 'https://github.com/jblacas',
            iconComponent: () => <GithubOutlined />,
            tooltip: "Github"
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/julienblacas',
            iconComponent: () => <LinkedinOutlined />,
            tooltip: "Linkedin"
        },
    ],
    defaultRoute: 'about',
    navItems: [
        {
            text: "About",
            path: "about",
            element: <About />
        },
        {
            text: "Experience",
            path: "experience",
            element: <Experiences />
        },
        {
            text: "Education",
            path: "education",
            element: <Educations />
        }
    ],
    experiences: [
        {
            position: "Senior Software Engineer",
            company: "ContentSquare",
            start: "June, 2022",
            end: "now",
            location: "Paris - full-remote",
            achievements: [
                "Developed features for a DXP (digital experience platform)",
                "Worked with micro-frontend architecture and module federation",
                "Contributed web components to multiple micro-frontend",
                "Migrated legacy angular components to stencilJS"
            ],
            skills: ["NestJS", "Vue.js", "Angular", "StencilJS", "Web component", "TypeScript"]
        },
        {
            position: "Senior Frontend Engineer",
            company: "Symphony Communications",
            start: "Apr, 2020",
            end: "May, 2022",
            location: "Valbonne, Provence-Alpes-Côte d'Azur, France",
            achievements: [
                "Developed and maintained a financial tool to improve RFQ workflows via chatbots",
                "Contributed to an ETL platform to automate recurring user tasks",
                "Improved an alerting feature on the chat platform ( mentions, hashtags, cashtags )",
                "Contributed to a intercommunication bridge between Symphony and Finsemble using FDC3 protocol",
                "Coordinated front-end development activities with PMs",
                "Contributed to TypeScript migration",
                "Enhanced CircleCi pipeline ( Snyk, e2e tests, deployment )"
            ],
            skills: ["React.js", "Redux", "OpenAPI", "CircleCI", "Finsemble", "FDC3", "TypeScript"]
        },
        {
            position: "Fullstack JavaScript Developer",
            company: "GridPocket",
            start: "Feb, 2019",
            end: "Mar, 2020",
            location: "Sophia-Antipolis, France",
            achievements: [
                "Coded a website for famous energy utilities using MEAN stack with 35k+ users. (smart-meters, consumptions..)",
                "Participated in migrating legacy frontend architecture to component-based architecture (Angular 8)",
                "Ensured cross-platform compatibility for mobile phones",
                "Designed efficient database schemas",
                "Enhanced code process and ease of reuse",
                "Implemented security measures and controls. (CSP, XSS prevention..)",
                "Managed software provisioning, configuration management, and application-deployment process with Ansible",
            ],
            skills: [
                "MongoDB", "Babel.js", "D3.js", "Sass", "CircleCI", "Angular", "Node.js", "Ansible", "Docker", "Express.js"
            ],
        },
        {
            position: "Junior Frontend Developer & Security engineer",
            company: "SAP Labs France",
            start: "Sept. 2015",
            end: "Dec. 2018",
            location: "Mougins, France",
            achievements: [
                "Developed a gamified learning platform for cybersecurity enthusiasts called 'Capture The Flag Platform'",
                "Organised gamified events (Capture the flag, hacking sessions) to improve security skills and awareness within company",
                "Produced security trainings & data protection and privacy awareness content (Videos, curriculum & courses, online trainings)",
                "Social media analysis for security : crawling twitter to find security disclosures about software vulnerabilities, zero-day, CVE, exploits, patches",
            ],
            skills: [
                "Npm", "E-learning", "MongoDB", "Node.js", "AngularJS", "Git", "Express.js", "Gulp.js"
            ],
        },
        {
            position: "Support Developer",
            company: "SAP Labs France",
            start: "Oct. 2014",
            end: "Sep. 2015",
            location: "Mougins, France",
            achievements: [
                "Developped dashboards for real-time monitoring",
                "Trigger alerts according to thresholds",
                "Corrected and fixed bugs for the operational control center (JAVA/ABAP/SAPUI5)",
                "Scripted functional test cases with Selenium (Selenium IDE)",
                "Enhanced the clone procedure (Scripting table updates in ABAP)",

            ],
            skills: [],
        }
    ],
    educations: [
        {
            diploma: "Master M2 MIAGE NTDP",
            location: "Université Côte d'Azur",
            start: "2014",
            end: "2015",
            logoFile: "universite-cote-azur.jpeg",
            siteLink: "https://univ-cotedazur.fr/formation/offre-de-formation/parcours-methodes-informatiques-appliquees-a-linnovation-et-transformation-numerique-de-lentreprise-intense",
        },
        {
            diploma: "Master M1 MIAGE",
            location: "Université Côte d'Azur",
            start: "2013",
            end: "2014",
            logoFile: "universite-cote-azur.jpeg",
            siteLink: "https://univ-cotedazur.fr/formation/offre-de-formation/parcours-methodes-informatiques-appliquees-a-linnovation-et-transformation-numerique-de-lentreprise-intense",
        },
        {
            diploma: "Licence L3 MIAGE, Management informatique",
            location: "Université Côte d'Azur",
            start: "2012",
            end: "2013",
            logoFile: "universite-cote-azur.jpeg",
            siteLink: "https://univ-cotedazur.fr/formation/offre-de-formation/parcours-methodes-informatiques-appliquees-a-linnovation-et-transformation-numerique-de-lentreprise-intense",
        },
        {
            diploma: "DUT Réseaux et télécommunication",
            location: "Université Côte d'Azur",
            start: "2010",
            end: "2012",
            logoFile: "universite-cote-azur.jpeg",
            siteLink: "https://iut.univ-cotedazur.fr/departements-et-formations/reseaux-et-telecommunications",
        },
        {
            diploma: "Baccalauréat scientifique",
            location: "Lycee Francais de Saint Domingue",
            start: "2010",
            end: "2012",
            logoFile: "lfsd.jpeg",
            siteLink: "https://lfsd.edu.do/"
        },
    ]
};