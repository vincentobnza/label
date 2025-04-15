import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Search } from "lucide-react";
import { MessageFilter } from "./message-filter";
import { OverlayFade } from "../overlay-fade";

const mockContacts = [
  {
    id: 1,
    name: "Vincent Obenza",
    lastMessage: "Great! Did you see the new project requirements?",
    time: "10:35 AM",
    unread: 2,
    avatar: "/api/placeholder/400/400",
    isActive: true,
  },
  {
    id: 2,
    name: "John Smith",
    lastMessage: "When is the meeting scheduled for?",
    time: "Yesterday",
    unread: 0,
    avatar: "/api/placeholder/400/400",
    isActive: false,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
    unread: 0,
    avatar: "/api/placeholder/400/400",
    isActive: false,
  },
  {
    id: 4,
    name: "Vincent Obenza",
    lastMessage: "Great! Did you see the new project requirements?",
    time: "10:35 AM",
    unread: 2,
    avatar: "/api/placeholder/400/400",
    isActive: true,
  },
  {
    id: 5,
    name: "John Smith",
    lastMessage: "When is the meeting scheduled for?",
    time: "Yesterday",
    unread: 0,
    avatar: "/api/placeholder/400/400",
    isActive: false,
  },
  {
    id: 6,
    name: "Sarah Johnson",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
    unread: 0,
    avatar: "/api/placeholder/400/400",
    isActive: false,
  },
];

export const MessageList = () => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(mockContacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/3 h-full flex flex-col relative">
      <OverlayFade />
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-xl font-bold mb-4">Messages</h1>
        <div className="w-full flex items-center gap-2">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search people..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded px-4 py-[7px] pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm placeholder:font-semibold"
            />
            <div className="absolute inset-y-0 w-3 grid place-items-center left-3">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
          </div>

          <MessageFilter />
        </div>
      </div>

      {/* Contact list with scrolling but hidden scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer flex items-center gap-3 ${
              contact.isActive ? "bg-slate-100 dark:bg-slate-700/30" : ""
            }`}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              {contact.isActive && (
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold truncate">{contact.name}</h3>
                <span className="text-xs text-slate-500">{contact.time}</span>
              </div>
              <p className="text-sm text-slate-500 truncate">
                {contact.lastMessage}
              </p>
            </div>
            {contact.unread > 0 && (
              <div className="h-5 w-5 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">{contact.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
