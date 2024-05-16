import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [openSpots, setOpenSpots] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, price, location, openSpots });
    };

    return (
        <div class="form-container">
            <h1>Add More Cards</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Open Spots"
                    value={openSpots}
                    onChange={(e) => setOpenSpots(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventForm;