import { getShopPageURLS } from "../functions/functions";
import { Link } from "react-router-dom";

export default function PageSelector() {
  const shopPageURLS = getShopPageURLS();
  const pageURLIndex = 0;

  return (
    <div>
      {pageURLIndex != 0 ? (
        <Link to={shopPageURLS[pageURLIndex - 1]}>Back</Link>
      ) : null}
      {shopPageURLS.map((url, i) => (
        <Link key={url} to={url}>
          {i + 1}
        </Link>
      ))}
      {pageURLIndex < shopPageURLS.length - 1 ? (
        <Link to={shopPageURLS[pageURLIndex + 1]}>Next</Link>
      ) : null}
    </div>
  );
}
