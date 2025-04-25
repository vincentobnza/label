import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SearchBar() {
  return (
    <div className="w-full max-w-md flex items-center gap-2 mb-4 relative">
      <Input type="text" placeholder="Search labels..." />
      <Button>Search</Button>
    </div>
  );
}
