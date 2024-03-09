import Hero from "../components/Hero";
import BestSellingPosters from "../components/BestSellingPosters";
import { fetchBestSellingPosters } from "../function/function";
import { useLoaderData } from "react-router-dom";

function Home() {
  const bestSelling = useLoaderData();

  return (
    <div>
      <Hero />
      <BestSellingPosters bestSelling={bestSelling} />
    </div>
  );
}

export async function loadBestSellingPosters() {
  return fetchBestSellingPosters();
}

export default Home;
