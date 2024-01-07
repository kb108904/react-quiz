import { QuizContext } from "../context/quiz";
import Question from "./Question"
import { useContext } from "react"

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.currentQuestionIndex + 1
    const totalQuestions = quizState.questions.length
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have complete the quiz</div>
                        <div>You got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    <div className="next-button"
                    onClick={() => dispatch({ type: 'RESTART' })}
                    >Restart</div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">Question {currentQuestion}/{totalQuestions}</div>
                    <Question />
                    <div className="next-button" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
                        Next question
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz