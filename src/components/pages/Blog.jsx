import React from "react";
import './css/blog.css';
import image3 from './../data/image/download3.jpg';
import image4 from './../data/image/download4.jpg';
const blogData = [
  {
    id: 1,
    cover: image3,
    title: "Exploring the Beauty of Nature",
    author: "Jane Doe",
    date: "July 1, 2024",
    desc: "Discover the most breathtaking places to visit and the joys of spending time in nature. From towering mountains to serene beaches, the natural world offers endless opportunities for exploration and relaxation.",
    international: true 
  },
  {
    id: 2,
    cover: image4, 
    title: "Tech Trends of 2024",
    author: "John Smith",
    date: "June 28, 2024",
    desc: "An overview of the latest advancements in technology and what to expect in the coming year. We delve into AI, blockchain, and the latest in consumer electronics to see how they will shape the future.",
    international: true 
  },
  {
    id: 3,
    cover: "https://via.placeholder.com/600x400?text=Ethiopian+Developers",
    title: "Ethiopian Developers and Innovations",
    author: "Ethiopian Developer",
    date: "June 25, 2024",
    desc: "Highlighting the achievements and innovations of Ethiopian developers in various fields. Explore how local talents are making a global impact.",
    international: false 
  },
  {
    id: 4,
    cover: "https://via.placeholder.com/600x400?text=Challenges+and+Opportunities",
    title: "Challenges and Opportunities for Developers in Ethiopia",
    author: "Ethiopian Developer",
    date: "June 20, 2024",
    desc: "Examining the challenges faced by developers in Ethiopia and the emerging opportunities in the tech sector. Learn how local developers are overcoming obstacles to drive innovation.",
    international: false 
  },
  {
    id: 5,
    cover: "https://via.placeholder.com/600x400?text=Tech+Education+Initiatives",
    title: "Impact of Tech Education Initiatives in Ethiopia",
    author: "Ethiopian Developer",
    date: "June 15, 2024",
    desc: "Discussing the impact of educational initiatives on tech literacy and skill development in Ethiopia. Discover how these programs are shaping the future of the country's tech ecosystem.",
    international: false 
  }
];

export const Blog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
              <h2 className='heading' data-aos='zoom-in-down'>
                      Blogs
              </h2>
          <div className='content grid33 ' data-aos="zoom-in">
            {blogData.map((item) => (
              <div key={item.id} className={`box ${item.international ? 'international' : 'ethiopian'}`} data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt={item.title} data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <label data-aos='fade-left'>
                    By {item.author} on {item.date}
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
