import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character");

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      <li>First Name: {data.firstName}</li>
      <li>Last Name: {data.lastName}</li>
      <li>Profession: {data.profession}</li>
      <li>Age: {data.age}</li>
      <li>Twitter: {data.twitter}</li>
      <li>Geohash: {data.geohash}</li>
    </ul>
  );
}
