/* VENDOR */
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

/* APPLICATION */
import Modal from './Modal/Modal'
import ModalHeader from './ModalHeader'
import ModalInput from './ModalInput'
import ModalRow from './ModalRow'
import ModalTextarea from './ModalTextarea'
import ModalFooter from './ModalFooter'
import { tasksAdded } from '../../store/reducers/tasksSlice'
import { categoriesAdded } from '../../store/reducers/categoriesSlice'

interface ModalCreateItemProps {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCreateItem: React.FC<ModalCreateItemProps> = ({ active, setActive }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const isCategories = pathname.includes('categories')
    const [name, setName] = useState('')
    const [selected, setSelected] = useState('')
    const [description, setDescription] = useState('')
    
    const clearState = (): void => {
        setName('')
        setDescription('')
        setSelected('')
    }

    const handleSubmit = useCallback((): void => {
        if (!name) return

        if (isCategories) {
            dispatch(categoriesAdded({ name, description }))
        } else {
            dispatch(
                tasksAdded({
                    name,
                    description,
                    category: selected
                })
            )
        }

        clearState()
        setActive(false)
        // eslint-disable-next-line
    }, [name, description, setSelected, isCategories, selected])

    return (
        <Modal active={active} setActive={setActive} clearState={clearState}>
            <ModalHeader
                clearState={clearState}
                setActive={setActive}
                title={isCategories ? 'Создание категории' : 'Создание задачи'}
            />
            {isCategories ? (
                <ModalInput name={name} setName={setName} size='large' />
            ) : (
                <ModalRow name={name} setName={setName} selected={selected} setSelected={setSelected} />
            )}
            <ModalTextarea description={description} setDescription={setDescription} />
            <ModalFooter
                setActive={setActive}
                clearState={clearState}
                submitBtnText='Создать'
                size='large'
                onSubmit={handleSubmit}
            />
        </Modal>
    )
}
export default ModalCreateItem
