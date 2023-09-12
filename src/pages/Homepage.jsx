/* eslint-disable react/prop-types */
import Image from '../assets/Taylor-Brooks.jpg'
import { useEffect } from 'react'
import Typed from 'react-typed'
import github from '../assets/GitHub_Logo.png'
import linkedin from '../assets/LinkedIn-Blue-14@2x.png'
export default function Homepage(props){
    useEffect(()=>{
        props.setLocation({
                home:true,
                about:false,
                resume:false,
                projects:false
            })
    },[])
    return(
    <div className="homepage">
       
        <h1 className='name'>Taylor Brooks</h1>
        <img src={Image} alt="headshot" className='headshot'/>
        {/* <p className='title'>Software Engineer</p> */}
        <h2>
            <Typed
            strings={[
                'Hello, my name is Taylor Brooks.',
                'I am a full stack software engineer.',
                'Welcome to my portfolio!']}
                typeSpeed={40}
                backSpeed={50}
                loop/>

        </h2>
        <div className='connect'>
            <a href="https://github.com/TaylorBrooks314">
                <img src={github} alt="GitHub"  className='github'/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-brooks-72a501269/">
                <img src={linkedin} alt="Linkedin"  className='linkedin'/>
            </a>
        </div>
    </div>
    )
}