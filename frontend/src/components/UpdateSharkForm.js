import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query'
import { updateShark } from '../api/sharkApi';

/**
 * this component renders a form for updating a Shark resource
 */
const UpdateSharkForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const queryClient = useQueryClient();

    const updateSharkMutation = useMutation(updateShark, {
        onSuccess: (data) => {
            // invalidates cache and triggers a refetch
            queryClient.invalidateQueries('sharks');
            alert(data.data.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSharkMutation.mutate({ name, id });
    }

    return (
        <div className="form-container">
            <input type="text" placeholder="Enter a sharks _id..." value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="Enter a sharks name..." value={name} onChange={(e) => setName(e.target.value)} />
            <button className="button" onClick={handleSubmit}>Edit Shark</button>
        </div>
    );
}

export default UpdateSharkForm;