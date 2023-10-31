/* VENDOR */
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

/* APPLICATION */
import Modal from './Modal/Modal'
import ModalHeader from './ModalHeader'
import ModalRow from './ModalRow'
import ModalInput from './ModalInput'
import ModalTextarea from './ModalTextarea'
import ModalFooter from './ModalFooter'
import { tasksUpdated } from '../../store/reducers/tasksSlice'
import { categoriesUpdated } from '../../store/reducers/categoriesSlice'

interface ModalEditItemProps {
    item: {
        id: string
        name: string
        description: string
        category?: string
    }
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalEditItem: React.FC<ModalEditItemProps> = (props) => {
    const { item, active, setActive } = props
    const { id } = item
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const isCategories = pathname.includes('categories')
    const [name, setName] = useState(item.name)
    const [selected, setSelected] = useState(item.category || '')
    const [description, setDescription] = useState(item.description)

    const handleSubmit = useCallback((): void => {
        if (isCategories) {
            dispatch(categoriesUpdated({ id, name, description }))
        } else {
            dispatch(
                tasksUpdated({
                    id,
                    name,
                    description,
                    category: selected
                })
            )
        }
        setActive(false)
        // eslint-disable-next-line
    }, [id, name, description, selected, isCategories])

    return (
        <Modal item={item} active={active} setActive={setActive}>
            <ModalHeader
                setActive={setActive}
                title={isCategories ? 'Редактирование категории' : 'Редактирование задачи'}
            />
            {isCategories ? (
                <ModalInput name={name} setName={setName} size='large' />
            ) : (
                <ModalRow name={name} setName={setName} selected={selected} setSelected={setSelected} />
            )}
            <ModalTextarea description={description} setDescription={setDescription} />
            <ModalFooter setActive={setActive} submitBtnText='Сохранить' size='large' onSubmit={handleSubmit} />
        </Modal>
    )
}
export default ModalEditItem
