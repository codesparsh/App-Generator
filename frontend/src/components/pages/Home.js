import React,{useState} from 'react'
import CreateElement from '../CreateElement'

function Home() {
    const [heading,setHeading] = useState()

    return (
        <div className="fluid-container">
          <CreateElement />
        </div>
    )
}

export default Home
