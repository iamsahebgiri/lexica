import { useState } from "react";
import { Reorder, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "@/hooks/use-raised-shadow";
import { Button } from "./ui/button";

const initialItems = ["Tomato", "Cucumber", "Cheese", "Lettuce"];

interface Props {
  item: string;
}

const Item = ({ item }: Props) => {
  //   const x = useMotionValue(0);
  //   const boxShadow = useRaisedShadow(x);

  return (
    <Reorder.Item
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      value={item}
      id={item}
    >
      <Button variant="outline" size="sm">{item}</Button>
    </Reorder.Item>
  );
};

export default function WordReorder() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="x"
      onReorder={setItems}
      className="flex gap-4"
      values={items}
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
