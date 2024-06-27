import { useEffect, useState } from "react"
import { Questions } from "./Questions"
import { useSelector, useDispatch } from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion"
import { PushAnswer } from "../hooks/setResult"

export const Quiz = () => {
  const [check, setChecked] = useState(undefined)
  const state = useSelector(state => state)
  const { queue, trace } = useSelector(state => state.questions)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state)
    
  })
  const onNext = () => {
    console.log('On next click')

    if(trace < queue.length) {
      dispatch(MoveNextQuestion())
      dispatch(PushAnswer(1))
    }
  }

  const onPrev = () => {
    console.log('On Prev click')

    if(trace > 0) dispatch(MovePrevQuestion())
  }

  const onChecked = check => {
    console.log(check)
    setChecked(check)
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions onChecked={onChecked}/>
      {

      }
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>Prev</button>
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
