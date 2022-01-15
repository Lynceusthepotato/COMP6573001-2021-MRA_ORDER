import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'

const EditGallery = ( {usid, photoId} ) => {
    const [description, setDescription] = useState('');
    const [cloudinary_link, setCloudinary_link] = useState('');
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [cloudinaryFolder, setCloudinaryFolder] = useState('forwes');
    const [photoName, setPhotoName] = useState('');

    const getData = async(e) => {
        await axios.get('http://localhost:8088/api/galleryInfo/' + usid + '/' + photoId
            ).then(res => {
                console.log(res.data[0]);
                setPhotoName(res.data[0].picture_name);
                setDescription(res.data[0].picture_description);
                setImageSrc(res.data[0].picture_link);
            })
    }

    useEffect(() => {
        getData();
    }, [usid, photoId])

    const uploadImage = async (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(({name}) => name === 'file');
        console.log(fileInput);

        const formData = new FormData();
        for ( const file of fileInput.files) {
            formData.append('file', file);
        }

        formData.append('upload_preset', cloudinaryFolder);

        const data = await fetch('https://api.cloudinary.com/v1_1/lynceusthepotato/image/upload', {
            method: 'POST',
            body: formData
        }).then(res => res.json());
        
        setImageSrc(data.secure_url);
        setCloudinary_link(data.secure_url); // still need to press it twice 
        console.log(cloudinary_link);
    }

    const updateDesc = async (e) => {
        e.preventDefault();

        if (cloudinary_link === null)
            uploadImage();
        await axios.post('http://localhost:8088/api/galleryInfo', {
            user_id: usid,
            Photo_Id: photoId,
            picture_name: photoName,
            picture_description: description,
            picture_link: cloudinary_link,
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            updateDesc();
        })
    }

    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }


    return (
        <div className="GP"> 
            <div className="EditGallery">
                <div className="Left">
                    <form id="userPhoto" onSubmit={uploadImage} onChange={handleOnChange}>
                        <img src={imageSrc} className="Avatar"/>
                        <p>
                            <input type="file" name="file" />
                        </p>
                                
                        {imageSrc && !uploadData && (
                            <p>
                                <button>Upload Files</button>
                            </p>
                        )}
                    </form>
                </div>
                <div className="Right">
                    <form id="userDesc" onSubmit={updateDesc}>
                        <input type="text" className="PN" placeholder="PhotoName" name="PhotoName" value={photoName} onChange={(e) => setPhotoName(e.target.value)} />
                        <textarea className="PD" placeholder= "description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        {/* <input type="text" className="input-field" placeholder= "cloudinary_link" name="cloudinary_link" value={cloudinary_link} onChange={(e) => setCloudinary_link(e.target.value)} /> */}
                        <input type="submit" className="submit-btn" id="update" value= "update"/>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditGallery
