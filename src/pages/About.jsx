/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react"

export default function About(props) {
 useEffect(()=>{
  props.setLocation({
        home:false,
        about:true,
        resume:false,
        projects:false
    })
 },[])
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        In 2022, while in college, I stumbled upon a computer science class
        and signed up. I thought it sounded intresting. Never did I imagine that 
        I would end up loving coding so much that I would leave college and join a coding bootcamp.
        However that is exactly what I did.</p>
      <p>
        In May of 2023 I start with Activate Work powered by Per Scholas. I graduated from that 
        program in early September 2023. Through that bootcamp I learned Javascript, HTML, CSS, and the MERN
        Stack (MongoDB, Express, React, Node). I also got the opportunity to develop my transferable skills 
        like --------ENTER SOFT SKILLS HERE----------
      </p>
      <p>
        Now that I have graduated, my main focus is learning as much coding as I can 
        and getting as much experience as I can. I have some ideas for personal projects I will be 
        working on and developing over these next few weeks and I plan to join a hackathon that takes
        place in October of 2023. My main motivation for coding is that fact that it provides me with 
        chance to use my knowledge and problem solving skills to create something that can be a solution
        to someone's issues and impact their life. This leads me to find a company to work for that is
        people oriented and aligns with my values.----MAYBE ADD SOME VALUES-------  
      </p>
      <p>
        When I am not coding you can find me fishing, hiking, hanging out with my husband and son, 
        or solving a puzzle of some sort.
      </p>
    </div>
  )
}
