import Image from "next/image";

import vertical_node from "@/shared/assets/icons/vertical-node.png";
import horizontal_node from "@/shared/assets/icons/horizontal-node.png";

export const elementsOptions = [
  {
    label: <Image src={vertical_node} alt="vertical node" />,
    type: "v_in_out",
  },
  {
    label: (
      <>
        <Image src={horizontal_node} alt="horizontal node" />
      </>
    ),
    type: "h_in_out",
  },
];
