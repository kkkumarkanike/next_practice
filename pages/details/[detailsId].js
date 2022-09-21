import { useRouter } from "next/router";

function EachDetails() {
  const router = useRouter();

  return <div>{router.query.detailsId}</div>;
}

export default EachDetails;
