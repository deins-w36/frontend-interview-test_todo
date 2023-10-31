/* VENDOR */
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* APPLICATION */
import './Header.css'
import ModalCreateItem from '../ModalOptions/ModalCreateItem'
import classNames from 'classnames'

const Header = () => {
    const { pathname } = useLocation()
    const isCategories = pathname.includes('categories')
    const [createModalActive, setCreateModalActive] = useState(false)

    return (
        <header className='header'>
            <h1 className='header-title'>ToDo List</h1>
            <nav className='header-nav'>
                <ul className='header-list'>
                    <li className={classNames('header-list-item', !isCategories && 'header-list-item-active')}>
                        <Link to='tasks'>Задачи</Link>
                    </li>
                    <li className={classNames('header-list-item', isCategories && 'header-list-item-active')}>
                        <Link to='categories'>Категории</Link>
                    </li>
                </ul>
                <button className='header-button' onClick={() => setCreateModalActive(true)}>
                    {isCategories ? 'Добавить категорию' : 'Добавить задачу'}
                </button>
            </nav>
            <ModalCreateItem active={createModalActive} setActive={setCreateModalActive} />
        </header>
    )
}
export default Header
