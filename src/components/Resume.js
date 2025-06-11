import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import java from "url:../../public//assets/resumes/java.pdf";
import python from "url:../../public/assets/resumes/python.pdf"



const resumes = {
  Java: {
    description: "I am a Java developer and i have my resume attached  highlighting experience with Spring Boot and REST APIs.",
    file: java
    // file: new URL("../../public/resumes/java.pdf", import.meta.url).href,
  },
  Python: {
    description: "I am a Python developer and i have my resume focusing on Django, Flask, and data analysis.",
    file: python
    // file: new URL("../../public/resumes/python.pdf", import.meta.url).href,
  },
};

//component
 const Resume = () => {
  const [selected,setSelected]=useState("");
const[description,setDescription]=useState("");
const[email,setEmail]=useState("");


//submit function
// const submitFunction=(e)=>{
// e.preventDefault();
// if(!selected || !email){
//   alert("Please select a resume and enter an email.");
//       return;
// }
// alert("Resume sent successfully!");

// }
const submitFunction = (e) => {
  e.preventDefault();

  if (!selected || !email) {
    alert("Please select a resume and enter an email.");
    return;
  }
  const templateParams = {
    user_email: email,
    resume_description: description,
    resume_link: resumes[selected].file,
  };

  emailjs.send(
    'service_5hp1wqd',
    'template_a6awwkn',
    templateParams,
    'S4ndBfOqSW4IiTX3Y'
  )
  .then((response) => {
    console.log("SUCCESS!", response.status, response.text);
    alert("Email sent successfully!");
  })
  .catch((error) => {
    console.error("FAILED...", error);
    alert("Failed to send email.");
  });
  console.log("Sending to:", templateParams.user_email);
};
  
  return (
    <div className='container'>
        <h1>Select resume</h1>
      {/* dropdown button */}
        <select className='drop' value={selected} onChange={(e)=>{
          const value = e.target.value;
          setSelected(value);
    setDescription(resumes[value]?.description || "");
        }}>
        <option value="">-- Select --</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
{/* description of resume */}
{selected&&(
  <div>
    <textarea
    value={description}
    onChange={(e)=>{
      setDescription(e.target.value);

    }}
      rows="10"
      placeholder='Resume description'
     >

     </textarea>
  </div>
  
)}
{selected&&resumes[selected]&&(
<div className='resume-link'>
<a href={resumes[selected].file} target="_blank" rel="noreferrer">
              View {selected} Resume
            </a>
  </div>
)}
{/* input box for resume sending */}
<input type="email"
value={email}
placeholder="please enter your email"

onChange={(e)=>{
  setEmail(e.target.value);
}}
/>

      {/* submit button */}
      <button className='btn' onClick={submitFunction}
      >Submit</button>

        </div>


  )
  
}


export default Resume;