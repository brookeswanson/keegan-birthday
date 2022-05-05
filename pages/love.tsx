import { NextPage } from "next/types";
import { useState } from "react";
import Gallery from "../components/Gallery";

const images = [
  { imageUrl: "/kiran-and-hammocks.png", text: "Meow" },
  { imageUrl: "/kiran-and-sunshine.png", text: "Hello" },
  { imageUrl: "/no-crying-in-baseball.png", text: "Grape" },
  {
    imageUrl: "/couple-goals.png",
    text: `
        Keeeeeeeegaaaaan! We adored spending a weekend in Iowa with you for our fabulous couple’s retreat.
        We appreciate and love many, many special elements of you, but here we’ll name just a few:
        Your enduring playfulness and zealous laughter, your noticeable thoughtfulness and sincerity,
        your determined quest toward always-expanding knowledge and ever-more-enriched enlightenment,
        and your stellar Instagram posts. On your birthday,
        and during your whole year ahead, we wish you the plumpest,
        juiciest garden tomatoes the universe has ever witnessed,
        numerous new houseplant propagations,
        a novel and facetious addition to your cubicle wall,
        a host of precious memories with Monday (on Mondays, for extra points),
        and resounding peace groundedness,
        and joy.
        Happy, happy birthday to you!`
  },
  { imageUrl: "/housemates.png", text: "Park Benches and fun" },
  { imageUrl: "/fam.png", text: "Love." },
  { imageUrl: "/MIB.png", text: "Aliens wooo", vertical: true },
];
const Love: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Gallery
      images={images}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  );
};

export default Love;
