import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import './css/portifolio.css'; 
import image3 from './../data/image/download3.jpg';
import image4 from './../data/image/download4.jpg';
import image6 from './../data/image/download6.jpg';
const portfolioData = [
  {
    id: 3,
    cover: image3, 
    title: "UI/UX Design Project",
    name: "GojoBete Movie Application",
    category: "Design",
    description: "A Movie project focused on creating user-centric interfaces with engaging user experiences, emphasizing usability and aesthetics."
  },
  {
    id: 4,
    cover: image4, 
    title: "Cloud Integration",
    name: "Cloud Services",
    category: "Cloud",
    description: "Implementing robust cloud solutions for scalable storage and computing, ensuring high availability and security for business applications."
  },
  {
    id: 6, 
    cover: image6, 
    title: "E-commerce App",
    name: "Commerce",
    category: "Web",
    description: "An e-commerce project leveraging advanced on selling and buying of electronics."
  }
];

const allCategories = ["all", ...new Set(portfolioData.map((item) => item.category))];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredPortfolio = selectedCategory === "all" ? portfolioData : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <>
      <article>
        <div className="containerPort">
        <h2 className='heading' data-aos='zoom-in-down'>
                      Portfolio
                    </h2>
          <div className="catButton">
            {allCategories.map((category, index) => (
              <button
                key={index}
                className="Btn"
                onClick={() => setSelectedCategory(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid33">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <p>{item.description}</p>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
