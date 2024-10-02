import React from 'react'

const Education = () => {
  return <div className="education">
    <div className="educationcomp" id='collegecomponent'>
        <div className="collegetop">
            <div className="collegename" >Delhi Technological University</div>
            <div className="collegetime">Aug 2023 - May 2027</div>
        </div>
        <div className="collegebottom">
            <div className="branchname" >Bachelor of Technology in Computer Science and Engineering</div>
            <div className="cg">CGPA : 8.1</div>
        </div>
    </div>
    <div className="educationcomp" >
        <div className="plustwotop"><div>Rajkiya Pratibha Vikas Vidyalaya</div> <div></div></div>
        <div className="plustwobottom">
            <div className='plustwo'>XII<sup>th</sup> (CBSE)</div>
            <div className='percentage'>Percentage : 87.8%</div>
        </div>
    </div>
    <div className="educationcomp">
    <div className="plustwotop"><div>Rajkiya Pratibha Vikas Vidyalaya</div> <div></div></div>
        <div className="plustwobottom">
            <div className='plustwo'>X<sup>th</sup> (CBSE)</div>
            <div className='percentage'>Percentage : 91%</div>
        </div>
    </div>
  </div>
}

export default Education