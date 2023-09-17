/* eslint-disable react/prop-types */
import { useEffect } from 'react'
// import Image from '../assets/RecipeHompage.jpeg'
export default function Projects(props) {
  useEffect(()=>{
    props.setLocation({
          home:false,
          about:false,
          resume:false,
          projects:true
      })
  },[])
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='recipeDiv'>
        <h3>Food Finder</h3>
        <img src='https://img.freepik.com/free-vector/people-learning-how-cook-from-books-internet_52683-37178.jpg?size=626&ext=jpg&ga=GA1.1.909629623.1693878013&semt=sph' alt="RecipeHomepage" className='recipeHomepage' />
        <a href="https://main--steady-starburst-7ce980.netlify.app/" className='proLink'>Find A Recipe</a>
        <p>Food Finder is a simple application that uses a recipe API.
          The user is able to search for recipes based on food item, cuisine, dietary restrictions
          and the type of meal
        </p>
        
      </div>
    </div>
  )
}
