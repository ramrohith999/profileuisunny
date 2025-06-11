import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./components/Resume";



const AppLayout=()=>{
  return(
      <div className="app">
<Resume/>
      </div>

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

