/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import PDF from '../assets/Resume.docx.pdf'
// import icon from '../assets/downloadIcon.png'
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
      <h2>Resume</h2>
      <iframe src={PDF} frameBorder='0'></iframe>
      {/* <a href={PDF} download={PDF}>
        <img src={icon} alt="download button" />
      </a> */}
    </div>
  )
}
