import React from 'react'
import { useStyles } from './styles.mui'
import { IQuestionsHelper } from '../../contexts/questions'
import { Resume } from '../Resume'
import { Button, CardActions } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

type ISavedQuestion = {
    onResume: boolean
    setOnResume: React.Dispatch<React.SetStateAction<boolean>>
    savedQuestion: IQuestionsHelper
}

export default function HistoryBox({ savedQuestion, onResume, setOnResume }: ISavedQuestion) {

    const [resume, setResume] = useState<boolean>(false)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {resume ?
                <>
                    <div className={classes.resume}>
                        <Resume resume={resume} questions={savedQuestion.questions} setResume={setResume} />
                    </div>
                </>

                :
                !onResume &&
                <div className={classes.cards}>
                    <Card style={{width: 200, paddingBottom: 10}}>
                        <CardContent>
                            <Typography variant='subtitle1'>
                                You scored {savedQuestion.score} points
                            </Typography>
                            <div style={{ marginTop: 10 }} />
                            <Typography variant='subtitle2'>
                                {savedQuestion.date}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setResume(!resume)
                                setOnResume(true)
                            }} variant='outlined'>Details</Button>
                        </CardActions>
                    </Card>
                </div>
            }

        </div>
    )
}
