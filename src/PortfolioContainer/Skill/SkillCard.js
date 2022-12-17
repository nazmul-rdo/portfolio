import React from 'react'

const SkillCard = ({ skills }) => {
    console.log(skills)
    return (
        <div className="skill-card">
            <div className="skill-title">
                <h4>{skills.skillName}</h4>
                <p>{skills.percentage}%</p>
            </div>
            <div className="progress-bar">
                <progress id="file" value={skills.percentage} max="100"></progress>
            </div>
        </div>
    )
}

export default SkillCard