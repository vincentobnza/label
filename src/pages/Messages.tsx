import { MessageList } from "@/components/messages/message-list";
import { MessagePanel } from "@/components/messages/message-panel";

export const Messages = () => {
  return (
    <div className="w-full h-[86vh] max-w-screen-xl mx-auto flex rounded-lg overflow-hidden space-x-4">
      <MessageList />
      <MessagePanel />
    </div>
  );
};
