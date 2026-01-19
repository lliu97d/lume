import { LightboxItem } from "@/components/Lightbox";

export type PhotoLabel = "all" | "portrait" | "street" | "landscape" | "polaroid";

export const photos: LightboxItem[] = [
  {
    src: "/DSCF1244.JPG",
    title: "Morning Light",
    label: "Portrait",
    description: "Soft morning light filtering through the window, capturing a quiet moment of reflection.",
  },
  {
    src: "/DSCF1249.JPG",
    title: "Urban Lines",
    label: "Street",
    description: "The geometric patterns of city architecture create a rhythm of light and shadow.",
  },
  {
    src: "/DSCF2112.JPG",
    title: "Mountain Mist",
    label: "Landscape",
    description: "Early morning fog rolling through the mountain valleys, creating layers of depth.",
  },
  {
    src: "/DSCF2632.JPG",
    title: "Candid Moment",
    label: "Portrait",
    description: "An unguarded moment caught in natural light, revealing genuine emotion.",
  },
  {
    src: "/DSCF2715.JPG",
    title: "City Reflections",
    label: "Street",
    description: "Rain-soaked streets mirror the city lights, doubling the urban landscape.",
  },
  {
    src: "/DSCF2955.JPG",
    title: "Endless Horizon",
    label: "Landscape",
    description: "Where sky meets earth, the vastness of nature stretches beyond comprehension.",
  },
  {
    src: "/polaroid/img20250628_22015319.jpg",
    title: "Polaroid I",
    label: "Polaroid",
    description: "Instant memories captured on film, frozen in time.",
  },
  {
    src: "/polaroid/img20250628_22015364.jpg",
    title: "Polaroid II",
    label: "Polaroid",
    description: "The charm of analog photography in a digital age.",
  },
  {
    src: "/polaroid/img20250628_22015409.jpg",
    title: "Polaroid III",
    label: "Polaroid",
    description: "Soft tones and dreamy textures unique to instant film.",
  },
  {
    src: "/polaroid/img20250628_22104766.jpg",
    title: "Polaroid IV",
    label: "Polaroid",
    description: "A fleeting moment preserved with nostalgic warmth.",
  },
  {
    src: "/polaroid/img20250628_22104850.jpg",
    title: "Polaroid V",
    label: "Polaroid",
    description: "The beauty of imperfection in every frame.",
  },
  {
    src: "/polaroid/img20250628_22104932.jpg",
    title: "Polaroid VI",
    label: "Polaroid",
    description: "Colors that bloom like memories developing.",
  },
  {
    src: "/polaroid/img20250628_22105029.jpg",
    title: "Polaroid VII",
    label: "Polaroid",
    description: "Each shot a unique, unrepeatable moment.",
  },
  {
    src: "/polaroid/img20250628_22162949.jpg",
    title: "Polaroid VIII",
    label: "Polaroid",
    description: "The tactile joy of holding a photograph.",
  },
];

export const photoFilters: { value: PhotoLabel; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portrait", label: "Portrait" },
  { value: "street", label: "Street" },
  { value: "landscape", label: "Landscape" },
  { value: "polaroid", label: "Polaroid" },
];
