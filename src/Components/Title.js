import React from 'react'
import '../App.css'

export default function Title({dates, title, fonts}) { 
  const mystyle = {
    fontFamily: fonts
  }
  return (
    <div>
        <h2 style={mystyle}>{title? title: "Title"}</h2>
        <h2>{dates? dates: ""}</h2>
    </div>
  )
}
