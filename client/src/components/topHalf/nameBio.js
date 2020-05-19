import React from "react";
import Wrapper from '../wrapper'

function NameBio(props)  {

    const style = {
        
        name: {
            color: '#d3d3d3',
            fontSize: '48pt'
        },
        shortBio: {
            lineHeight: '1.9',
            color: '#8b8b8b'
        }
    }

    return (
        
        <div  style={props.nameBioStyle}>
            <h1 className="fontFam" style={style.name}>Evan Pylar</h1>
                <p className="fontFam" style={style.shortBio}>
                While studying web development at the University of Arizona I focused on the spaces between front and back end development. 
                Efficiently linking an accessable UI to a coherent and  methodical back end is essential in building sustainable native applications. 
                The potential of modern technology knows no bounds, with percise code and innovative ideas I plan on being a part of the its evolution.
                </p>
        </div>

    )
};

export default NameBio;