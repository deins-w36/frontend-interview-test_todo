/* VENDOR */
import { Route, Routes } from 'react-router-dom'

/* APPLICATION */
import './App.css'
import Header from '../components/Header/Header'
import Tasks from '../components/Lists/Tasks'
import Categories from '../components/Lists/Categories'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/categories' element={<Categories />} />
                <Route index element={<Tasks />} />
            </Routes>
        </div>
    )
}

export default App
