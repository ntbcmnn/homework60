import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IMessage } from "../../types";
import Message from "../../Components/Message/Message.tsx";

const Feed = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const baseUrl: string = "http://146.185.154.90:8000/messages";

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<IMessage[]> = await axios.get(baseUrl);
      const sortedMessages: IMessage[] = response.data.sort(
        (a: IMessage, b: IMessage) =>
          new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
      );
      setMessages(sortedMessages);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect((): void => {
    void fetchData();
  }, []);

  return (
    <div className="container m-4">
      {messages.map((message: IMessage) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Feed;
