import Image from "next/image";

import base from "@/shared/assets/icons/base.png";

import v_in_out from "@/shared/assets/icons/v-in-out.png";
import v_in from "@/shared/assets/icons/v-in.png";
import v_out from "@/shared/assets/icons/v-out.png";

import h_in_out from "@/shared/assets/icons/h-in-out.png";
import h_in from "@/shared/assets/icons/h-in.png";
import h_out from "@/shared/assets/icons/h-out.png";

export const elementsOptions = [
  {
    name: "base",
    title: "Base Node",
    preview: <Image src={base} alt="vertical node" />,
  },

  {
    name: "v-in-out",
    title: "Vertical Node",
    preview: <Image src={v_in_out} alt="vertical node" />,
  },
  {
    name: "v-in",
    title: "Vertical In Node",
    preview: <Image src={v_in} alt="vertical node in" />,
  },
  {
    name: "v-out",
    title: "Vertical Out Node",
    preview: <Image src={v_out} alt="vertical node out" />,
  },

  {
    name: "h-in-out",
    title: "Hotizontal Node",
    preview: <Image src={h_in_out} alt="horizontal node" />,
  },
  {
    name: "h-in",
    title: "Hotizontal In Node",
    preview: <Image src={h_in} alt="horizontal node in" />,
  },
  {
    name: "h-out",
    title: "Hotizontal Out Node",
    preview: <Image src={h_out} alt="horizontal node out" />,
  },
];
