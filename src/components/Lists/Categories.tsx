/* VENDOR */
import { useSelector } from 'react-redux'

/* APPLICATION */
import ListItem from '../ListItem/ListItem'
import { selectAllCategories } from '../../store/reducers/categoriesSlice'

const Categories: React.FC = () => {
    const categories = useSelector(selectAllCategories)

    return (
        <ul>
            {categories.map((category) => (
                <ListItem key={category.id} item={category} />
            ))}
        </ul>
    )
}
export default Categories
