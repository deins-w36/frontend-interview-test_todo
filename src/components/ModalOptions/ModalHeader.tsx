import close from '../../icons/close.svg'

interface ModalHeaderProps {
    clearState?: () => void
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    title: string
}

const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
    const { clearState, title, setActive } = props
    return (
        <header className='modal__content-header'>
            <h4 className='modal__content-title'>{title}</h4>
            <button
                className='modal__content-header__btn'
                onClick={() => {
                    clearState?.()
                    setActive(false)
                }}
            >
                <img src={close} alt='close' />
            </button>
        </header>
    )
}
export default ModalHeader
