import React from "react"
import "./Main.css"
import courses from "../../data/courses.json"
console.log(courses)
import Card from '../Card/Card'

export default function Main() {


    return (
      
       <div>
        {courses.map((course) => (
            <Card title={course.title} description={course.descriptoion} age={course.age} pic={course.pic} />
        ))}
        
       </div>
        
  
    )
  }
  
  