import { useStyles } from './styles.mui'
import MainBox from '../../components/MainBox'
import NavBar from '../../components/NavBar'

export default function Quiz() {

    const classes = useStyles()

    return (
        <>
            <NavBar />
            <main className={classes.root}>
                <MainBox />
            </main>
        </>

    )
}