import { useMutation, useQueryClient } from 'react-query'
import { deleteShark } from '../api/sharkApi';

/**
 * this component renders a Shark card and,
 * handles deleting this Shark resource
 */
const Shark = (props) => {
    const queryClient = useQueryClient();

    const deleteSharkMutation = useMutation(deleteShark, {
        onSuccess: (data) => {
            // invalidates cache and triggers a refetch
            queryClient.invalidateQueries('sharks');
            alert(data.data.message);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteSharkMutation.mutate(props.shark.id);
    }

    return (
        <div className="shark-container">
            <h3>{props.shark.name}</h3>
            <p>{props.shark.id}</p>
            <button className="button" onClick={handleSubmit}>Delete Shark</button>
        </div>
    );
}

export default Shark;