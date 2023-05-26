import { useState } from 'react';
import './App.css';
import Title from './Components/Title';
import RandomizeColors from './Components/RandomizeColors';
function Home() {
  const[name, setName]=useState("Title");
  const[date, setDate]=useState("");
  const[font, setFont]=useState("");

  const handleChange=(e)=>{
    setName(e.target.value);
  }
  const handleDateChange=(e)=>{
    setDate(e.target.value);
  }

  const handleFontChange = (e)=>{
    setFont(e.target.value);
  }



  return (
    <div>
      <Title title={name} dates={date} fonts={font}/>
      <input type="text" onChange={handleChange}/>
      <input type="date" name="" id="" onChange={handleDateChange}/>
      <label htmlFor="fonts">Choose the font:</label>
      <select name="" id="fonts" onChange={handleFontChange}>
      <option value="">Clear</option>
      <option value="'Roboto', sans-serif">Roboto</option>
      <option value="'Roboto Condensed', sans-serif">Roboto Condensed</option>
      </select>
      <RandomizeColors/>
    </div>
  );
}

export default Home;
