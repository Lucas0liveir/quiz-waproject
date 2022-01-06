import Card from "../../components/Card"
import NavBar from "../../components/NavBar"
import { IQuestionsHelper } from '../../contexts/questions'
import { useContext } from "react"
import { QuestionsContext } from "../../contexts/questions"
import { useEffect, useState } from "react"
import { Grid, Typography } from '@mui/material'
import { makeStyles } from "@material-ui/styles"
import Skeleton from 'react-loading'

export default function History() {

    const [savedQuestions, setSavedQuestions] = useState<IQuestionsHelper[] | null>([])
    const { setOnResume, onResume } = useContext(QuestionsContext)

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            marginTop: 100,
            marginLeft: onResume ? 0 : 50,
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    })

    const classes = useStyles()


    useEffect(() => {
        const HelperQuestions = localStorage.getItem('@quizSavedQuestions')
        if (HelperQuestions) {
            setSavedQuestions(JSON.parse(HelperQuestions))
        }
        else {
            setSavedQuestions(null)
        }
    }, [])

    if (savedQuestions?.length === 0) {
        return (
            <Skeleton />
        )
    }
    return (
        <>
            <NavBar />
            <div className={classes.root}>

                {savedQuestions ?
                    <>
                        <Grid container spacing={2}>
                            {savedQuestions.map((element, index) => (
                                <Grid key={index} item>
                                    <Card setOnResume={setOnResume} onResume={onResume} savedQuestion={element} />
                                </Grid>
                            )

                            )

                            }

                        </Grid>
                    </>
                    : (
                        <>
                            <Typography variant='h4'> Ops... You still haven't answered any quiz. </Typography>

                        </>)

                }
            </div>
        </>

    )
}
