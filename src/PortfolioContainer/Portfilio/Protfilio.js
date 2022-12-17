import React from 'react'
import Project from './Project'
import './protfilio.css'

const Protfilio = () => {
    let projectInfo =[
        {
            id:1,
            name:"Cuntom Clock",
            dese:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea vitae excepturi vero temporibus velit fugiat? Fugit ex ad quisquam soluta quidem minus. Laboriosam quam similique quasi, consequuntur ducimus dolor!",
            github:"https://github.com/nazmul-rdo/custom-clock",
            view:"https://customclockjs.netlify.app/"
        },
        {
            id:2,
            name:"Red Light Green Light",
            dese:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea vitae excepturi vero temporibus velit fugiat? Fugit ex ad quisquam soluta quidem minus. Laboriosam quam similique quasi, consequuntur ducimus dolor!",
            github:"https://github.com/nazmul-rdo/red-light-green-light",
            view:"https://nazmul-rdo.github.io/red-light-green-light/"
        },
        {
            id:2,
            name:"Latitude Longitude Finder",
            dese:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea vitae excepturi vero temporibus velit fugiat? Fugit ex ad quisquam soluta quidem minus. Laboriosam quam similique quasi, consequuntur ducimus dolor!",
            github:"https://github.com/nazmul-rdo/Latitude-Longitude_Finder-javascript",
            view:"https://latlonjs.netlify.app/"
        },
    ]
    return (
        <section>
            <div className="container">
                <div className="skill-heading">
                    <h2>My Protfilio</h2>
                </div>
                <div className="Protfilio-container">
                    <div className="portfolio-items">
                        {projectInfo.map((project)=>(
                            <Project key={project.id} project={project} />
                        ))}

                        

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Protfilio