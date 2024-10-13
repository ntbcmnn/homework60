import React from "react";
import { Card } from "react-bootstrap";
import { IMessage } from "../../types";

interface Props {
  message: IMessage;
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <Card className="mb-4 p-3" bg="dark" text="light">
      <Card.Body>
        <Card.Title>{message.author}</Card.Title>
        <Card.Text>{message.message}</Card.Text>
        <Card.Text className="text-end fw-bold">
          {new Date(message.datetime).toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Message;
