import Header from "../components/Header";
import "../components/GalleryPage.css";
import examplePic from "../pictures/placeholder-image.png";
import { Link } from "react-router-dom";

const Gallerypage = ( {usid} ) => {

    const slider = document.querySelector('.slider-inner');
    let sliderGrabbed = false;

    if(slider){
        slider.addEventListener('mousedown', (e) => {
            sliderGrabbed = true;
            slider.style.cursor = 'grabbing';
        })
        
        slider.addEventListener('mouseup', (e) => {
            sliderGrabbed = false;
            slider.style.cursor = 'grab';
        })
        
        slider.addEventListener('mouseleave', (e) => {
            sliderGrabbed = false;
        })
        
        slider.addEventListener('mousemove', (e) => {
            if(sliderGrabbed){
                slider.parentElement.scrollLeft -= e.movementX;
            }
        })
        
        slider.addEventListener('wheel', (e) =>{
            e.preventDefault()
            slider.parentElement.scrollLeft += e.deltaY;
        })
    }

    return (
        <div className="GalleryPage">
            <Header title={"My Image Gallery"} className={"GalleryHeader"}/>
            <div className='slider-wrap'>
                    <div className='slider'>
                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                        </div>

                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                        </div>

                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                            <div className='toSlide'>
                                <img src={examplePic} className= "FPic"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Gallerypage
