import { useRouter } from "next/router";
import cities from "@/lib/data";
import Link from "next/link";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <>
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <small>Population: {city.population}</small>
      <Link href="/cities">back to all cities</Link>
    </>
  );
}
