import bullsEys from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

function Emoji({ rating }: EmojiProps) {
  if (rating < 3) return null;

  const emojimap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "25px" },
    5: { src: bullsEys, alt: "bulls eye", boxSize: "35px" },
  };

  return <Image {...emojimap[rating]} marginTop={1} />;
}

export default Emoji;
