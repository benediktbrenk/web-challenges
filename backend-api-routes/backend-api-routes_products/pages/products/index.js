import useSWR from "swr";

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
