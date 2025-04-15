import { FollowRequestCard } from "../cards/follow-request-card";
import { OverlayFade } from "../theme/overlay-fade";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";

export const FollowRequests = () => {
  return (
    <div className="w-full h-[400px] relative mb-5 border-b border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
        <OverlayFade height="7rem" position="bottom" />
        <div className="w-full p-6 text-slate-800 dark:text-slate-200">
          <div className="w-full flex justify-between items-center mb-8">
            <h1 className="text-md font-bold">Follow Requests</h1>

            <Button
              className="h-6 text-[11px] font-semibold text-indigo-400"
              variant="link"
            >
              View more
            </Button>
          </div>
          <div className="w-full grid gap-4">
            {DUMMY_FOLLOW_REQUESTS.map((request, index) => (
              <FollowRequestCard
                key={index}
                img_url={request.img_url}
                name={request.name}
                followers={request.followers}
              />
            ))}
          </div>

          {/* <div className="mt-4 space-y-4">
            <p className="text-sm opacity-60">
              You have no follow requests at the moment.
            </p>
            <Link
              to="/"
              className="px-0 text-sm font-bold text-neutral-900 dark:text-indigo-400 hover:underline hover:bg-transparent"
            >
              Find people to follow
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const DUMMY_FOLLOW_REQUESTS = [
  {
    img_url:
      "https://tse3.mm.bing.net/th?id=OIP.WpIMP_W3gb5bZ81rA-K2YgHaHa&pid=Api&P=0&h=220",
    name: "Cathy B. Latco",
    followers: 1200,
  },
  {
    img_url:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg",
    name: "Ben Ten",
    followers: 100,
  },
  {
    img_url:
      "https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=220",
    name: "Cherry Blossom",
    followers: 3000,
  },
  {
    img_url:
      "https://tse4.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&P=0&h=220",
    name: "Johnson Jones",
    followers: 5000,
  },
  {
    img_url:
      "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
    name: "Benny Lee",
    followers: 678,
  },
  {
    img_url:
      "https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220",
    name: "Alexander the Great",
    followers: 4500,
  },
  {
    img_url:
      "https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg",
    name: "Parry the Platypus",
    followers: 4500,
  },
];
