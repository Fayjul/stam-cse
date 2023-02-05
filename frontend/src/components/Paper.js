import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Paper(props) {
  const { paper } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Paper Name : {paper.paperName}</Card.Title>

        <Card.Text>Topic : {paper.topic}</Card.Text>
        <Card.Text>Batch : {paper.batch}</Card.Text>
        <a href={paper.pdf}>
          <Button>Click for </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
