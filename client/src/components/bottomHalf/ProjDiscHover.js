import React from "react";


const ProjectDiscHover = props => {

    const style = {
        titleHover: {

        },
        hooverBox: {
            width: '20vw',
            margin:'8px'
        }
    }

    return (
        <div style={style.hooverBox} className="wrapper">
            <div style={style.titleHoover}>
                <h2>Crusine</h2>
                <a href="https://github.com/Evan-M-Py/project-three">Crusine GitHub Repo</a>
            </div>

            <div style={style.titleHoover}>

            </div>

            <div style={style.titleHoover}>

            </div>
            
        </div>
    )
};

export default ProjectDiscHover;