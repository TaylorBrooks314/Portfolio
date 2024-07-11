/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import PDF from '../assets/Resume.docx.pdf'
export default function Resume(props) {
 useEffect(()=>{
  props.setLocation({
        home:false,
        about:false,
        resume:true,
        projects:false
    })
 },[])
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <iframe src={PDF} ></iframe>
      
    </div>
  )
}
