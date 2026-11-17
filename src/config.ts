// ============================================================
//  VIETLEAP HACKATHON — SITE CONFIGURATION
//  Edit this file to update all content on the website.
// ============================================================

export const SITE = {
  name: "VietLeap",
  tagline: "Hackathon",
  subtitle: "From Data to Decision",
  fullName: "Vietnam Initiative for Emerging Talents: Leadership, Empowerment, Applied Problem-Solving",
  date: "19–21 Nov 2026 · Ho Chi Minh City, Vietnam",
  // ISO date string for the countdown timer
  countdownTarget: "2026-11-19T12:00:00",
  contactEmail: "vietleap2026@gmail.com",
  sponsorEmail: "vietleap2026@gmail.com",
};

export const HERO = {
  description:
    "2.5 days. Skill-building. Data challenges. Real impact. VietLeap brings together emerging talent to transform data into decisions.",
  ctaPrimary: "Fully Funded",
  ctaSecondary: "Learn More",
};

export const ABOUT = {
  heading: "What is VietLeap?",
  description:
    "VietLeap is a 48-hour intensive hackathon bringing together engineers, designers, and domain experts to build data-driven projects that matter. Whether you're a seasoned hacker or attending your first hackathon, VietLeap is built for you.",
  stats: [
    { val: "48h+",      label: "Learn & Build Time" },
    { val: "15+",       label: "Professionals" },
    { val: "VND 20M+",  label: "Prizes" },
  ],
  tracks: [
    {
      icon: "📊",
      title: "Data & Analytics",
      desc: "Build dashboards and data pipelines that turn raw data into actionable insights.",
    },
    {
      icon: "🎤",
      title: "Presentation",
      desc: "Turn technical findings into a narrative and deliver it with confidence.",
    },
  ],
  whatYouGet: [
    { icon: "🏆", label: "Cash Prizes", desc: "VND 20M+ in total prizes." },
    { icon: "🎓", label: "Certificates", desc: "Official certificates of participation and achievement." },
    { icon: "🎁", label: "Merchandise", desc: "Exclusive VietLeap swag for all participants." },
    { icon: "✈️", label: "Full Funding", desc: "100% free. We provide all meals, snacks, and caffeine during the event. Travel and accommodation fully covered for selected candidates outside Ho Chi Minh City." },
    { icon: "🤝", label: "Network", desc: "Connect with professionals, researchers, and peers from top institutions." },
    { icon: "💡", label: "Mentorship", desc: "Hands-on guidance from industry experts and academics throughout the hackathon." },
  ],
  prizes: [
    {
      place: "1st",
      prize: "VND 10M+",
      perks: ["Cash award", "Certificate", "Merchandise"],
      color: "from-yellow-400/20 to-yellow-600/5",
      border: "border-yellow-500/30",
      text: "text-yellow-400",
    },
    {
      place: "2nd",
      prize: "VND 8M+",
      perks: ["Cash award", "Certificate", "Merchandise"],
      color: "from-slate-400/20 to-slate-600/5",
      border: "border-slate-400/30",
      text: "text-slate-300",
    },
    {
      place: "3rd",
      prize: "VND 5M+",
      perks: ["Cash award", "Certificate", "Merchandise"],
      color: "from-orange-700/20 to-orange-900/5",
      border: "border-orange-600/30",
      text: "text-orange-400",
    },
  ],
};

export const AGENDA_DAYS = [
  {
    label: "Day 1 — 19 Nov",
    events: [
      { time: "12:00–15:00", label: "Registration + Check-in UEH Green Living Hub", type: "logistics" },
      { time: "15:00–15:30", label: "Opening Ceremony", type: "main" },
      { time: "15:30–16:00", label: "From observation to data — Object tracking in computer vision · Chi-Yu Lee, University of Konstanz (Germany)", type: "workshop" },
      { time: "16:45–18:30", label: "City Bus Tour", type: "logistics" },
      { time: "18:30–20:30", label: "Dinner + Networking", type: "logistics" },
      { time: "20:30+",      label: "Go back to UEH Green Living Hub", type: "logistics" },
    ],
  },
  {
    label: "Day 2 — 20 Nov",
    events: [
      { time: "07:00–09:00", label: "Mindfulness Session + Breakfast", type: "logistics" },
      { time: "09:00–09:30", label: "Challenge Briefing + Team Formation", type: "main" },
      { time: "09:30–10:00", label: "Hacking Time 🚀", type: "main" },
      { time: "10:00–10:45", label: "Unlocking the Data Economy: How Open Property Data Creates Business Value and Economic Insight · Viet Nguyen-Tien, LSE (UK)", type: "workshop" },
      { time: "10:45–11:00", label: "Break", type: "logistics" },
      { time: "11:00–11:30", label: "Dashboard · Sacha Dray, Worldbank (Vietnam)", type: "workshop" },
      { time: "11:30–12:30", label: "Lunch", type: "logistics" },
      { time: "12:30–17:15", label: "Hacking Time 🚀", type: "main" },
      { time: "17:15–17:45", label: "Mentor Check-in #1", type: "workshop" },
      { time: "17:45+",      label: "Hacking Continues + Dinner", type: "main" },
    ],
  },
  {
    label: "Day 3 — 21 Nov",
    events: [
      { time: "07:00–09:00", label: "Mindfulness Session + Breakfast", type: "logistics" },
      { time: "09:00–10:30", label: "Hacking Time 🚀", type: "main" },
      { time: "10:30–11:00", label: "Mentor Check-in #2", type: "workshop" },
      { time: "11:00–12:00", label: "Lunch", type: "logistics" },
      { time: "12:00–13:00", label: "Final Hacking Sprint", type: "main" },
      { time: "13:00–13:15", label: "⏱ Submission Deadline", type: "main" },
      { time: "13:15–15:15", label: "Final Pitches — Pitch + Q&A", type: "main" },
      { time: "15:15–16:00", label: "Break + Experience Sharing", type: "talk" },
      { time: "16:00–17:00", label: "Awards Ceremony + Closing Remarks", type: "main" },
    ],
  },
];

