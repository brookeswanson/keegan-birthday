import { NextPage } from "next/types";
import { useState } from "react";
import Gallery from "../components/Gallery";

const images = [
  {
    imageUrl: "/kiran-and-hammocks.png",
    text: "hi keegan, happy 1027th birthday! i appreciate our budding growing friendship. i’ve learnt so much from you already, and i love our trans masc / trans fem dynamic!! love you lots",
  },
  {
    imageUrl: "/kiran-and-sunshine.png",
    text: "hi keegan, happy 1027th birthday! i appreciate our budding growing friendship. i’ve learnt so much from you already, and i love our trans masc / trans fem dynamic!! love you lots",
  },
  { imageUrl: "/no-crying-in-baseball.png"},
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
        Happy, happy birthday to you!`,
  },
  { imageUrl: "/housemates.png"},
  { imageUrl: "/fam.png", text: "From Mom" },
  { imageUrl: "/you-cute.png", vertical: true},
  { imageUrl: "/flower-boi.png", vertical: true},
  { imageUrl: "/MIB.png", vertical: true },
  { imageUrl: "/kitten-bittens.png", vertical: true},
  { imageUrl: "/brothers.png", vertical: true},
  { imageUrl: "/second-bros.png",
    text: `
    Keegan, you are genuinely an inspiration to me in practically every possible way.
    When you’re around, good conversation and good food always follow.
    You have the best opinions (obviously).
    You’re one of my favorite human beings, and I miss you!
    `
}

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
