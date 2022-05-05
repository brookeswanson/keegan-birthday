import { NextPage } from "next/types"
import { useState } from "react";
import Gallery from "../components/Gallery";

const images = [
    {imageUrl: '/kiran-and-hammocks.png', text: 'Meow'}
    , {imageUrl: '/kiran-and-sunshine.png', text: 'Hello'}
    , {imageUrl: '/no-crying-in-baseball.png', text: 'Grape'}
    , {imageUrl: '/couple-goals.png', text: 'Colleen and Emma'}
    , {imageUrl: '/housemates.png', text: 'Park Benches and fun'}
    , {imageUrl: '/fam.png', text: 'Love.'}
]
const Love: NextPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
    <Gallery
    images={images}
    currentIndex={currentIndex}
    setCurrentIndex={setCurrentIndex}
         />);
}

export default Love;