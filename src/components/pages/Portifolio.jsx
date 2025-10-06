import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./css/portifolio.css";
import image1 from "./../data/image/koloTemari.png";
import image2 from "./../data/image/amu.png";
import image3 from "./../data/image/dentalclinic.png";
import image4 from "./../data/image/nike.png";
import image5 from "./../data/image/tour.png";
import image6 from "./../data/image/asax.png";
import video1 from "./../data/image/amu-demo.mp4";



// Portfolio data
const portfolioData = [
  {
    id: 1,
    cover: image1,
    title: "KoloTemari",
    name: "Elearning Website",
    category: "Fullstack",
    description:
      "Fully functional learning platform with digital courses, quizzes, and resources.",
    link: "https://frontend-kolotemari.vercel.app/",
    note:
      "⚡ On board & live! Features courses, quizzes and resources, Admin & instructor panels fully integrated, Built with React & Node.js",
    video: ""
  },
  {
    id: 2,
    cover: image2,
    title: "AMU Personalized News Feed",
    name: "AMU Personalized",
    category: "Fullstack",
    description:
      "AI-powered news feed for the university with real-time updates.",
    link: "",
    note:
      "🤖 On board! Designed with a team, Includes smart news recommendation features, Deployed version in progress",
    video: "/amu-demo.mp4"
  },
  {
    id: 3,
    cover: image3,
    title: "China Dental Clinic Site",
    name: "eHealth for Dentists",
    category: "Fullstack",
    description: "Real-world website for a dental clinic, fully functional.",
    link: "https://chinadentalspecialclinic.com/",
    note:
      "🦷 SOLD & live! Manage patient info and appointments, Built responsive and clean frontend design",
    video: ""
  },

 {
    id: 4,
    cover: image6,
    title: "ASAX_COMPANY",
    name: "Ecommerce Fullstack",
    category: "Fullstack",
    description:
      "Test project given for internship entrance, its Fullstack website for chemical industry. Robust backend, UI design still needs adjustments.",
    link: "",
    note:
      "🎨 i have Developed this 1 year ago; robust backend design and it give me solid foundation for my future projects.",
    video: "/asax.mp4"
  },

  {
    id: 5,
    cover: image4,
    title: "Nike Design Showcase",
    name: "Sample Design Project",
    category: "Frontend",
    description:
      "A simple design-focused project built to learn layout and component structure. The design was inspired by a YouTube tutorial and served as my first frontend project.",
    link: "https://nike-tau-lake.vercel.app/",
    note:
      "🎨 Easy starter project — helped me understand basic web layout and styling concepts.",
    video: ""
  },
  {
    id: 6,
    cover: image5,
    title: "RHO Tour",
    name: "Tour Project",
    category: "Frontend",
    description:
      "A fullstack but design-focused project built to guide Tours. System works but still needs refinement.",
    link: "",
    note:
      "🎨 Full design and partial backend completed, system works but still needs refinement.",
    video: "/tour_guide.mp4"
  }
];

const allCategories = [
  "all",
  ...new Set(portfolioData.map((item) => item.category))
];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredPortfolio =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

 const handleClick = (item) => {
  if(item.link) {
    window.open(item.link, "_blank", "noopener,noreferrer");
  } else if(item.video) {
    // open video player page
    window.open(`/video-player.html?v=${item.video}`, "_blank", "noopener,noreferrer");
  }
};

  return (
    <article>
      <div className="containerPort">
        <h2 className="heading" data-aos="zoom-in-down">
          Portfolio
        </h2>

        <p className="general-note" data-aos="fade-in">
          Here are some of my deployed and in-development projects — a mix of
          web, frontend, and full-stack apps. Click any project to explore more,
          or contact me to order your own custom one.
        </p>

        <div className="catButton">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className={`Btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
              data-aos="zoom-out-down"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="content grid33">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="box"
              data-aos="fade-up"
              onClick={() => handleClick(item)}
              style={{
                cursor: item.link || item.video ? "pointer" : "default",
                position: "relative"
              }}
            >
              <div className="img" style={{ position: "relative" }}>
                <img
                  src={item.cover}
                  alt={item.title}
                  style={{ borderRadius: "10px" }}
                />
                {item.video && (
                  <div className="play-overlay">
                    <PlayCircleOutlineIcon className="play-icon" />
                  </div>
                )}
              </div>

              <div className="overlay">
                <h3>{item.title}</h3>
                <span>
                  {item.name}{" "}
                  {(item.link || item.video) && (
                    <OpenInNewIcon
                      style={{ fontSize: 16, verticalAlign: "middle", marginLeft: 4 }}
                    />
                  )}
                </span>
                <p>{item.description}</p>
                {!item.link && !item.video && <VisibilityOutlinedIcon />}
              </div>

              {item.note && (
                <div className="note">
                  <InfoOutlinedIcon
                    style={{ fontSize: 16, verticalAlign: "middle", marginRight: 4, color: "#ff7a00" }}
                  />
                  {item.note.split(",").map((part, idx) => (
                    <div key={idx} className="note-item">
                      {part.trim()}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
