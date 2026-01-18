import { LightboxItem } from "@/components/Lightbox";

export interface Story {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  photos: LightboxItem[];
}

export const stories: Story[] = [
  {
    slug: "urban-wanderings",
    title: "Urban Wanderings",
    description:
      "A day spent exploring the contrast between quiet corners and bustling streets. These images capture the rhythm of city life, where architecture and humanity intersect. From the geometric patterns of modern buildings to the organic flow of people through public spaces, each frame tells a story of urban existence.",
    coverImage: "/DSCF1249.JPG",
    photos: [
      {
        src: "/DSCF1249.JPG",
        title: "Street Corner",
        label: "Street",
        description: "A quiet corner in the bustling city, where time seems to slow down.",
      },
      {
        src: "/DSCF2715.JPG",
        title: "City Lights",
        label: "Street",
        description: "Neon reflections dance across wet pavement after an evening rain.",
      },
      {
        src: "/DSCF2632.JPG",
        title: "Passing By",
        label: "Street",
        description: "Strangers crossing paths, each with their own destination in mind.",
      },
    ],
  },
  {
    slug: "natural-solitude",
    title: "Natural Solitude",
    description:
      "Early mornings in nature, where mist rolls through valleys and the only sound is the wind. A meditation on isolation and natural beauty. These photographs explore the quiet moments before the world wakes, when light first touches the landscape and everything feels possible.",
    coverImage: "/DSCF2112.JPG",
    photos: [
      {
        src: "/DSCF2112.JPG",
        title: "Valley Mist",
        label: "Landscape",
        description: "Morning mist weaves through the valley, softening every edge.",
      },
      {
        src: "/DSCF2955.JPG",
        title: "Open Fields",
        label: "Landscape",
        description: "The endless expanse invites contemplation and wonder.",
      },
      {
        src: "/DSCF1244.JPG",
        title: "First Light",
        label: "Landscape",
        description: "Dawn breaks gently, painting the world in soft golden hues.",
      },
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
