import React, { useState } from 'react'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Education from '../components/Education'

const Profilepage = () => {

  const [selected, setSelected] = useState('about');



  return <div className="profilepage">
    <div className="profilecontent">
        <div className="profilecontentleft">
            <div className="profileheading">Profile</div>
            <button className='profilebutton' onClick={() => setSelected('education')} style={{backgroundColor: selected === 'education' ? ' rgba(0, 255, 255, 0.1)' : ' rgba(0, 255, 255, 0.4)'}} >Education</button>
            <button className='profilebutton' onClick={() => setSelected('skills')} style={{backgroundColor: selected === 'skills' ? ' rgba(0, 255, 255, 0.1)' : ' rgba(0, 255, 255, 0.4)'}}>Skills</button>
            <button className='profilebutton' onClick={() => setSelected('about')} style={{backgroundColor: selected === 'about' ? ' rgba(0, 255, 255, 0.1)' : ' rgba(0, 255, 255, 0.4)'}}>About Me</button>
        </div>
        <div className="profilecontentright">
            {selected === 'skills' && <Skills />}
            {selected === 'about' && <Aboutme />}
            {selected === 'education' && <Education />}
        </div>
    </div>
  </div>
}

export default Profilepage