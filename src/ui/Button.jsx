import { Link } from "react-router-dom";

function Button({ children, disabled, type, to, onClick }) {
  const base =
    "bg-yellow-400 uppercase text-sm font-semibold text-stone-800 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-100 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer";

  const styles = {
    primary: base + " py-3 px-4 sm:px-6 sm:py-3",

    small: base + " px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm",

    secondary:
      "border border-stone-400 uppercase text-sm font-semibold text-stone-600 tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-100 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer py-1 px-4 sm:px-6 sm:py-2.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} type={type} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
