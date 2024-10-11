import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "py-3 px-4 sm:px-6 sm:py-4",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "bg-white-400 uppercase text-sm font-semibold text-stone-400  inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 hover:focus:ring-offset-2 disabled:cursor-not-allowed border border-2 hover:text-stone-800 focus:bg-stone-300 border-stone-300 bg-transparent py-2.5 px-4 sm:px-6 sm:py-3 hover:bg-stone-300",
    round: base + "py-1 px-2.5 md:px-3.5 md:py-2 text-xs text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
