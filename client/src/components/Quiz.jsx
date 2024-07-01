import { useState } from "react"
import { Questions } from "./Questions"
import { useSelector, useDispatch } from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion"
import { PushAnswer } from "../hooks/setResult"
import { Navigate } from "react-router-dom"

export const Quiz = () => {
  const [check, setChecked] = useState(undefined)
  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector(state => state.questions)
  const dispatch = useDispatch()
  
  const onNext = () => {
    console.log('On next click')

    if(trace < queue.length) {
      dispatch(MoveNextQuestion())

      if(result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }
  }

  const onPrev = () => {
    console.log('On Prev click')
    if(trace > 0) {dispatch(MovePrevQuestion())}
  }

  const onChecked = check => {
    console.log(check)
    setChecked(check)
  }

  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}/>
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions onChecked={onChecked}/>

      <div className="grid">
        { trace > 0 ? 
          <button className="btn prev" onClick={onPrev}>Prev</button>
          : 
          <div></div>
        }        
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
