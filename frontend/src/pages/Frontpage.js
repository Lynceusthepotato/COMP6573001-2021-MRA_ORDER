import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'

const Frontpage = ( {username, usid} ) => { 
    const [description, setDescription] = useState('');
    const [cloudinary_link, setCloudinary_link] = useState('');
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [cloudinaryFolder, setCloudinaryFolder] = useState('forwes');
    const [updet, setUpdet] = useState(false);

    const getInfo = async () => {
        console.log(usid);
        await axios.get('http://localhost:8088/api/userInfo/' + usid
            ).then(res => {
                console.log(res);
                setImageSrc(res.data.cloudinary_link);
                setCloudinary_link(res.data.cloudinary_link);
                setDescription(res.data.description);
            })
    }

    useEffect( () => {
        getInfo();

        if(cloudinary_link != cloudinary_link){
            setUpdet(true);
        }
    }, [usid, updet]);
    

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
        if (cloudinary_link === null){
            uploadImage();
            alert("it seems that the image is not uploaded yet press upload files again");
        } else {
            await axios.post('http://localhost:8088/api/updateInfo', {
            user_id: usid,
            description: description,
            cloudinary_link: cloudinary_link,
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                updateDesc();
            })
        }
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
        <div className="Whole"> 
            <div className="Frontpage">
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
                    <div className="Top">
                        <Header title={"Hello! I'm " + username + "!"}/>
                    </div>
                    <div className="Bottom">
                        <form id="userDesc" onSubmit={updateDesc}>
                            <textarea className="input-field" placeholder= "description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            {/* <input type="text" className="input-field" placeholder= "cloudinary_link" name="cloudinary_link" value={cloudinary_link} onChange={(e) => setCloudinary_link(e.target.value)} /> */}
                            <input type="submit" className="submit-btn" id="update" value= "update"/>  
                        </form>
                    </div>
                </div>
                <br className='Bruh'/>
            </div>
        </div>
    )
}

export default Frontpage
