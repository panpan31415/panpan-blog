export type Skill = {
  name: string;
  value: number;
};
export const skills: Skill[] = [
  {
    name: "React",
    value: 95,
  },
  {
    name: "Responsive Design",
    value: 95,
  },
  {
    name: "CSS/SASS",
    value: 95,
  },
  {
    name: "Unit Test",
    value: 95,
  },
  {
    name: "Integration Test",
    value: 95,
  },
  {
    name: "Git/GitHub",
    value: 85,
  },
  {
    name: "Docker",
    value: 65,
  },
  {
    name: "Linux OS Management",
    value: 60,
  },
  {
    name: "React Native",
    value: 60,
  },
  {
    name: "NextJS",
    value: 40,
  },
  {
    name: "StyleX",
    value: 60,
  },
];
export type EducationItem = {
  universityName: string;
  major: string;
  period: string;
  descriptions: string[];
};
export const educations: EducationItem[] = [
  {
    universityName: "Roskilde University",
    major: "M.Sc., Computer And Information Sciences",
    period: "Feb 2015 - Sep 2017",
    descriptions: [
      `Web Development: Successfully built a website hosted on a Debian Linux Server, employing Java for backend operations via CGI and integrating a MySQL database for efficient data management.`,
      `RESTful Web Services: Expertise in developing web services using the RESTful API with tools such as Visual Studio and C#, complemented by robust front-end design utilizing HTML5, Bootstrap, and Knockout.js.`,
      `Data Analysis: Leveraged R to analyze data from my iPhone and Apple Watch, identifying personal habits related to procrastination and gaining insights into time management.`,
    ],
  },
  {
    universityName: "erhvervsakademi sjælland",
    major: "B.Sc., Web Development",
    period: "Sep 2012 - Dec 2014",
    descriptions: [
      `
    Front-end Programming: Proficient in HTML5, CSS3, jQuery, and jQuery Mobile. Experienced in developing hybrid applications.`,
      `
    CMS: Skilled in Drupal 7 and various other content management systems.`,
      `
    Grade average:above 7. `,
      `
    Academic Achievement: Maintained a grade average above 7, reflecting consistent academic excellence.`,
      `
    Scholarship Recipient: Awarded a scholarship in the first semester for demonstrating potential and excellence in technology and web development.`,
    ],
  },
  {
    universityName: "erhvervsakademi sjælland",
    major: "A.P., Computer Science",
    period: "Sep 2009 - Jun 2012",
    descriptions: [
      `Software Development and Design: Focused expertise in Java and MySQL, underpinning strong back-end development and database management skills.`,
      `
    Networking: Comprehensive understanding and application of networking principles, enhancing system connectivity and communication. `,
      `
    Scholarship Recipient: Awarded a scholarship in the third semester due to outstanding academic performance.`,
    ],
  },
];

export type ExperienceItem = {
  logoImageUrl: string;
  logoBackgroundColor: string;
  imageAlt: string;
  position: string;
  companyName: string;
  period: string;
  descriptions: string[];
};
export const experiences: ExperienceItem[] = [
  {
    logoImageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=256,fit=crop,q=95/mnlZMRpVlQHPzDKR/logo-2-m7V2zxMzW7SXkjwJ.PNG",
    imageAlt: "Nordic Cubee Aps logo",
    logoBackgroundColor: "#fff",
    position: "React Native Developer",
    companyName: "Nordic Cubee Aps",
    period: "Jan 2022 - Current",
    descriptions: [
      `Collaborated with product owner to select ambitious, but realistic coding milestones on pre-release software project development. `,
      ` Collaborated on stages of systems.`,
    ],
  },
  {
    logoImageUrl:
      "https://static1.squarespace.com/static/5f215ab150bec52030447111/t/60cccd0be0529c4c668475fa/1624034571565/ms_logo-vertical-white%401x.png",
    logoBackgroundColor: "#10c9c8",
    imageAlt: "Motosumo Aps logo",
    position: "Frontend Developer",
    companyName: "Motosumo Aps",
    period: "Nov 2018 - May 2021",
    descriptions: [
      `Build and maintain the product “Group Display”, “Self-Service-Portal”.`,
      ` Build part our ReactNative App Motosumo Unit test with StoryBook for all react components
    Cypress test for all our web products`,
    ],
  },
  {
    logoImageUrl: "https://optumce.com/wp-content/uploads/2016/01/optumce-logo-white.png",
    imageAlt: "OptumCE Aps logo",
    logoBackgroundColor: "rgb(56,56,56)",
    position: "Frontend Developer",
    companyName: "Optum CE Aps",
    period: "Feb 2018 - May 2018",
    descriptions: [
      `Constructed a website for a project called StoreBaelt, the task covered webpage design and implementation.`,
      `
    Made a Monitoring system to track company's product and user. The project was developed in React.js .`,
    ],
  },
];
