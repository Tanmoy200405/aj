import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaHeart, 
  FaMedkit, 
  FaGraduationCap, 
  FaGavel, 
  FaBuilding, 
  FaFlask, 
  FaUtensils, 
  FaPalette, 
  FaMicroscope,
  FaSeedling,
  FaBullhorn,
  FaUniversity,
  FaBalanceScale,
  FaTools,
  FaStethoscope
} from "react-icons/fa";

// Import existing images
import busImg from "../assets/course_business.png";
import techImg from "../assets/course_tech.png";
import nurImg from "../assets/course_nursing.png";
import paraImg from "../assets/course_paramedical.png";

export const coursesData = [
  {
    id: "01",
    category: "MANAGEMENT & BUSINESS",
    title: "BBA, MBA & More",
    items: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA)",
      "Hospital Management",
      "Hotel Management",
      "Event Management",
      "Finance & Marketing Management"
    ],
    desc: "Leadership, strategic management, and specialized business programs like MBA, BBA, and Hospital/Hotel management.",
    icon: FaBriefcase,
    image: busImg
  },
  {
    id: "02",
    category: "ENGINEERING & TECHNOLOGY",
    title: "B.Tech & B.E.",
    items: [
      "Computer Science Engineering",
      "Information Technology",
      "AI & Machine Learning",
      "Electronics & Communication",
      "Mechanical & Civil Engineering"
    ],
    desc: "Future-ready engineering branches including CSE, AI/ML, Data Science, and core streams like Mechanical and Civil.",
    icon: FaLaptopCode,
    image: techImg
  },
  {
    id: "03",
    category: "MEDICAL & HEALTHCARE",
    title: "B.Pharm & Nursing",
    items: [
      "B.Pharm & D.Pharm",
      "BSc Nursing & GNM",
      "Physiotherapy",
      "Medical Laboratory Technology"
    ],
    desc: "Comprehensive healthcare education from pharmacy to nursing and diagnostic technologies.",
    icon: FaStethoscope,
    image: nurImg
  },
  {
    id: "04",
    category: "COMPUTER APPLICATIONS",
    title: "BCA & MCA",
    items: [
      "Bachelor of Computer Applications (BCA)",
      "Master of Computer Applications (MCA)",
      "Software & Web Development",
      "Cloud Computing",
      "Blockchain Technology"
    ],
    desc: "Specialized computer science programs focusing on application development, web tech, and emerging digital innovations.",
    icon: FaLaptopCode,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "05",
    category: "DESIGN & MEDIA",
    title: "Design, Film & Media",
    items: [
      "Fashion & Interior Design",
      "Animation & VFX",
      "Graphic & UI/UX Design",
      "Journalism & Mass Communication",
      "Film Making & Game Design"
    ],
    desc: "Creative career paths in fashion, visual communication, digital arts, and mass media journalism.",
    icon: FaPalette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "06",
    category: "LAW",
    title: "LLB & Corporate Law",
    items: [
      "LLB (3 Year)",
      "BA LLB & BBA LLB (5 Year)",
      "Corporate Law",
      "Criminal Law",
      "International Law"
    ],
    desc: "Professional legal education covering litigation, corporate advocacy, and international justice systems.",
    icon: FaBalanceScale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "07",
    category: "HOSPITALITY & AVIATION",
    title: "Hotel & Travel Mgmt",
    items: [
      "Hotel & Hospitality Management",
      "Aviation Management",
      "Cabin Crew Training",
      "Travel & Tourism Management"
    ],
    desc: "Elite training for the hospitality industry, luxury travel, and professional aviation services.",
    icon: FaUtensils,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "08",
    category: "SCIENCE",
    title: "BSc & Biotechnology",
    items: [
      "BSc (Physics, Chemistry, Maths)",
      "Biotechnology & Microbiology",
      "Environmental Science",
      "Food Technology"
    ],
    desc: "Rigorous scientific research and applied science programs in biotechnology and traditional science streams.",
    icon: FaFlask,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "09",
    category: "COMMERCE",
    title: "B.Com & Finance",
    items: [
      "B.Com & M.Com",
      "Accounting & Finance",
      "Banking & Insurance",
      "Taxation"
    ],
    desc: "Expertise in trade, commerce, financial accounting, and the banking sector.",
    icon: FaBuilding,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "10",
    category: "ARTS & HUMANITIES",
    title: "BA & Psychology",
    items: [
      "BA (English, History, Pol. Sc.)",
      "Psychology & Sociology",
      "Economics",
      "Philosophy"
    ],
    desc: "Exploring human culture, social behavior, and economic systems through diverse humanities programs.",
    icon: FaUniversity,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "11",
    category: "SKILL-BASED",
    title: "Digital & Vocational",
    items: [
      "Digital Marketing",
      "Data Analytics",
      "Cyber Forensics",
      "Entrepreneurship",
      "Culinary Arts"
    ],
    desc: "Modern vocational skills including digital marketing, data analytics, and professional entrepreneurship.",
    icon: FaTools,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=400"
  }
];
