import { useEffect, useState } from "react"
import data from '../data'
import { useFetchQuestion } from "../hooks/FetchQuestion"
import { useSelector } from "react-redux"


export const Questions = () => {
  const [checked, setChecked] = useState(undefined)
  const [{
    isLoading,
    apiData,
    serverError
  }, setGetData ] = useFetchQuestion()

  const questions = useSelector(state => state.questions.queue[state.questions.trace])

  useEffect(()=> {
    console.log(data)
  },[])

  const onSelect = () => {

  } 

  if(isLoading) return <h3 className="text-light">is Loading...</h3>
  if(serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions.id}>
      {
        questions.options.map((q,i) => ( 
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
