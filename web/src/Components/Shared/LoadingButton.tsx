/* Desc: Button that shows a loading spinner when loading is true */
/* Usage: pass the function and a boolean state value to display the loading animation */
type LoadingButtonProps = {
  loading: boolean;
  children: React.ReactNode;
  action: () => void;
};

const LoadingButton = ({ loading, children, action }: LoadingButtonProps) => {
  const getClasses = () => {
    let classes =
      'inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm shadow text-white bg-dark rounded hover:bg-zinc-400 transition ease-in-out duration-150';
    if (loading) {
      classes += ' cursor-not-allowed bg-gray-400';
    }
    return classes;
  };

  return (
    <button className={getClasses()} onClick={action}>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {loading ? 'Creating New Event...' : children}
    </button>
  );
};

export default LoadingButton;
