export default {
  contact: {
    pronouns: "He/Him/His",
    phone: "(619) 208-8943",
    email: "bencalabrese@gmail.com",
    location: "San Mateo, CA",
    links: [
      {
        name: "Github",
        icon: "github.svg",
        url: "https://github.com/bencalabrese",
      },
      {
        name: "LinkedIn",
        icon: "linkedin.svg",
        url: "https://www.linkedin.com/in/bcalabrese/",
      },
    ],
  },
  skills: [
    { name: "TypeScript", icon: "skill_icons/typescript.svg", skillLevel: 4 },
    { name: "React", icon: "skill_icons/react.svg", skillLevel: 4 },
    { name: "JavaScript", icon: "skill_icons/javascript.svg", skillLevel: 4 },
    { name: "CSS", icon: "skill_icons/css3.svg", skillLevel: 4 },
    { name: "CI/CD", icon: "skill_icons/ci_cd.svg", skillLevel: 4 },
    { name: "Testing", icon: "skill_icons/testing_v2.svg", skillLevel: 4 },
    {
      name: "TV Dev",
      icon: "skill_icons/tv_dev.svg",
      skillLevel: 4,
    },
    { name: "HTML", icon: "skill_icons/html5.svg", skillLevel: 4 },
    { name: "Dart", icon: "skill_icons/dart.svg", skillLevel: 4 },
    { name: "Sass", icon: "skill_icons/sass.svg", skillLevel: 4 },
    { name: "Git", icon: "skill_icons/git.svg", skillLevel: 3 },
    { name: "SQL", icon: "skill_icons/sql.svg", skillLevel: 3 },
    { name: "Ruby", icon: "skill_icons/ruby.svg", skillLevel: 2 },
    { name: "Rails", icon: "skill_icons/rails.svg", skillLevel: 2 },
    { name: "Python", icon: "skill_icons/python.svg", skillLevel: 2 },
    { name: "AWS", icon: "skill_icons/aws.svg", skillLevel: 2 },
  ],
  experiences: [
    {
      name: "Dropbox",
      descriptors: ["Senior Software Engineer", "Sept. 2021–Present"],
      bullets: [
        "Led org's UX quality team, founding it's core component " +
          "library, establishing audit/testing strategies, and driving " +
          "innovation of high polish UX",
        "Engaged in research and experimentation on behalf of company's " +
          "president, resulting in grant of 4 patents (with 3 more pending)",
        "Fostered world class FE development at Dropbox as member of JS Guild " +
          "Summit planning committee and sole engineer on group of 23 DIG " +
          "Champions (Dropbox's design system)",
        "Founding engineer of the Dropbox Design Strategy team, defining " +
          "3–5 year company goals adopted by the CEO and board",
      ],
      collapsedBullets: [],
      img: "dropbox.svg",
    },
    {
      name: "YouTube",
      descriptors: ["Senior Software Engineer", "July 2019–Sept. 2021"],
      bullets: [
        "Tech lead of the YouTube Kids smart TV app, setting its technical " +
          "direction, collaborating with PM/UX, and mentoring more junior " +
          "engineers",
        "Expanded reach by millions of DAUs, including launches on Apple TV, " +
          "Fire TV, and Virgin Media",
        "Drove cross-YouTube projects such as supporting Lottie animations " +
          "on living room devices",
        "Shepherded Google wide code health as author of best practices on " +
          "screenshot testing and as one of ~40 engineers on the " +
          "Dart readability team",
      ],
      collapsedBullets: [],
      img: "youtube.svg",
    },
    {
      name: "Google",
      descriptors: ["Software Engineer", "Sept. 2016–July 2019"],
      bullets: [
        "Led frontend development on key aspects of Connect Sales, Google's custom CRM, " +
          "including integration with the support ticket system",
        "Co-owner of custom configuration language used to power all tables, " +
          "forms, and charts in Google Ads and Connect Sales",
      ],
      collapsedBullets: [],
      img: "google.svg",
    },
  ],
  projects: [
    {
      name: "Resume",
      links: [
        { name: "Live", url: "http://bencalabrese.com/resume" },
        {
          name: "GitHub",
          url: "https://github.com/bencalabrese/resume_template",
        },
      ],
      descriptors: ["You're reading it!"],
      collapsedBullets: [
        "Animations for the web while still styled for print",
        "For fun, it's mostly hand rolled rather than using a framework. " +
          "Just TS, Sass, and some Handlebars templating.",
        "Some pretty interesting CSS animations. I used transforms with " +
          "hidden overflow borders to give the appearance of expanding since " +
          "reflow properties like height don't animate smoothly.",
      ],
      video: "resume.webm",
    },
    {
      name: "Constellations",
      links: [
        { name: "Live", url: "http://bencalabrese.com/Constellations/" },
        {
          name: "GitHub",
          url: "https://github.com/bencalabrese/Constellations",
        },
      ],
      descriptors: ["Conway's Game of Life simulator"],
      collapsedBullets: [
        "Pure JavaScript game written at App Academy",
        "HTML5 canvas rendering with controls for pan, zoom, and cycle speed",
        "Pans infinitely (Theoretically at least. It'll overflow eventually " +
          "but it would take a while.)",
        "Added my own wrinkle of letting users add new dots to the board " +
          "mid-animation",
      ],
      video: "constellations.webm",
    },
    {
      name: "PickupTix",
      links: [
        { name: "Live", url: "https://pickup-tix.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/bencalabrese/pickup_tix/" },
      ],
      descriptors: ["Rails/React event ticketing app"],
      collapsedBullets: [
        "Full stack, end of course project for App Academy",
        "Might take a second to spin up (it's on the Heroku free plan)",
        "Dynamic show filter using ActiveRecord to combine arbitrary " +
          "filter options into a single query",
        "Interactive seat picker for more engaging " + "point-and-click UI",
      ],
      video: "pickup_tix.webm",
    },
  ],
};
