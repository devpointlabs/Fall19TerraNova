import React, {useState} from 'react'
import './styles/GalleryView.css';

const GalLargeImage = ({ image }) => {
    const [file, setfile] = useState("")
    const [imagePreviewURL, setimagePreviewURL] = useState("")

    const _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', file);
      }
    
    const _handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setfile(file)
            setimagePreviewURL(reader.result)
          };
        reader.readAsDataURL(file)
      }
    
    const uploadButton = () => (
        <div className="submit-button-container">
            <button className="submit-button"
                type="submit"
                onClick={(e) => _handleSubmit(e)}>Upload Image</button> 
        </div>
    );
    
    const fileInput = () => (
        <form className="gallery-form" onSubmit={(e) => _handleSubmit(e)}>
            <input className="file-input"
                type="file"
                onChange={(e) => _handleImageChange(e)} />
        </form>

    )

    let $imagePreview = null;
    let $imageUploadButton = null;
    let $fileInput = null;
    if (image) {
        $imagePreview = (<img src={image.img} style={{maxWidth: "100%", maxHeight: "100%"}} />);
        $imageUploadButton = uploadButton();
    } else if 
    (imagePreviewURL) {
        $imagePreview = (<img src={imagePreviewURL} style={{maxWidth: "100%", maxHeight: "100%"}} />);
        $imageUploadButton = uploadButton();
                       
    } else {
        $imagePreview = (<div className="preview-text">Please select an Image for Preview</div>);
        $fileInput = fileInput();
     
    }

    return (
        <div className="large-img-container">
            <div className="img-preview">
                <div className="preview-component">
                    {$imagePreview}
                    {$imageUploadButton}
                    {$fileInput}
                </div>
            </div>
        </div>
    )

}
export default GalLargeImage