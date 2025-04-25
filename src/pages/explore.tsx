import { Section } from "@/components/theme/section";
// import { Gamepad2, Code2, MessageSquareHeart, Music2 } from "lucide-react";

export const Explore = () => {
  return (
    <Section>
      <div className="flex flex-col gap-2">
        <div className="self-start flex items-center gap-4 mb-2 relative">
          <h2 className="text-xl font-medium">Explore Label Community</h2>
        </div>
      </div>

      {/* <div className="w-full grid grid-cols-4 gap-4">
        {CARDS.map((card, index) => (
          <ExploreCard
            key={index}
            label={card.label}
            description={card.description}
            bgColor={card.bgColor}
            borderColor={card.borderColor}
            textColor={card.textColor}
            icon={card.icon}
          />
        ))}
      </div> */}
    </Section>
  );
};

// const CARDS = [
//   {
//     label: "Games",
//     bgColor: "from-green-900/40 via-green-900/10 to-transparent",
//     textColor: "text-green-100",
//     borderColor: "border-green-300/20",
//     description: "Connect with gamers, discover new titles.",
//     icon: Gamepad2,
//   },
//   {
//     label: "Coding",
//     bgColor: "from-indigo-900/40 via-indigo-900/10 to-transparent",
//     textColor: "text-indigo-100",
//     borderColor: "border-indigo-300/20",
//     description: "Share projects, solve problems, learn together.",
//     icon: Code2,
//   },
//   {
//     label: "Couple Labels",
//     bgColor: "from-red-900/40 via-red-900/10 to-transparent",
//     textColor: "text-red-100",
//     borderColor: "border-red-300/20",
//     description: "Create special moments with your loved one.",
//     icon: MessageSquareHeart,
//   },
//   {
//     label: "Music",
//     bgColor: "from-purple-900/40 via-purple-900/10 to-transparent",
//     textColor: "text-purple-100",
//     borderColor: "border-purple-300/20",
//     description: "Share playlists, connect with music lovers.",
//     icon: Music2,
//   },
// ];

export default Explore;