export const SPEAKERS = [
  {
    name: "Chi-Yu Lee",
    affiliation: "University of Konstanz, Germany",
    topic: "From observation to data — Object tracking in computer vision",
    avatar: "CL",
    color: "from-[#00e5ff] to-[#0066ff]",
  },
  {
    name: "Viet Nguyen-Tien",
    affiliation: "London School of Economics, UK",
    topic: "Combining Data for Socioeconomic Development",
    avatar: "VN",
    avatarImage: "/Viet.jpeg",
    color: "from-[#5b4fff] to-[#9b59f5]",
  },
  {
    name: "Sacha Dray",
    affiliation: "World Bank, Vietnam",
    topic: "Dashboard",
    avatar: "SD",
    avatarImage: "/Sacha.jpeg",
    color: "from-[#ff3d6b] to-[#ff8f00]",
  },
];

export const REGISTER = {
  heading: "Join VietLeap",
  subtext: "Registration is free. Limited spots available.",
  successNote: "Event starts 19 Nov 2026, 12:00 ICT",
  tracks: [
    "Data & Socioeconomic Development",
    "Data Visualisation & Dashboards",
    "Computer Vision & Object Tracking",
    "Open Track",
  ],
};

export const SUBMIT = {
  heading: "Submit Your Hack",
  subtext: "Submissions close 21 Nov 2026, 13:15 ICT. One submission per team.",
  requirements: ["Public GitHub repo", "Working demo link", "2-min pitch deck"],
  tracks: [
    "Data & Socioeconomic Development",
    "Data Visualisation & Dashboards",
    "Computer Vision & Object Tracking",
    "Open Track",
  ],
};

// Organizer organizations from the PDF
export const ORGANIZER_ORGS = [
  { name: "VietLeap", short: "VietLeap" },
  { name: "UEH — College of Economics, Law and Government / School of Public Finance", short: "UEH" },
  { name: "AVSE Global, Economic Policy Network", short: "EPNet" },
];

export const ORGANIZERS = [
  {
    name: "VietLeap",
    role: "Co-Organizer",
    org: "",
    bio: "VietLeap — Vietnam Initiative for Emerging Talents: Leadership, Empowerment, Applied Problem-Solving — cultivates the next generation of Vietnamese changemakers.",
    avatar: "VL",
    color: "from-[#00e5ff] to-[#0066ff]",
  },
  {
    name: "UEH",
    role: "Host Institution",
    org: "",
    bio: "UEH's School of Public Finance, College of Economics, Law and Government provide the academic home for VietLeap Hackathon.",
    avatar: "UE",
    color: "from-[#ff3d6b] to-[#ff8f00]",
  },
  {
    name: "AVSE Global",
    role: "Co-Organizer",
    org: "",
    bio: "AVSE Global's Economic Policy Network connects researchers and policymakers to bridge evidence-based analysis with real-world economic decisions.",
    avatar: "AG",
    color: "from-[#5b4fff] to-[#9b59f5]",
  },
];

export const SPONSORS = [
  {
    name: "Goodenough College & Goodstart Fellow",
    role: "Sponsor",
    logo: "/goodenough-goodstart-logo.png",
    details: [
      {
        name: "Goodenough College",
        description:
          "A postgraduate residential charity in Bloomsbury, London, home to 800+ international students from 90+ countries since 1930 — building a global community of future leaders.",
      },
      {
        name: "Goodstart Fellow",
        description:
          "A Goodenough College alum awarded funding through the Goodstart Fellowship — an initiative created and funded by an alum to help others in the College's alumni community deliver community-impact projects in health, education, the environment, or wellbeing.",
      },
    ],
  },
  {
    name: "FiinGroup",
    role: "Partner",
    logo: "/fiingroup-logo.svg",
    details: [
      {
        name: "FiinGroup",
        description: "FiinGroup — a pioneer in data analytics across the Vietnamese market.",
      },
    ],
  },
];

// Get your form ID from formspree.io — paste it here
export const FORMSPREE_ID = "xvkgpvdk";

export const SPONSOR_CTA = {
  heading: "Become a Sponsor",
  subtext: "Multiple tiers available.",
};
