import { 
  Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, 
  CloudOutlined, FavoriteBorder, Public, PersonOutlined, 
  AddLocationAltOutlined, PhoneIphone, EmailOutlined, 
  Facebook, Twitter, Instagram, YouTube 
} from "@mui/icons-material";

// Home section (can add content later)
export const home = [];

// About section (can add content later)
export const about = [];

// Services offered
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "We create visually stunning and user-friendly designs tailored to your brand and audience.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Our code is structured, maintainable, and optimized for performance and scalability.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Websites and applications that look great and function perfectly on any device.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI",
    desc: "Leveraging Material UI for modern, consistent, and accessible user interfaces.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Clean and visually appealing iconography for better user experience.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Reliable and responsive support to ensure your projects run smoothly.",
  },
];

// Project stats
export const project = [
  { id: 1, icon: <CloudOutlined />, num: "89", title: "Happy Clients" },
  { id: 2, icon: <FavoriteBorder />, num: "231", title: "Projects Completed" },
  { id: 3, icon: <Public />, num: "108", title: "Files Downloaded" },
  { id: 4, icon: <PersonOutlined />, num: "1446", title: "Lines of Code" },
];

// Portfolio items
export const portfolio = [
  { id: 1, cover: "../images/port/port1.jpg", name: "Brand", category: "Frontend", title: "Brex Logo" },
  { id: 2, cover: "../images/port/port2.jpg", name: "Brand", category: "Fullstack Website", title: "Brex Logo" },
  { id: 3, cover: "../images/port/port3.jpg", name: "Brand", category: "Application", title: "Brex Logo" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    text: "Excellent developer with great attention to detail. Delivered projects on time with high quality.",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Very professional and skilled. Great communication and coding expertise.",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Creative problem solver and a talented React developer. Highly recommended.",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
];

// Blog posts
export const blog = [
  {
    id: 1,
    title: "Master These Awesome Frontend Techniques on my website",
    date: "march 6, 2025",
    author: "Robel Hailu",
    desc: "Learn modern frontend practices, tips for responsive layouts, and how to improve user experience in your web applications.",
    cover: "./image/koloTemari.png",
  },
  {
    id: 2,
    title: "Boost Your Fullstack Projects",
    date: "Sep 15, 2025",
    author: "Robel Hailu",
    desc: "Explore strategies for building scalable fullstack apps, including backend architecture, database design, and API integrations.",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Design Principles Every Developer Should Know",
    date: "Aug 20, 2025",
    author: "Robel Hailu",
    desc: "Understand key design concepts, color theory, and layout principles to make your projects visually appealing and user-friendly.",
    cover: "./images/blog/b3.png",
  },
  {
    id: 4,
    title: "Using AI to Personalize Web Applications",
    date: "Jul 10, 2025",
    author: "Robel Hailu",
    desc: "Implement AI and machine learning techniques to provide smarter user experiences, like recommendation engines and dynamic content.",
    cover: "./images/blog/b4.png",
  },
  {
    id: 5,
    title: "Optimizing Website Performance",
    date: "Jun 5, 2025",
    author: "Robel Hailu",
    desc: "Learn techniques to improve website speed, SEO, and responsiveness for better engagement and retention.",
    cover: "./images/blog/b5.png",
  }
];


// Contact info
export const contact = [
  { icon: <AddLocationAltOutlined />, text1: "2651 Main Street, Suite 124", text2: "Seattle, WA, 98101" },
  { icon: <PhoneIphone />, text1: "0123456789", text2: "0345627891" },
  { icon: <EmailOutlined />, text1: "hello@thetheme.io", text2: "info@brex-theme.io" },
];

// Social links
export const social = [
  { icon: <Facebook /> },
  { icon: <Twitter /> },
  { icon: <Instagram /> },
  { icon: <YouTube /> },
];
