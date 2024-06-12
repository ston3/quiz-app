import { Questions } from "./Questions"

export const Quiz = () => {
  const onNext = () => {

  }

  const onPrev = () => {
    
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz</h1>
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
