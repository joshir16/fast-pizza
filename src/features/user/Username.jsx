import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <p className="hidden text-sm font-semibold md:block">
      <span className="mr-1 text-stone-800 font-medium">hello,</span>
      {username}
    </p>
  );
}

export default Username;
