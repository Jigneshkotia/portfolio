import React from "react";
import Slider from "../components/Slider";
const Skills = () => {
  const languagesData = [
    {
      symbol: "c",
      text: "I have strong proficiency in C/C++ and actively use these languages for Data Structures and Algorithms (DSA) as well as competitive programming. My experience in solving complex problems has honed my skills in algorithm optimization and efficient coding practices.",
    },
    { symbol: "js", text: "I have extensive experience with JavaScript, which I use as the primary language in most of my projects. I am proficient in leveraging various JavaScript libraries and frameworks, allowing me to build robust and dynamic applications efficiently." },
    { symbol: "py", text: "I have a strong command of Python, I frequently use it in my machine learning projects, taking advantage of its libraries and frameworks. I also utilize it for backend development, allowing me to create full-stack solutions that integrate machine learning models with real-world applications." },
  ];

  const frontendData = [
    { symbol: "react", text: "I specialize in frontend development using React, which I employ in nearly all of my projects. My experience with React enables me to build dynamic, user-friendly interfaces and leverage its powerful ecosystem to create efficient and scalable web applications.”" },
    { symbol: "three", text: "I incorporate 3D animations in some of my projects using Three.js, adding an interactive and immersive element to web applications. My experience with this library allows me to create engaging visual effects and enhance the overall user experience." },
    { symbol: "tailwind", text: "I utilize Tailwind CSS in some of my frontend projects to streamline the styling process and create responsive, modern designs. Its utility-first approach allows me to quickly build custom interfaces while maintaining a consistent and cohesive look throughout my applications." },
    { symbol: "mui", text: "I sometimes prefer using Material UI for the frontend of my projects because of its comprehensive set of pre-designed components and responsive design principles. This allows me to maintain a consistent look and feel across different devices while speeding up the development process." },
    { symbol: "boot", text: "I began my web development journey using Bootstrap due to its ease of use and straightforward approach to building responsive websites. Its extensive library of pre-designed components helped me quickly prototype and create visually appealing layouts." },
  ];

  const backendData = [
    { symbol: "node", text: "I have strong expertise in Node.js, which I use for the backend of the majority of my projects. Its asynchronous, event-driven architecture allows me to build scalable and efficient applications, enabling seamless integration with various databases and APIs while handling multiple connections simultaneously." },
    { symbol: "express", text: "I have solid experience with Express.js, which I utilize in the backend of the majority of my projects. This framework allows me to build robust and flexible web applications efficiently by simplifying the process of routing, middleware management, and handling requests and responses." },
    { symbol: "mongo", text: "I have a strong proficiency in MongoDB, which I use as a database in the backend of the majority of my projects. Its document-oriented structure and flexible schema design enable me to efficiently store and manage data, making it well-suited for applications that require scalability and quick access to unstructured data. " },
    { symbol: "django", text: "I have experience with Django, which I utilize in the backend of projects involving machine learning. Django’s robust framework allows me to efficiently build web applications that integrate machine learning models, providing a seamless interface for users to interact with data-driven insights." },
    { symbol: "flask", text: "I have experience with Flask, which I find very easy to use for backend development. Its lightweight and flexible nature allows me to quickly set up web applications and APIs, making it ideal for projects where rapid prototyping is essential. " },
    { symbol: "websocket", text: "I have experience with WebSockets, which I use in my chatting application project to enable real-time two-way communication. This technology allows for efficient, low-latency interactions between clients and servers, ensuring that messages are transmitted instantly and enhancing the overall user experience." },
  ];

  return <div className="skill">
      <div className="skills" id="languagesknown">
        <div className="skillhead" id="languagehead">
          Programming Languages
        </div>
        <div className="slidecontainer">
          <Slider slidesData={languagesData} />
        </div>
      </div>
      <div className="skills" id="webskill">
        <div className="skillhead" id="webskillhead">
          Web Development
        </div>
        <div className="websubskills">
          <div className="frontend">
            <div className="frontendhead">Frontend</div>
            <div className="slidecontainer">
              <Slider slidesData={frontendData} />
            </div>
          </div>
          <div className="backend">
            <div className="backendhead">Backend</div>
            <div className="slidecontainer">
              <Slider slidesData={backendData} />
            </div>
          </div>
        </div>
      </div>
      <div className="skills" id="machinelearning">
        <div className="skillhead" id="machinelearninghead">
          Machine Learning
        </div>
        <div className="machinelearningdiscription">
          I am currently diving deep into its concepts and applications. With a
          strong interest in AI, I am exploring various techniques and
          algorithms to further enhance my understanding and skills in this
          rapidly evolving field.
        </div>
      </div>
    </div>
};

export default Skills;
