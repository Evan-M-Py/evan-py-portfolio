import React from "react";

import BioSideSelector from './BioSideSelector'

const BottomBio = props => {

const style ={ 
    bioBox: {
        width: '50vw',
        height: '35vh'
    }
}

    return (
        <div className='wrapper'>

            <div style={style.bioBox}>
                <BioSideSelector/>
            </div>
            
        </div>
    )
};

export default BottomBio;