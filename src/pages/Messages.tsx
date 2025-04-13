import { MessageList } from "@/components/MessageList";
import { MessagePanel } from "@/components/MessagePanel";

export const Messages = () => {
  return (
    <div className="w-full h-[86vh] max-w-screen-xl mx-auto flex rounded-lg overflow-hidden space-x-4">
      <MessageList />
      <MessagePanel />
    </div>
  );
};
