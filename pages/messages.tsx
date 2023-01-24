import type { NextPage } from "next";
import { MessageContainer } from "@/src/containers";
import { Message } from "@/src/types";
import { getMessages } from "@/src/services";

const Messages: NextPage<{ messagesData: Message[] }> = ({ messagesData }) => {
  return <MessageContainer messages={messagesData} />;
};

export const getServerSideProps = async () => {
  let messagesData = await getMessages();

  if (!messagesData)
    return {
      props: {
        notFound: true,
      },
    };

  return {
    props: {
      messagesData: messagesData,
    },
  };
};

export default Messages;
