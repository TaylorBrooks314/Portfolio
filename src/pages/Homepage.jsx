/* eslint-disable react/prop-types */
import Image from '../assets/Taylor-Brooks.jpg'
import { useEffect } from 'react'
import {ReactTyped} from 'react-typed'
import Cert from '../assets/TaylorBrookscert.png'
import About from './About'
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
        <h2>
            <ReactTyped  className='Typed'
            strings={[
                'Hello, my name is Taylor Brooks.',
                'I am a full stack software engineer.',
                'Welcome to my portfolio!']}
                typeSpeed={40}
                backSpeed={50}
                loop/>

        </h2>
        <About/>
        <h2>
            Certifications
        </h2>
        <img src={Cert} alt="Activate Work Bootcamp Certification"  className='AWCert'/>
    </div>
    )
}