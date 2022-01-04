import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Home from './routes/home'
import History from './routes/history'
import Quiz from './routes/quiz'
import './global.css'

function App() {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
