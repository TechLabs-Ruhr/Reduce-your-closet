import React, {useState, useEffect} from "react";


export default function App() {
  const [resourceType, setResourceType] = useState('ABOUT SMARTROBE')

    return (
<>
        <div className="menu">
          <li onClick={() => setResourceType('ABOUT SMARTROBE') }> ABOUT SMARTROBE</li>
          <li onClick={() => setResourceType('MY CLOSET') }> MY CLOSET</li>
          <li onClick={() => setResourceType('MY STATYSTICS') }> MY STATYSTICS</li>
          <li onClick={() => setResourceType('SOMETHING ELSE') }> SOMETHING ELSE</li>
        </div>
        <h3 className="resource"> {resourceType} </h3>
        
        </>
    )
}