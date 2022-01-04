import React, { Dispatch, SetStateAction, useContext } from 'react'
import { QuestionsContext, IQuestion } from "../../contexts/questions"
import { useStyles } from "./styles.mui";
import { Button, Grow } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear';


type props = {
    resume: boolean;
    setResume: Dispatch<SetStateAction<boolean>>;
    questions: IQuestion[]
}

function Resume({ questions, resume, setResume }: props) {
    const classes = useStyles()
    const { onResume, setOnResume } = useContext(QuestionsContext)
    const myResume = (
        <div className={classes.root}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Button onClick={()=>{
                    if (onResume) {
                        setOnResume(false)
                        setResume(false)
                    } else {
                        window.location.href = `${window.location.origin}`
                    }
                }} variant='outlined'>X</Button>
            </div>

            {
                questions.map((question, index) => (
                    <>
                        <div className={classes.questions}>
                            <div className={classes.questionCount}>
                                <span className={classes.span}>Question {index + 1}</span>
                            </div>
                            <div className={classes.questionText}>
                                {question.questionText}
                            </div>
                        </div>
                        <div className={classes.answerSection}>
                            {question.answerOptions.map((answerOption, index) => (
                                <React.Fragment>
                                    <div className={classes.spacing} />
                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                                        <Button style={{ backgroundColor: answerOption.color, width: '95%' }} className={classes.spacing} variant='contained' >{answerOption.answerText}</Button>
                                        {answerOption.selected && answerOption.isCorrect && <CheckIcon style={{ marginRight: -2 }} color='success' /> ||
                                            answerOption.selected && !answerOption.isCorrect &&
                                            <ClearIcon style={{ marginRight: -22 }} color='error' />
                                        }
                                    </div>

                                </React.Fragment>
                            ))
                            }
                        </div>
                        <div className={classes.divisor} />
                    </>
                ))
            }
        </div>
    )
    return (
        <>
            {resume &&
                <>
                    <Grow in={resume} style={{ transformOrigin: '0 0 0' }}
                        {...(resume ? { timeout: 1000 } : {})}>
                        {myResume}
                    </Grow>
                </>
            }

        </>
    )
}

export { Resume }