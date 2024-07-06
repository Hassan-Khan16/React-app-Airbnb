import React from "react"
import { nanoid } from 'nanoid'
import { imageDb } from "../../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

function Form(props) {
    const formData = props.formData
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange

    const [image, setImage] = React.useState(null)

    async function handleImageUpload() {
        if (image) {
            const imageRef = ref(imageDb, `files/${nanoid()}`)
            const metadata = {
                contentType: image.type // Automatically sets the content type based on the file
            }
            await uploadBytes(imageRef, image, metadata)
            const imageUrl = await getDownloadURL(imageRef)
            return imageUrl
        }
        return ""
    }

    async function onSubmit(event) {
        event.preventDefault()
        const imageUrl = await handleImageUpload()
        handleSubmit(event, { ...formData, coverImg: imageUrl })
    }

    return (
        <div className="form-container">
            <h1>Add More Cards</h1>
            <form onSubmit={onSubmit}>
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
                    type="file"
                    name="coverImg"
                    accept="image/png, image/jpeg"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <input
                    type="number"
                    placeholder="Rating"
                    onChange={handleChange}
                    name="rating"
                    value={formData.rating}
                    required
                />
                <input
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
