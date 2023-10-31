import classNames from 'classnames'
import React from 'react'

import './ModalBtn.css'

interface ModalBtnProps {
    type?: string
    children: React.ReactNode
    size?: string
    onClick: () => void
}

const ModalBtn: React.FC<ModalBtnProps> = React.memo((props) => {
    const { type, children, size, onClick } = props

    const btnClass = classNames('modalbtn', {
        primary: type === 'primary',
        large: size === 'large' && type === 'primary'
    })

    return (
        <button className={btnClass} onClick={onClick}>
            {children && children}
        </button>
    )
})
export default ModalBtn
