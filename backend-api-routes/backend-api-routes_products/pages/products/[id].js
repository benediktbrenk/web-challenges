import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <p>{data.name}</p>;
}
