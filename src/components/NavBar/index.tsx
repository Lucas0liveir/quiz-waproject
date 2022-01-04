import { AppBar, Toolbar, Button, Stack } from "@mui/material"
import logo from '../../assets/logo.svg'
import { makeStyles } from "@material-ui/styles"
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    grow: {
        flexGrow: 1
    },
    logo: {
        position: 'fixed',
        width: 120,
        height: 60,
        marginLeft: 15
    }
})

export default function NavBar() {
    const url = window.location.origin
    const classes = useStyles()

    return (
        <div>
            <AppBar>
               <img className={classes.logo} src={logo} alt="logo" />

                <Toolbar>
                    <div className={classes.grow} />
                    <Stack spacing={2} direction='row'>
                        <Button onClick={()=> {
                            window.location.href = url
                        }} color='inherit' variant="outlined">Home</Button>
                        <Button color='inherit' variant="outlined"><Link style={{textDecoration: 'none', color: '#fff' }} to='/history'>History</Link></Button>
                    </Stack>
                </Toolbar>
            </AppBar>

        </div>
    )
}