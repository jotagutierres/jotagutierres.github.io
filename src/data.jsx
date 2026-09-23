/* global window */
// ------ Projects + experience + education data ------

const PROJECTS = [
  {
    id: "fordcase",
    name: "FordPass CRM",
    desc: "Two CRM journeys, a push cadence and in-app UX writing that took connected-vehicle modem activation in Brazil from 11% to 16.5% and cut support tickets by 43%.",
    tags: ["Product Strategy", "CRM", "UX Writing"],
    year: "2024",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordcase.html",
  },
  {
    id: "fordpass",
    name: "FordPass®",
    desc: "Redesigning the Brazilian version of Ford's companion app around what owners open it to do: start the car, check on it, book a service.",
    tags: ["Product Design", "Mobile"],
    year: "2023",
    image: "https://framerusercontent.com/images/VRKHcCTF7ctnBzXxlql8cKU4Xys.jpg",
    href: "work/fordpass.html",
  },
  {
    id: "coral",
    name: "Coral Brazil",
    desc: "A landing page system for Coral, the Brazilian paint brand founded in 1954, where the colour itself leads every page.",
    tags: ["Product Design", "Web"],
    year: "2024",
    image: "https://framerusercontent.com/images/6uUfpGxnMMLw7kklMyIlYclV4mo.jpg",
    href: "work/coral.html",
  },
  {
    id: "telesena",
    name: "Tele Sena",
    desc: "Rebuilding the product behind Brazil's best-known capitalization bond, so results, redemptions and purchases live in one place.",
    tags: ["Product Design", "Mobile"],
    year: "2024",
    image: "https://framerusercontent.com/images/6eWjjIG48XJday0WL9mYH9Yg5Hw.jpg",
    href: "work/telesena.html",
  },
  {
    id: "ranger",
    name: "Ranger Scroll Drive",
    desc: "A lockdown-era virtual test drive: you steer a Ford Ranger through the terrain with nothing but the scroll wheel.",
    tags: ["Interactive", "Campaign"],
    year: "2021",
    image: "https://framerusercontent.com/images/mV7iW9VZk0QREGOTfWRoRTglcM.jpg",
    href: "work/ranger.html",
  },
];

const EXPERIENCE = [
  { company: "VML Brazil", role: "Senior Product Designer", period: "2021 – Present" },
  { company: "Silvio Santos Group", role: "Senior Product Designer", period: "2024 – 2025" },
  { company: "Invento Advertising", role: "UI / UX Designer", period: "2019 – 2021" },
  { company: "Beco Advertising", role: "Designer", period: "2018 – 2019" },
  { company: "Freego", role: "Design Intern", period: "2017" },
];

const EDUCATION = [
  { school: "Tera", degree: "Digital Product Design", note: "User-centred design, prototyping, agile methods, usability testing and iterating on real problems." },
  { school: "UXNOW", degree: "UX Design & Research Essentials", note: "Research, ideation, prototyping and testing, with principles from cognitive psychology applied to digital products." },
  { school: "DesignBoost", degree: "UI Designer", note: "Interface design from the fundamentals through advanced techniques and visual systems." },
  { school: "University of Sorocaba", degree: "Bachelor's in Advertising & Marketing", note: "Communication, creativity and strategy, which still shape how I make product decisions." },
];

const CLIENTS = [
  "Ford", "Coral", "Silvio Santos", "Tele Sena", "VML", "Johnson & Johnson",
  "Santander", "Samsung", "Ypê", "Nestlé",
];

Object.assign(window, { PROJECTS, EXPERIENCE, EDUCATION, CLIENTS });
