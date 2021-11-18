import React from "react";

const customHero = () => {
 const p = window.location.pathname.split('/');
 const page = p[1];
 

    return (
            <header className="customHeader">
                
                <p className="text-center">{page}</p>
            </header>
        
    )
}

export default customHero
