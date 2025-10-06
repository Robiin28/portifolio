import React from "react";
import './css/blog.css';
import image3 from './../data/image/download3.jpg';
import image4 from './../data/image/download4.jpg';
const blogData = [
 
 {
  id: 1,
  title: "First-Time Payment Gateway & OAuth Integration",
  date: "Sep 29, 2025", // assuming today is Oct 6, 2025
  author: "Robel Hailu",
  desc: "Successfully integrated a payment gateway along with Google and GitHub OAuth authentication for my fullstack project. Learned how to securely handle payments and third-party logins.",
  cover: "/image/oauths.png",
},
  {
    id: 2,
    title: "Master These Awesome Frontend Techniques on my website",
    date: "march 6, 2025",
    author: "Robel Hailu",
    desc: "Learn modern frontend practices, tips for responsive layouts, and how to improve user experience in your web applications.",
    cover: "/image/blog1.png",
  },
 {
  id: 3,
  title: "My First Backend Deployment on Render",
  date: "Sep 15, 2025",
  author: "Robel Hailu",
  desc: "Sharing my experience deploying my first backend on Render. I cover setup, environment variables, database connections, and lessons learned from real deployment challenges.",
  cover: "image/backend.png",
},
 {
  id: 4,
  title: "Top Tech Trends in 2025",
  date: "Aug 20, 2025",
  author: "Robel Hailu",
  desc: "Stay updated with the latest technology trends shaping the industry this year, including AI advancements, cloud solutions, and fullstack development innovations.",
  cover: "/image/download4.jpg",
},

 {
  id: 3,
  title: "Arbaminch University Tech Club Launch",
  date: "Mar 6, 2025", // 7 months ago
  author: "Robel Hailu",
  desc: "Exciting news! Arbaminch University is launching its first tech club to inspire the next generation of innovators. We’re thrilled to see students engaging with technology and building skills for the future.",
  cover: "/image/amu.png",
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
