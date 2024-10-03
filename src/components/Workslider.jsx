import React, { useState, useEffect } from 'react';
import './ProjectSlider.css';
import { ArrowCircleLeftTwoTone, ArrowCircleRightTwoTone } from '@mui/icons-material';

const ProjectSlider = () => {
  const projects = [
    {
      title: "ChattingKaro",
      description: "This dynamic web-based chat application offers a seamless messaging experience with features like media and file sharing. Built with a responsive React frontend, it utilizes MongoDB for efficient data management and Cloudinary for media handling. The Express.js backend ensures scalability, while Socket.io enables real-time communication, allowing instant messaging and live updates without page refreshes. (CLICK ON IMAGE TO CHECK THIS OUT)",
      techs: ["MERN Stack", "Socket.io"],
      image: "chattingkaroimg.png",
      link: "https://chattingkaro.live"
    },
    {
      title: "Calorie Counter",
      description: "This user-friendly web-based application predicts calorie expenditure during workouts based on user input. Developed with Streamlit, it features an intuitive interface for easy data entry and viewing of predictions. Data processing and analysis are efficiently handled using Pandas and NumPy, while model performance is evaluated using scikit-learn metrics such as MAE, MSE, and RMSE. (CLICK ON IMAGE TO CHECK THIS OUT)",
      techs: ["XGBoost", "Streamlit", "sklearn"],
      image: "calorie.png",
      link: "https://caloriecounter.streamlit.app/"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === projects.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000); // Adjust the time here for auto slide (in ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [projects.length]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-wrapper">
      <div className="workheading">My Works</div>
      <div className="slider-content">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`workslide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="project-slide-content">
              <div className="project-image">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className='projectimg'/>
                </a>
              </div>
              <div className="project-details">
                <h2>{project.title}</h2>
                <p className='project-description'>{project.description}</p>
                <div className="project-techs">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button onClick={goToPrevious} className="prev-button"><ArrowCircleLeftTwoTone sx={{ color: 'cyan', fontSize: '40px' }} /></button>
      <button onClick={goToNext} className="next-button"><ArrowCircleRightTwoTone sx={{ color: 'cyan', fontSize : '40px' }} /></button>
    </div>
  );
};

export default ProjectSlider;