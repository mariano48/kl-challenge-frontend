import Button from "./Button";
import Input from "./Input";

interface ISearchInputProps {
  title: string;
  disableSearchButton: boolean;
  setTitle: (value: string) => void;
  onSearch: () => void;
}

export default function SearchInput({
  title,
  setTitle,
  disableSearchButton,
  onSearch,
}: ISearchInputProps) {
  return (
    <div className="relative flex items-center justify-start gap-4">
      <Input
        type="text"
        placeholder="Search for an actor name, movie title or location..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button disabled={disableSearchButton} onClick={onSearch} />
    </div>
  );
}
