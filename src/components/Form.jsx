import React from "react"

function Form(props) {
    const formData = props.formData
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange

    return (
        <div className="form-container">
            <h1>Add More Cards</h1>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                    required
                />
                <textarea
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    required
                ></textarea>
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    onChange={handleChange}
                    value={formData.price}
                    required
                />
                <input
                    type="text"
                    placeholder="Cover Image"
                    onChange={handleChange}
                    name="coverImg"
                    value={formData.coverImg}
                    required
                /><input
                    type="number"
                    placeholder="Rating"
                    onChange={handleChange}
                    name="rating"
                    value={formData.rating}
                    required
                /><input
                    type="number"
                    placeholder="Review Count"
                    onChange={handleChange}
                    name="reviewCount"
                    value={formData.reviewCount}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Open Spots"
                    name="openSpots"
                    value={formData.openSpots}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Card</button>
            </form>
        </div>
    );
};

export default Form;