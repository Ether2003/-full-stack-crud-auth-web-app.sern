import Shark from './Shark';
import { useQuery  } from 'react-query'
import { getSharks } from '../api/sharkApi';

/**
 * this component handles rendering a list of Shark components
 */
const SharkList = () => {
    const {
        isLoading,
        isError,
        error,
        data: sharks
    } = useQuery('sharks', getSharks);

    console.log(sharks)

    return (
        <div className="sharks-container">
            {sharks && sharks.sharks.map((shark) =>
                <Shark key={shark._id} shark={shark} />
            )}

            {error && <p>{error.message}</p>}
            {isLoading && <p>loading...</p>}
        </div>
    );
}

export default SharkList;