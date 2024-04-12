import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  } catch (error) {
    console.log("failed to fetch");
  }
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://swapi.dev/api/people/${id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
