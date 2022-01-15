import Header from "../components/Header";
import "../components/GalleryPage.css";
import examplePic from "../pictures/placeholder-image.png";
import { Navigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Gallerypage = ( {usid, setPhotoId, photoid} ) => {
    const [cloudinary_link, setCloudinary_link] = useState('');
    const [imageSrc, setImageSrc] = useState(examplePic);
    const [isChanged, setIsChanged] = useState("bruh");
    const [redirect, setRedirect] = useState(false);

    const slider = document.querySelector('.slider-inner');
    let sliderGrabbed = false;

    if(slider){
        // slider.addEventListener('mousedown', (e) => {
        //     sliderGrabbed = true;
        //     slider.style.cursor = 'grabbing';
        // })
        
        // slider.addEventListener('mouseup', (e) => {
        //     sliderGrabbed = false;
        //     slider.style.cursor = 'grab';
        // })
        
        // slider.addEventListener('mouseleave', (e) => {
        //     sliderGrabbed = false;
        // })
        
        // slider.addEventListener('mousemove', (e) => {
        //     if(sliderGrabbed){
        //         slider.parentElement.scrollLeft -= e.movementX;
        //     }
        // })
        
        slider.addEventListener('wheel', (e) =>{
            e.preventDefault()
            slider.parentElement.scrollLeft += e.deltaY;
        })
    }

    var galPic = document.getElementsByClassName("FPic");
    function tryGetImg(e) {
        // console.log(e.target.src);
        // console.log(Array.from(document.getElementsByClassName("FPic")).indexOf(e.target) + 1); // To get array index
        // console.log(galPic[Array.from(document.getElementsByClassName("FPic")).indexOf(e.target)].id)
        if (galPic[Array.from(document.getElementsByClassName("FPic")).indexOf(e.target)].id == "bruh"){
            setPhotoId(Array.from(document.getElementsByClassName("FPic")).indexOf(e.target));
            setRedirect(redirect => !redirect)
        } else if(galPic[Array.from(document.getElementsByClassName("FPic")).indexOf(e.target)].id == "notBruh"){
            setPhotoId(galPic[Array.from(document.getElementsByClassName("FPic")).indexOf(e.target)].photoid);
            setRedirect(redirect => !redirect)
        }
    }

    const getData = async(e) => {

        await axios.get('http://localhost:8088/api/galleryInfo/' + usid
            ).then(res => {
                // console.log(res.data.length);
                console.log(res.data);
                for(var i = 0; i < res.data.length; i++){
                    galPic[i].src = res.data[i].picture_link;
                    galPic[i].photoid = res.data[i].Photo_Id;
                    galPic[i].id = "notBruh";
                    console.log(galPic[i].photoid);
                }
            })
    }

    

    useEffect(() =>{
        getData();
    }, [usid, photoid])


    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            // setUploadData(undefined);
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    if(redirect){
        return <Navigate to="/editGallery" />
    }

    

    return (
        <div className="GalleryPage">
            <Header title={"My Image Gallery"} className={"GalleryHeader"}/>
            <div className='slider-wrap'>
                    <div className='slider'>
                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                        </div>

                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                        </div>

                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                            <div className='toSlide'>
                                <img src={imageSrc} className= "FPic" onClick={tryGetImg} id={isChanged} photoid={photoid}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Gallerypage
