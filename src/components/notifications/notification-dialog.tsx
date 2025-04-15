import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNotification } from "@/hooks/useNotification";
export const NotificationBell = () => {
  const { data: notifications } = useNotification();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Bell size={18} strokeWidth={3} className="opacity-80 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6 mt-3 ">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications && notifications.length > 0 ? (
          notifications.map((notification: { id: string; type: string }) => (
            <DropdownMenuItem key={notification.id}>
              {notification.type}
            </DropdownMenuItem>
          ))
        ) : (
          <>
            <DropdownMenuItem className="cursor-not-allowed py-5" disabled>
              No notifications available for viewing.
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
