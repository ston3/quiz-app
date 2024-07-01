import { Link } from 'react-router-dom'
import '../styles/Result.css'
import { ResultTable } from './ResultTable'
import { useDispatch } from 'react-redux'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'

export const Result = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tuition</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points:</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions:</span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
        <span>Total Earn Points</span>
        <span className="bold">30</span>
        </div>
        <div className="flex">   
          <span>Quiz Result</span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link 
          className='btn' 
          to={'/'}
          onClick={onRestart}
        >
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  )
}
