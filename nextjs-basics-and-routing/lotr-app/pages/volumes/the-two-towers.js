import { volumes } from "@/lib/data";
import Link from "next/link";

export default function Volume() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  const currentVolumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-two-towers"
  );
  const previousVolume =
    currentVolumeIndex > 0 ? volumes[currentVolumeIndex - 1] : null;
  const nextVolume =
    currentVolumeIndex < volumes.length - 1
      ? volumes[currentVolumeIndex + 1]
      : null;

  console.log(previousVolume);

  return (
    <>
      <h1 key={volume.title}>{volume.title}</h1>
      <p>{volume.content}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous</Link>
      )}
      {nextVolume && <Link href={`/volumes/${nextVolume.slug}`}>Next</Link>}
    </>
  );
}
