import React from 'react'

const Project = ({project}) => {
    return (
        <div className="portfolio">
            <div className="details">
                <h4>{project.name}</h4>
                <p>{project.dese}</p>
                <div className="Links">
                    <a href={project.github}>Github</a>
                    <a href={project.view}>View</a>
                </div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </div>
    )
}

export default Project