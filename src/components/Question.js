import { useContext } from "react"
import Answer from "./Answer"
import { QuizContext } from "../context/quiz"

const Question = () => {
    const [quizState] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                <Answer></Answer>
                <Answer></Answer>
                <Answer></Answer>
                <Answer></Answer>
            </div>
        </div>
    )
}

export default Question