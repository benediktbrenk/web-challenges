import Link from "next/link";
import Head from "next/head";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <Head>
        <title>List of Volumes</title>
      </Head>
      <h1>List of Volumes</h1>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
