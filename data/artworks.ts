import { LightboxItem } from "@/components/Lightbox";

export type ArtLabel = "all" | "digital" | "traditional" | "mixed";

export const artworks: LightboxItem[] = [
  {
    src: "/DSCF2961.JPG",
    title: "Chromatic Dreams",
    label: "Digital",
    description: "An exploration of color and form through digital manipulation, creating dreamlike landscapes.",
  },
  {
    src: "/DSCF3102.JPG",
    title: "Brushwork Study",
    label: "Traditional",
    description: "Traditional brushwork techniques applied to contemporary subjects, bridging past and present.",
  },
  {
    src: "/DSCF3741.JPG",
    title: "Collage No. 5",
    label: "Mixed Media",
    description: "Layered textures and found materials come together to create new visual narratives.",
  },
  {
    src: "/DSCF4113.JPG",
    title: "Geometric Harmony",
    label: "Digital",
    description: "Mathematical precision meets artistic intuition in this study of geometric relationships.",
  },
  {
    src: "/DSCF2877.JPG",
    title: "Abstract Forms",
    label: "Traditional",
    description: "Organic shapes emerge from controlled chaos, revealing hidden patterns in nature.",
  },
];

export const artFilters: { value: ArtLabel; label: string }[] = [
  { value: "all", label: "All" },
  { value: "digital", label: "Digital" },
  { value: "traditional", label: "Traditional" },
  { value: "mixed", label: "Mixed Media" },
];
