import StartBox from '../../components/StartBox'
import NavBar from '../../components/NavBar'
import { useStyles } from './styles.mui'
import { Footer } from '../../components/Footer'

export default function Home() {

    const classes = useStyles()

    return (
        <>
            <NavBar />
            <main className={classes.root}>
                <StartBox />
            </main>
            <Footer />
        </>

    )
}