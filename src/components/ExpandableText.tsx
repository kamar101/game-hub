import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [isLess, setIsLess] = useState(true);
  const lineLimit = 300;
  if (!children) return null;

  const summary = isLess ? children.substring(0, lineLimit) + "..." : children;

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft="1"
        colorPalette="yellow"
        rounded="4xl"
        onClick={() => setIsLess(!isLess)}
      >
        {isLess ? "Show More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
