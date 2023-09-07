import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const nextIndex = firstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(nextIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const nextindex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(nextindex);
    }

    const moveToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const sliders = [
        {
            url: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            url: "https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            url: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            url: "https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            url: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ]
    return (
        <div className="max-w-[1440px] w-full h-[500px] p-4 relative group">
            <div className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}></div>
            <div className="hidden group-hover:block absolute cursor-pointer top-[50%] -translate-x-0 translate-y-[-50%] rounded-full text-2xl p-2 bg-white left-5" >
                <BsChevronLeft size={25} onClick={prevSlide} />
            </div>
            <div className="hidden group-hover:block absolute cursor-pointer top-[50%] -translate-x-0 translate-y-[-50%] rounded-full text-2xl p-2 bg-white right-5" >
                <BsChevronRight size={25} onClick={nextSlide} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {sliders.map((slideItems, slideIndex) => (
                    <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => moveToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured