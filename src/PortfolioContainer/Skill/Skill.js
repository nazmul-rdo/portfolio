import React from 'react'
import './skill.css'
import SkillCard from './SkillCard'

const Skill = () => {
  let skillInfo = [
    {
      id:1,
      skillName: "Html",
      percentage: "92",
    },
    {
      id:2,
      skillName: "Css",
      percentage: "95",
    },
    {
      id:3,
      skillName: "React",
      percentage: "70",
    },
    {
      id:4,
      skillName: "MongoDB",
      percentage: "85",
    }
    ,
    {
      id:5,
      skillName: "Bootstrap",
      percentage: "80",
    }
    ,
    {
      id:6,
      skillName: "MySql",
      percentage: "70",
    }

  ]
  return (
    <section id='skill'>
      <div className="container">
        <div className="skill-heading">
          <h2>My Skill</h2>
        </div>
        <div className="skill-container">

          {skillInfo.map((skills) => (
            <SkillCard key={skills.id} skills={skills} />
          ))}



        </div>
      </div>

    </section>
  )
}

export default Skill