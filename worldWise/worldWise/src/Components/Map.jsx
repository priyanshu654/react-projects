import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  let lng = searchParams.get("lng");
  let lat = searchParams.get("lat");

  const Navigate=useNavigate();

  return (
    <>
      <div onClick={()=>{Navigate("form")}}>
        <div>Map</div>
        <h1>{lng}</h1>
        <h1>{lat}</h1>
      </div>
    </>
  );
}
