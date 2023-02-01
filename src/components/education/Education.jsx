import React from 'react'
import './Education.css'
import ALLSEM from '../../assets/GradeCards/ALL_SEM.pdf'
import SEM1 from '../../assets/GradeCards/SEM1.pdf'
import SEM2 from '../../assets/GradeCards/SEM2.pdf'
import SEM3 from '../../assets/GradeCards/SEM3.pdf'
import SEM4 from '../../assets/GradeCards/SEM4.pdf'
import SEM5 from '../../assets/GradeCards/SEM5.pdf'
import SEM6 from '../../assets/GradeCards/SEM6.pdf'
import X from '../../assets/GradeCards/X_marksheet.pdf'
import XII from '../../assets/GradeCards/XII_marksheet.pdf'

const Education = () => {
  return (
    <section id='education'>
      <h5>Education is the key to unlock the golden door of freedom</h5>
      <h2>My Education</h2>
      <div className="container education__container">
        <div>
          <h3>Indian Institute of Technology Kharagpur</h3>
          <article className="education__details">
            <div>
              <h4>Department : Industrial and Systems Engineering</h4>
              <h4>Degree : Batchelor's of Technology (2019-2023)</h4>
              <small>Grade : 8.53 / 10 (CGPA)</small>
            </div>    
            <div className="education__gradecardfull">
              <a href={ALLSEM} className='btn btn-primary' target='_blank'>Curriculum Detailed Grade Card</a>
            </div>
            <div>
              <article>
                <h3 className='education__semwisegrade'>Semester Wise Grade Card</h3>
                <div className='education__details__semgradecard'>
                  <a href={SEM1} className='btn btn-primary' target='_blank'>Semester 1</a>
                  <a href={SEM2} className='btn btn-primary' target='_blank'>Semester 2</a>
                  <a href={SEM3} className='btn btn-primary' target='_blank'>Semester 3</a>
                  <a href={SEM4} className='btn btn-primary' target='_blank'>Semester 4</a>
                  <a href={SEM5} className='btn btn-primary' target='_blank'>Semester 5</a>
                  <a href={SEM6} className='btn btn-primary' target='_blank'>Semester 6</a>
                </div>
              </article>
            </div>        
          </article>
        </div>
        <div>
          <h3>Shri Krishna Ramruchi College, Barbigha</h3>
          <article className="education__details">
            <div>
              <h4>Discipline : Physics, Chemistry, Mathematics, English, Hindi</h4>
              <h4>Degree : BSEB (2017-2019)</h4>
              <small>Grade : 87.2%</small>
            </div>    
            <div className="education__gradecardfull">
              <a href={XII} className='btn btn-primary' target='_blank'>Final Marks Sheet</a>
            </div>        
          </article>
        </div>
        <div>
          <h3>St. Mary's English school, Barbigha</h3>
          <article className="education__details">
            <div>
              <h4>Discipline : Science, Mathematics, Hindi, English, Social Sciences</h4>
              <h4>Degree : CBSE (2017)</h4>
              <small>Grade : 10 / 10 (CGPA)</small>
            </div>    
            <div className="education__gradecardfull">
              <a href={X} className='btn btn-primary' target='_blank'>Final Marks Sheet</a>
            </div>        
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education