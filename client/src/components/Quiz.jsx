import { useEffect } from "react"
import { Questions } from "./Questions"
import { useSelector, useDispatch } from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion"

export const Quiz = () => {
  const { queue, trace } = useSelector(state => state.questions)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(trace)
    
  })
  const onNext = () => {
    console.log('On next click')

    if(trace < queue.length) dispatch(MoveNextQuestion())
  }

  const onPrev = () => {
    console.log('On Prev click')

    if(trace > 0) dispatch(MovePrevQuestion())
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <Questions />
      {

      }
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>Prev</button>
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
