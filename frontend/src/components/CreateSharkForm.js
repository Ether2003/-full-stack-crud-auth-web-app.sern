import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query'
import { createShark } from '../api/sharkApi';

/**
 * this component renders a form for creaing a new Shark resource
 */
const CreateSharkForm = () => {
    const [name, setName] = useState('');

    const queryClient = useQueryClient();

    const addSharkMutation = useMutation(createShark, {
        onSuccess: (data) => {
            // invalidates cache and triggers a refetch
            queryClient.invalidateQueries();
            alert(data.data.message);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addSharkMutation.mutate({ name });
    }

    return (
        <div className="form-container">
            <input type="text" placeholder="Enter a sharks name..." value={name} onChange={(e) => setName(e.target.value)} />
            <button className="button" onClick={handleSubmit}>Create Shark</button>
        </div>

    );
}

export default CreateSharkForm;