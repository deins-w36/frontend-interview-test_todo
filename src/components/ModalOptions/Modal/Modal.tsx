/* VENDOR */
import React from 'react'

/* APPLICATION */
import './Modal.css'
import classNames from 'classnames'

interface ModalProps {
    item?: {
        id: string
        name: string
        description: string
        category?: string
    }
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    clearState?(): void
}

const Modal: React.FC<ModalProps> = (props) => {
    const { clearState, active, setActive, children } = props
    return (
        <div
            className={classNames('modal', active && 'active')}
            onClick={() => {
                clearState?.()
                setActive(false)
            }}
        >
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default Modal
