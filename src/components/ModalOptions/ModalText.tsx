interface ModalTextProps {
    text: string
}

const ModalText: React.FC<ModalTextProps> = ({ text }) => {
    return <p className='modal__content-text'>{text}</p>
}
export default ModalText
