import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { QuestionsContext } from '../../contexts/questions'

function GroupButtons() {

    const { setAmount } = useContext(QuestionsContext)

    return (
        <>
            <div style={{width: "100%", display: "flex", flexDirection: 'row', flexWrap: "wrap"}}>
                <Button style={{marginRight: 5, marginBottom: 5}} onClick={(e) => setAmount(Number(e.currentTarget.innerText))} color="primary" variant="contained">05</Button>
                <Button style={{marginRight: 5, marginBottom: 5}} onClick={(e) => setAmount(Number(e.currentTarget.innerText))} variant="contained">10</Button>
                <Button style={{marginRight: 5, marginBottom: 5}} onClick={(e) => setAmount(Number(e.currentTarget.innerText))} variant="contained">15</Button>
                <Button style={{marginRight: 5, marginBottom: 5}} onClick={(e) => setAmount(Number(e.currentTarget.innerText))} variant="contained">25</Button>
                <Button style={{marginRight: 5, marginBottom: 5}} onClick={(e) => setAmount(Number(e.currentTarget.innerText))} variant="contained">30</Button>
            </div>
        </>

    )
}

export { GroupButtons }