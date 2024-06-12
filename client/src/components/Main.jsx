import { useRef } from "react"
import { Link } from "react-router-dom"
import '../styles/Main.css'

export const Main = () => {
  const inputRef = useRef(null)

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>You will be asked 10 questions one after another.</li>
        <li>You will be asked 10 questions one after another.</li>
        <li>You will be asked 10 questions one after another.</li>
        <li>You will be asked 10 questions one after another.</li>
      </ol>

      <form action="" id="form">
        <input 
          className="userid"
          type="text"
          ref={inputRef} 
          placeholder="Unername*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  )
}
