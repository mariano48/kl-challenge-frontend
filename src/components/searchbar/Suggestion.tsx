interface ISuggestionProps {
  suggestion: string;
  handleSuggestionClick: (suggestion: string) => void;
}

export default function Suggestion({
  suggestion,
  handleSuggestionClick,
}: ISuggestionProps) {
  return (
    <li
      className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded cursor-pointer"
      onClick={() => handleSuggestionClick(suggestion)}
    >
      {suggestion}
    </li>
  );
}
