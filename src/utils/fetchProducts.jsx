import axios from "axios";
import useSWR from "swr";

const API_URL =
  "https://us-central1-product-api-407db.cloudfunctions.net/api/products";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function fetchProds() {
  const { data, error } = useSWR(API_URL, fetcher);
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
