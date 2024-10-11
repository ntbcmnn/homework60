import React from "react";
import { Card } from "react-bootstrap";
import { IMessage } from "../../types";

interface Props {
  message: IMessage;
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{message.author}</Card.Title>
        <Card.Text>{message.message}</Card.Text>
        <Card.Text>{new Date(message.datetime).toLocaleString()}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Message;
