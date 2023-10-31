import ModalBtn from './ModalBtn/ModalBtn'

interface ModalFooterProps {
    clearState?: () => void
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    submitBtnText: string
    size?: 'large'
    onSubmit: () => void
}

const ModalFooter: React.FC<ModalFooterProps> = (props) => {
    const { clearState, setActive, submitBtnText, size, onSubmit } = props
    return (
        <footer className='modal__content-footer'>
            <ModalBtn type='primary' size={size || ''} onClick={onSubmit}>
                {submitBtnText}
            </ModalBtn>
            <ModalBtn
                onClick={() => {
                    clearState?.()
                    setActive(false)
                }}
            >
                Закрыть
            </ModalBtn>
        </footer>
    )
}
export default ModalFooter
