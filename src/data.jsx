/* global window */
// ------ Projects + experience + education data ------

const PROJECTS = [
  {
    id: "fordcase",
    idx: "01",
    name: "FordPass CRM",
    desc: "Driving connected vehicle activation in Brazil — two CRM journeys, a push cadence and in-app UX writing that moved modem activation from 11% to 16.5% and cut support tickets by 43%.",
    tags: ["Product Strategy", "CRM", "UX Writing"],
    year: "2024",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordcase.html",
    featured: true,
  },
  {
    id: "fordpass",
    idx: "02",
    name: "FordPass®",
    desc: "Connected services for Ford owners — convenience, control, and information at every touchpoint of the drive.",
    tags: ["Product Design", "Mobile"],
    year: "2023",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordpass.html",
  },
  {
    id: "coral",
    idx: "03",
    name: "Coral Brazil",
    desc: "A 70-year-old Brazilian paint brand reimagined for the web — bringing colour discovery to every home.",
    tags: ["Product Design", "Web"],
    year: "2024",
    image: "https://framerusercontent.com/images/6uUfpGxnMMLw7kklMyIlYclV4mo.jpg",
    href: "work/coral.html",
  },
  {
    id: "telesena",
    idx: "04",
    name: "Tele Sena",
    desc: "Rebuilding the mobile experience of Brazil's iconic capitalization bond — results, redemptions and purchases in one place.",
    tags: ["Product Design", "Mobile"],
    year: "2024",
    image: "https://framerusercontent.com/images/6eWjjIG48XJday0WL9mYH9Yg5Hw.jpg",
    href: "work/telesena.html",
  },
  {
    id: "ranger",
    idx: "05",
    name: "Ranger Scroll Drive",
    desc: "A pandemic-era virtual test drive: steer a Ford Ranger through terrain using nothing but the scroll wheel.",
    tags: ["Interactive", "Campaign"],
    year: "2021",
    image: "https://framerusercontent.com/images/mV7iW9VZk0QREGOTfWRoRTglcM.jpg",
    href: "work/ranger.html",
  },
];

const EXPERIENCE = [
  { company: "VML Brazil", role: "Senior Product Designer", period: "2021 — Present", note: "Current" },
  { company: "Silvio Santos Group", role: "Senior Product Designer", period: "2024 — 2025" },
  { company: "Invento Advertising", role: "UI / UX Designer", period: "2019 — 2021" },
  { company: "Beco Advertising", role: "Designer", period: "2018 — 2019" },
  { company: "Freego", role: "Design Intern", period: "2017" },
];

const EDUCATION = [
  { school: "Tera", degree: "Digital Product Design", note: "User-centered design, prototyping, agile methods, usability testing and iterative design to solve real-world problems." },
  { school: "UXNOW", degree: "UX Design & Research Essentials", note: "Research, ideation, prototyping and testing. Cognitive psychology principles applied to user-centered digital products." },
  { school: "DesignBoost", degree: "UI Designer", note: "Advanced training in interface design — from fundamentals through advanced techniques and visual systems." },
  { school: "University of Sorocaba", degree: "Bachelor's in Advertising & Marketing", note: "Communication, creativity and strategy — foundations I bring into every product decision." },
];

const TRUSTED = [
  "Ford", "Coral", "Silvio Santos", "Tele Sena", "VML", "Johnson & Johnson",
  "Santander", "Samsung", "Ypê", "Nestlé",
];

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

Object.assign(window, { PROJECTS, EXPERIENCE, EDUCATION, TRUSTED, NAV_LINKS });
