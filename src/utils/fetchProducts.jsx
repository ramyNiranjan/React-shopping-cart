import axios from "axios";
import useSWR from "swr";

const API_URL = "https://young-shore-93917.herokuapp.com/products";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function fetchProds() {
  // const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  const { data, error } = useSWR(API_URL, fetcher);
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
