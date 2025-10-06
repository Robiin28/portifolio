import React from "react";
import './css/about.css';
import { 
    SiMongodb, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiPython, 
    SiNodedotjs, 
    SiExpress, 
    SiPhp, 
    SiMysql,
    SiGit,
    SiReact,       
    SiDocker,        
    SiTypescript     
} from "react-icons/si";
export const Skill=()=>{
return(
     <>
      <section className="skill">
                        <div className="container">
                                <h2 className='heading first' data-aos='zoom-in-down'>
                                   My skills
                                </h2>
                            <div className="content grid">
                                <div className="box">
                                    <SiHtml5 size={60} color="#E34F26" />
                                    <SiCss3 size={60} color="#1572B6" />
                                    <h3 className="col">HTML & CSS</h3>
                                    <p>Skilled in creating responsive and accessible web interfaces.</p>
                                </div>
                                <div className="box">
                                    <SiJavascript size={60} color="#F7DF1E" />
                                    <h3 className="col">JavaScript</h3>
                                    <p>Proficient in writing clean, maintainable code and building dynamic web applications.</p>
                                </div>
                                <div className="box">
                                    <SiPython size={60} color="#3776AB" />
                                    <h3 className="col">Python</h3>
                                    <p>Strong in scripting, data analysis, and building scalable applications.</p>
                                </div>
                                <div className="box">
                                    <SiNodedotjs size={60} color="#339933" />
                                    <h3 className="col">Node.js</h3>
                                    <p>comfortable in building fast and scalable backend services using Node.js.</p>
                                </div>
                                <div className="box">
                                    <SiExpress size={60} color="#000000" style={{ backgroundColor: "white", borderRadius: "50%" }} />
                                    <h3>Express.js</h3>
                                    <p>Experienced in developing RESTful APIs and server-side applications.</p>
                                </div>
                                <div className="box">
                                    <SiPhp size={60} color="#777BB4" />
                                    <h3 className="col">PHP</h3>
                                    <p>Experienced in creating dynamic websites and integrating with databases.</p>
                                </div>
                                <div className="box">
                                    <SiMysql size={60} color="#4479A1" />
                                    <h3 className="col">MySQL</h3>
                                    <p>Skilled in designing and managing relational databases with MySQL.</p>
                                </div>
                                <div className="box">
                                    <SiMongodb size={60} color="#47A248" />
                                    <h3 className="col">MongoDB</h3>
                                    <p>Experienced in designing efficient NoSQL databases and handling large data sets.</p>
                                </div>
                                <div className="box">
                                    <SiGit size={60} color="#F05032" />
                                    <h3 className="col">Git</h3>
                                    <p>Proficient in version control, collaborative development, and code management using Git.</p>
                                </div>
                                <div className="box last2">
                                    <SiReact size={60} color="#61DAFB" />
                                    <h3 className="col">React</h3>
                                    <p>Skilled in building dynamic and responsive user interfaces using React.</p>
                                </div>
                                <div className="box last">
                                    <SiDocker size={60} color="#2496ED" />
                                    <h3 className="col">Docker</h3>
                                    <p>Experienced in containerizing applications for consistent and scalable deployments.</p>
                                </div>
                                <div className="box last">
                                    <SiTypescript size={60} color="#3178C6" />
                                    <h3 className="col">TypeScript</h3>
                                    <p>Proficient in using TypeScript for building robust and type-safe applications.</p>
                                </div>
                            </div>
                        </div>
                       
                    </section>
                   
                           <div className="dot"></div>
                       
                   
    </>
)
}