import { useEffect } from "react"
import { Questions } from "./Questions"
import { useSelector } from "react-redux"

export const Quiz = () => {
  const { questions } = useSelector(state => state)

  useEffect(() => {
    console.log(questions)
  })
  const onNext = () => {

  }

  const onPrev = () => {
    
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
