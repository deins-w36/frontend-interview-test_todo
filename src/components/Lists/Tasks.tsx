/* VENDOR */
import { useSelector } from 'react-redux'

/* APPLICATION */
import ListItem from '../ListItem/ListItem'
import { selectAllTasks } from '../../store/reducers/tasksSlice'

const Tasks: React.FC = () => {
    const tasks = useSelector(selectAllTasks)

    return (
        <ul>
            {tasks.map((task) => (
                <ListItem key={task.id} item={task} />
            ))}
        </ul>
    )
}
export default Tasks
