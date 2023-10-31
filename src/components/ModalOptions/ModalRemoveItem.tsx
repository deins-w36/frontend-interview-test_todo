/* VENDOR */
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

/* APPLICATION */
import Modal from './Modal/Modal'
import ModalHeader from './ModalHeader'
import ModalText from './ModalText'
import ModalFooter from './ModalFooter'
import { tasksRemoved, tasksClearedCategories } from '../../store/reducers/tasksSlice'
import { categoriesRemoved } from '../../store/reducers/categoriesSlice'
import { useCallback } from 'react'

interface ModalRemoveItemProps {
    item: {
        id: string
        name: string
        description: string
        category?: string
    }
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalRemoveItem: React.FC<ModalRemoveItemProps> = (props) => {
    const { item, active, setActive } = props
    const { id, name } = item
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const isCategories = pathname.includes('categories')
    const text = `Вы уверены, что хотите удалить категорию "${name}"?`

    const handleSubmit = useCallback((): void => {
        if (isCategories) {
            dispatch(categoriesRemoved(id))
            dispatch(tasksClearedCategories(id))
        } else {
            dispatch(tasksRemoved(id))
        }
        // eslint-disable-next-line
    }, [isCategories, id])

    return (
        <Modal item={item} active={active} setActive={setActive}>
            <ModalHeader setActive={setActive} title={'Удаление задачи'} />
            <ModalText text={text} />
            <ModalFooter setActive={setActive} submitBtnText='Да' onSubmit={handleSubmit} />
        </Modal>
    )
}

export default ModalRemoveItem
