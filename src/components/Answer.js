const Answer = ({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) => {
    const letterMap = ["A", "B", "C", "D"]
    const isCorrect = currentAnswer && answerText === correctAnswer;
    const isWrong = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctClass = isCorrect ? 'correct-answer' : '';
    const wrongClass = isWrong ? 'wrong-answer' : '';
    const disableClass = currentAnswer ? 'disabled-answer' : '';

    return (
        <div
            className={`answer ${correctClass} ${wrongClass} ${disableClass}`}
            onClick={() => onSelectAnswer(answerText)}>
            <div className="answer-letter">{letterMap[index]}</div>
            <div className="answer-text">{answerText}</div>
        </div>
    )
}

export default Answer