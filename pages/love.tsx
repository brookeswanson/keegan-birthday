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
  { imageUrl: "/no-crying-in-baseball.png" },
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
        Happy, happy birthday to you! - Colleen and Emma`,
  },
  { imageUrl: "/housemates.png" },
  { imageUrl: "/fam.png", text: "From Mom" },
  { imageUrl: "/you-cute.png", vertical: true },
  { imageUrl: "/flower-boi.png", vertical: true },
  { imageUrl: "/MIB.png", vertical: true },
  { imageUrl: "/kitten-bittens.png", vertical: true },
  { imageUrl: "/brothers.png", vertical: true },
  {
    imageUrl: "/caide-and-keegan.png",
    vertical: true,
    text: `
I love and care about you so much Keegan!
This particular memory was from a phone call last fall
and I remember leaving the call feeling really appreciative and
grounded in our friendship. I’m so excited and grateful to feel confident in our connection even when we no longer live in the same house.
I love that we can talk about so much together-
from our relationship to spirituality,
to the complexity of gender politics,
to our very own carrots and sloths.
I hope your next year feels purposeful and joyful and brings you only the very best of memes. - Caide`,
  },
  {
    imageUrl: "/second-bros.png",
    text: `
    Keegan, you are genuinely an inspiration to me in practically every possible way.
    When you’re around, good conversation and good food always follow.
    You have the best opinions (obviously).
    You’re one of my favorite human beings, and I miss you! - Griffin
    `,
  },
  {
    imageUrl: "/losgatosfavoritos.png",
    text: `may your year be slightly more cybernetic than the last one 🦾 - savana`,
  },
  {
    imageUrl: "/celebration-spock.png",
    text: `
Happy Birthday Keegan!!
I’ll never forget our first time meeting,
out to grab drinks at the end of the school year for Claire and myself.
We had the little courtyard spot at the Dane and
that’s where we first spotted him….Brett! The sassy biker gnome. 🍄🏍🧙‍♂️
(sadly there is no gnome emoji so alas we get mushroom motorcycle wizard)
That little guy was a highlight to our meeting and even tho he didn’t have a$$-less chaps,
he still will hold a special place in my heart and I’m sure yours as well!
I’m so happy I get to call you friend and wish you all the best in your year to come.
I know Phyllis also sends her best wishes and snuggles too! Happy bday🥳🎂🎁🎈🎉 - sara`,
  },
  {
      imageUrl: "/farm-adventures.jpg",
      text:`
   Happy Birthday Keegan!!
   Love you so much. Mama Mia Thanksgiving 4 eva. Thank you for being such a wonderful kind human.
   Very grateful that you exist and I can't wait for all the adventures to come.
   Love you very much and I hope you like this sight - Brooke`}
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
