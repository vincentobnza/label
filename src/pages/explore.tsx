import { SearchBar } from "@/components/explore/search-bar";
import { Section } from "@/components/theme/section";
import { Telescope } from "lucide-react";

export const Explore = () => {
  return (
    <Section>
      <div className="space-y-4">
        <div className="self-start flex items-center gap-4 mb-2 relative">
          <Telescope strokeWidth={2} />
          <h2 className="text-xl font-medium">Explore Label Community</h2>
        </div>
        <SearchBar />
      </div>
    </Section>
  );
};

export default Explore;
