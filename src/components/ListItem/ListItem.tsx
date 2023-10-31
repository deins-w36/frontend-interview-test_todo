/* VENDOR */
import { useState } from 'react'
import { useSelector } from 'react-redux'

/* APPLICATION */
import edit from '../../icons/edit.svg'
import remove from '../../icons/remove.svg'
import { selectAllCategories } from '../../store/reducers/categoriesSlice'
import ModalEditItem from '../ModalOptions/ModalEditItem'
import ModalRemoveItem from '../ModalOptions/ModalRemoveItem'

interface ListItemProps {
    item: {
        id: string
        name: string
        description: string
        category?: string
    }
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const { name, category, description } = item

    const categories = useSelector(selectAllCategories)
    const [editModalActive, setEditModalActive] = useState(false)
    const [removeModalActive, setRemoveModalActive] = useState(false)

    return (
        <>
            <li className='list-item'>
                <div className='list-item-col1'>
                    <div className='list-item-col1-row1'>
                        <h3 className='list-item-col1-row1__title'>{name}</h3>
                        {category && (
                            <span className='list-item-col1-row1__category'>
                                {categories.find((el) => el.id === category)?.name || ''}
                            </span>
                        )}
                    </div>
                    <div className='list-item-col1-row2'>{description}</div>
                </div>
                <div className='list-item-col2'>
                    <button className='list-item-col2__btn' onClick={() => setEditModalActive(true)}>
                        <img src={edit} alt='edit' />
                    </button>
                    <button className='list-item-col2__btn' onClick={() => setRemoveModalActive(true)}>
                        <img src={remove} alt='remove' />
                    </button>
                </div>
                <ModalEditItem item={item} active={editModalActive} setActive={setEditModalActive} />
                <ModalRemoveItem item={item} active={removeModalActive} setActive={setRemoveModalActive} />
            </li>
        </>
    )
}
export default ListItem
