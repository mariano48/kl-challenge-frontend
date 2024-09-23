import Suggestion from "./Suggestion";

interface ISuggestionContainerProps {
  suggestions: string[];
  handleSuggestionClick: (suggestion: string) => void;
}

export default function SuggestionContainer({
  suggestions,
  handleSuggestionClick,
}: ISuggestionContainerProps) {
  return (
    <div className="absolute z-10 w-4/5 mt-1 bg-white border rounded-md shadow-lg">
      <ul className="py-1">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <Suggestion
              key={index}
              suggestion={suggestion}
              handleSuggestionClick={handleSuggestionClick}
            />
          ))
        ) : (
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded cursor-pointer">
            No suggestions
          </li>
        )}
      </ul>
    </div>
  );
}
