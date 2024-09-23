export default function Button({
  type,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="h-12 w-1/5 inline-flex justify-center items-center bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md disabled:bg-gray-200"
      type={type}
      {...props}
    >
      Search
    </button>
  );
}
