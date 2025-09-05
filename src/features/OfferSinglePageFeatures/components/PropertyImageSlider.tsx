import { useState } from "react";
import type { PropertyImagesType } from "../../OffersPageFeatures/PropertyCardTypes";

type PropertyImageSliderProps = {
    images: PropertyImagesType[];
};

export default function PropertyImageSlider({ images }: PropertyImageSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full mb-6"> {/* Added relative for absolute positioning of controls */}
            <div className="carousel w-full rounded-box shadow-lg relative">
                {/* Main Carousel Images */}
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        id={`item${index}`}
                        className={`carousel-item w-full ${index === activeIndex ? "block" : "hidden"}`}>
                        <img src={image.url} className="w-full object-cover h-96" alt={`Property image ${index + 1}`} />
                    </div>
                ))}
                {/* Navigation Buttons (positioned over the image) */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button className="btn btn-circle" onClick={handlePrev}>
                        ❮
                    </button>
                    <button className="btn btn-circle" onClick={handleNext}>
                        ❯
                    </button>
                </div>

            </div>


            {/* Thumbnail Navigation */}
            <div className="flex justify-center w-full py-2 gap-2 mt-4">
                {images.map((image, index) => (
                    <a
                        key={image.id}
                        href={`#item${index}`} // DaisyUI carousel link
                        className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${index === activeIndex ? "border-primary" : "border-transparent"
                            }`}
                        onClick={() => setActiveIndex(index)} // Manual state update for thumbnail highlighting
                    >
                        <img src={image.url} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
                    </a>
                ))}
            </div>
        </div>
    );
}