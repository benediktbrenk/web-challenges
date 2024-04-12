import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import VolumeNavigation from "@/components/VolumeNavigation";
import CoverContainer from "@/components/CoverContainer";
import AllVolumesNavigation from "@/components/AllVolumesNavigation";
import Main from "@/components/Main";
import Introduction from "@/components/Introduction";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <Main>
      <AllVolumesNavigation></AllVolumesNavigation>
      <Introduction title={title} description={description}></Introduction>
      <CoverContainer
        volume={volume}
        title={title}
        cover={cover}
        books={books}
      ></CoverContainer>
      <VolumeNavigation
        previousVolume={previousVolume}
        nextVolume={nextVolume}
      ></VolumeNavigation>
    </Main>
  );
}
