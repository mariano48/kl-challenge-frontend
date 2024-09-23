import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useMovies from "../../hooks/useMovies";
import { useSuggestions } from "../../hooks/useSuggestions";
import SearchInput from "./SearchInput";
import SuggestionContainer from "./SuggestionContainer";

export default function SearchBar() {
  const [title, setTitle] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data, isLoading, refetch } = useSuggestions(title);
  const {
    moviesMutation: { mutate },
  } = useMovies();
  const debouncedInputValue = useDebounce(title, 300);
  const disableSearchButton = !title || isLoading;

  useEffect(() => {
    if (!data) return;
    if (data.length > 0) setShowSuggestions(true);
  }, [data]);

  useEffect(() => {
    if (debouncedInputValue === data?.[0]) return;
    refetch();
  }, [debouncedInputValue, data, refetch]);

  return (
    <div
      className="h-16 w-full bg-white p-2 shadow-md z-10"
      data-testid="search-bar"
    >
      <SearchInput
        title={title}
        setTitle={setTitle}
        disableSearchButton={disableSearchButton}
        onSearch={() => {
          setShowSuggestions(false);
          mutate(title);
        }}
      />
      {showSuggestions && data && (
        <SuggestionContainer
          suggestions={data}
          handleSuggestionClick={(value: string) => {
            setTitle(value);
            setShowSuggestions(false);
          }}
        />
      )}
    </div>
  );
}
