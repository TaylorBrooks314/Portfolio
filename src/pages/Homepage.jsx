/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Image from '../assets/Taylor-Brooks.jpg'
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
        <div>
        <img src={Image} alt="headshot" className='headshot'/>
        </div>
        <h1 className='name'>Taylor Brooks</h1>
        <p className='title'>Software Engineer</p>
        <p>Welcome to my portfolio!</p>
    </div>
    )
}