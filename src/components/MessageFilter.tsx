import {
  ListFilterPlus,
  Tag,
  MessageSquare,
  Users,
  CreditCard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const MessageFilter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-10" variant="outline">
          <ListFilterPlus strokeWidth={3} />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter Chats</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Tag />
          With Labels
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare />
          Group Chats
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users />
          Team
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Subscription
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
