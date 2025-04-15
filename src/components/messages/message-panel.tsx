import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useRef, useState } from "react";
import { Info, Send, Video, Phone } from "lucide-react";
import { Button } from "../ui/button";

const mockMessages = [
  {
    id: 1,
    sender: "Vincent Obenza",
    text: "Hey there! How's it going?",
    isMine: false,
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "You",
    text: "I'm doing well, thanks for asking!",
    isMine: true,
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "Vincent Obenza",
    text: "Great! Did you see the new project requirements?",
    isMine: false,
    time: "10:35 AM",
  },
];

export const MessagePanel = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      // Option 1: Use scrollIntoView for smooth animation
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      scrollToBottom();
    }, 50);

    return () => clearTimeout(scrollTimer);
  }, [messages]);
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          isMine: true,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full h-[86vh] bg-white dark:bg-slate-800 flex flex-col overflow-hidden ">
      <div className="w-full border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 shadow-md">
        <div className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/api/placeholder/400/400"
                alt="Vincent Obenza"
              />
              <AvatarFallback>VO</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Vincent Obenza
              </h2>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 "
            >
              <Phone strokeWidth={3} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 "
            >
              <Video strokeWidth={3} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="p-1 rounded-lg bg-slate-100 dark:bg-slate-600/40 hover:0g-gray-200 dark:hover:bg-slate-700"
            >
              <Info strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-gray-50 dark:bg-slate-800"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isMine ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isMine && (
              <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                <AvatarImage
                  src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/490074904_655997567035248_2963245977716423345_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4T1COTfw-ivOxwGMu7WJ4Lqif-Fx3hmEuqJ_4XHeGYdF9AsyLH_h4On4ad97grrYK8kEhZIKhnOGR03HfQv9X&_nc_ohc=K4OTSLqSdwQQ7kNvwFmMeyr&_nc_oc=AdmTM6oYMuWEya2Mw1KWjSiy7gGG5_V2IN_r0BPje46j-h6JDYNuYpuI6mN9aQ2-qJQngHyQiW_LVJ7dlSHiW0bN&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=unG_ydSqhxq4wNbPVxB0ag&oh=00_AfHNkUT4Pv2s4swDNXV4d7E7QRPEuPm2-MUijlr8PesYoA&oe=68013169"
                  alt={message.sender}
                />
                <AvatarFallback>VO</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] ${
                message.isMine
                  ? "bg-indigo-600 dark:bg-gradient-to-br dark:from-indigo-600 dark:to-violet-800 rounded-tl-lg rounded-tr rounded-bl-lg rounded-br-lg"
                  : "bg-gray-200 dark:bg-slate-700 dark:bg-gradient-to-br dark:from-slate-600 dark:to-gray-800 rounded-tr-lg rounded-br-lg"
              } p-3`}
            >
              {!message.isMine && (
                <div
                  className={`font-semibold text-xs ${
                    message.isMine
                      ? "text-white"
                      : "text-gray-700 dark:text-slate-300"
                  } mb-1`}
                >
                  {message.sender}
                </div>
              )}
              <p
                className={
                  message.isMine
                    ? "text-white"
                    : "text-gray-800 dark:text-white"
                }
              >
                {message.text}
              </p>
              <div
                className={`text-xs ${
                  message.isMine
                    ? "text-indigo-200"
                    : "text-gray-500 dark:text-slate-300"
                } mt-1 text-right`}
              >
                {message.time}
              </div>
            </div>
            {message.isMine && (
              <Avatar className="h-8 w-8 ml-2 mt-1 flex-shrink-0">
                <AvatarImage
                  src="https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C"
                  alt="You"
                />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-gradient-to-t from-gray-50 to-transparent dark:from-slate-900 dark:to-transparent relative">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-white border border-gray-300 dark:border-slate-600 dark:bg-slate-800/40 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
