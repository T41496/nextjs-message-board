import { MainLayout } from "@/src/layouts/Layout";
import { MessageForm } from "@/src/components/Forms";
import { MessageTable } from "@/src/components/Tables";

export const MessageContainer = () => {
  return (
    <MainLayout>
      <h1>Messages</h1>
      <MessageForm />
      <MessageTable />
    </MainLayout>
  );
};
