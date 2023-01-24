import { MainLayout } from "@/src/layouts/Layout";
import { MessageForm, MessageTable } from "@/src/components";
import { Message } from "@/src/types";

export const MessageContainer: React.FC<{ messages: Message[] }> = ({
  messages,
}) => {
  return (
    <MainLayout>
      <h1>Messages</h1>
      <MessageForm />
      <MessageTable messages={messages} />
    </MainLayout>
  );
};
