import { QuizContext } from "../context/quiz";
import Question from "./Question"
import { useContext } from "react"

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.currentQuestionIndex + 1
    const totalQuestions = quizState.questions.length
    console.log('quizState', quizState)
    return (
        <div className="quiz">
            <div>
                <div className="score">Question {currentQuestion}/{totalQuestions}</div>
                <Question />
                <div className="next-button" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
                    Next question
                </div>
            </div>
        </div>
    )
}

export default Quiz