import { useEffect, useState } from "react"
import data from '../data'


export const Questions = () => {
  const [checked, setChecked] = useState(undefined)
  const question = data[0]

  useEffect(()=> {
    console.log(data)
  },[])

  const onSelect = () => {

  } 

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul>
      {
        question.options.map((q,i) => ( 
            <li key={i + q}>
              <input 
                type="radio" 
                value={true}
                name="options"
                id={`q${i}-option`}
                onChange={onSelect}
              />
              <label htmlFor={`q${i}-option`}>{q}</label>
              <div className="check checked"></div>
              </li>
        ))
        }
      </ul> 

      
    </div>
  )
}
