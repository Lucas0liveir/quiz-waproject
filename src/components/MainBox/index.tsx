import React, { useContext, useState } from "react";
import { QuestionsContext } from '../../contexts/questions'
import { Container, Grow } from '@mui/material'
import { useStyles } from "./styles.mui";
import Button from '@mui/material/Button'
import { Resume } from "../Resume"

function MainBox() {
	const [resume, setResume] = useState<boolean>(false)
	const classes = useStyles()
	const { score, showScore, questions, currentQuestion, handleAnswerOptionClick } = useContext(QuestionsContext)

	if (questions.length === 0) {
		const url = window.location.origin
		window.location.href = url
	}
	
	const growQuestions = (
		<Container className={classes.container}>
			<>
				<div className={classes.questions}>
					<div className={classes.questionCount}>
						<span className={classes.span}>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className={classes.questionText}>
						{questions.length > 1 && questions[currentQuestion].questionText}
					</div>
				</div>
				<div className={classes.answerSection}>
					{questions.length > 1 && questions[currentQuestion].answerOptions.map((answerOption) => (
						<React.Fragment key={answerOption.answerText} >
							<div key={answerOption.answerText} className={classes.spacing} />
							<Button className={classes.spacing} variant="contained"
								onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}
							</Button>
						</React.Fragment>
					))}
				</div>
			</>
		</Container>
	)
	return (
		<div className={classes.root}>
			{showScore ? (
				<>
					<div className={classes.score}>
						<h2 style={{ margin: 0 }}>You scored {score} points out of {questions.length}</h2>
					</div>
					{!resume ?
						(
							<Button onClick={() => setResume(true)} variant="contained">Resume</Button>
						)
						:
						(
							<Resume resume={resume} questions={questions} setResume={setResume}/>
						)

					}

				</>

			)

				: (
					<Grow in={!showScore}>
						{growQuestions}
					</Grow>
				)
			}
		</div >



	)

}

export default MainBox