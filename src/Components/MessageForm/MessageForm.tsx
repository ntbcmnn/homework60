import React from "react";
import { Form, Button, Placeholder } from "react-bootstrap";

interface Props {
  author: string;
  message: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setAuthor: (value: string) => void;
  setMessage: (value: string) => void;
}

const MessageForm: React.FC<Props> = ({
  author,
  message,
  onSubmit,
  setAuthor,
  setMessage,
}) => {
  return (
    <Form className="mb-5" onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          required
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          className="bg-dark text-light py-2"
        />
        <Placeholder />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          required
          type="text"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          className="bg-dark text-light"
        />
        <Form.Text className="text-muted">
          Please, respect other users.
        </Form.Text>
      </Form.Group>

      <Button variant="dark" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default MessageForm;
