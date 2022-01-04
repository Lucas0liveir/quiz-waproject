import { useContext } from "react";
import { QuestionsContext } from '../../contexts/questions'
import { Button, Container, Stack } from '@mui/material'
import { GroupButtons } from '../GroupButtons'
import { useStyles } from './styles.mui'
import { Link } from "react-router-dom";

function StartBox() {

    const classes = useStyles()
    const { amount, setAmount } = useContext(QuestionsContext)

    return (
        <Container >
            {amount > 0 ? (
                <div className={classes.root}>
                    <h2>Are you ready?</h2>
                    <Stack className={classes.stack} spacing={2} direction="row" flexWrap={'wrap'}>
                        <Button style={{width: '40%', marginBottom: 10}} color="success" variant="contained"><Link style={{textDecoration: 'none', color: '#fff' }} to='/quiz'>Start</Link></Button>
                        <Button style={{width: '40%', marginBottom: 10}} onClick={() => setAmount(0)} color="error" variant="contained">Cancel</Button>
                    </Stack>

                </div>
            ) :
                <div className={classes.contentButtons}>
                    <h1>
                        How many Questions you want to answer?
                    </h1>
                    <div className={classes.groupButtons}>
                        <GroupButtons />
                    </div>
                </div>
            }
        </Container >
    )
}

export default StartBox