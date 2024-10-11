import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className=" flex flex-col min-h-[600px] items-center justify-center space-y-3">
      <h1 className="font-semibold text-xl">Something went wrong 😢</h1>
      <p className="font-semibold">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
