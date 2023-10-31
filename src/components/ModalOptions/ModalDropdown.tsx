/* VENDOR */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import React from 'react'

/* APPLICATION */
import down from '../../icons/down.svg'
import { selectAllCategories } from '../../store/reducers/categoriesSlice'
import classNames from 'classnames'

interface ModalDropdownProps {
    selected: string | undefined
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const ModalDropdown: React.FC<ModalDropdownProps> = React.memo(({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false)
    const options = useSelector(selectAllCategories)

    return (
        <div className='dropdown' onClick={() => setIsActive((prev) => !prev)}>
            <span className='dropdown-label'>Категория</span>
            <div className={classNames('dropdown-btn', { placeholder: !selected })}>
                {options.find((option) => option.id === selected)?.name || 'Выберите категорию'}
                <img src={down} alt='open dropdown' />
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map(({ id, name }) => (
                        <div
                            className='dropdown-item'
                            onClick={(e) => {
                                e.stopPropagation()

                                setIsActive(false)
                                setSelected(id)
                            }}
                            key={id}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
})
export default ModalDropdown
