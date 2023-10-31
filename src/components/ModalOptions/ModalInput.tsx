import classNames from 'classnames'
import important from '../../icons/important.svg'

interface ModalInputProps {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    size?: 'large'
}
const ModalInput: React.FC<ModalInputProps> = (props) => {
    const { name, setName, size } = props
    return (
        <div className={classNames('modalinput-wrapper', { large: size === 'large' })}>
            <input
                id='modalinput'
                className='modalinput'
                placeholder='Введите имя задачи/категории'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <img src={important} alt='important' className='modalinput-icon' />
            <label htmlFor='modalinput'>Имя</label>
        </div>
    )
}

export default ModalInput
