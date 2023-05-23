import React from 'react'
import ReactDOM from 'react-dom/client';

function SanityCheck(){
    return(
        <section>
            <h3>It Works!</h3>
        </section>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<SanityCheck/>)


