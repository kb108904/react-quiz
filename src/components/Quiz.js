import Question from "./Question"
import { useState } from "react"

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const testClick = () => {
        console.log("Test Click")
        setCurrentQuestionIndex(currentQuestionIndex+1)
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question />
                <div className="next-button" onClick={testClick}>
                    Next question {currentQuestionIndex}
                </div>
            </div>
        </div>
    )
}

export default Quiz