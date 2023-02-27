import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Experience(props) {
  const { experience } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1>
            <span className="name-experience">{experience.name}</span> is share
            his experiences
          </h1>
        </Card.Title>
        <Card.Text>
          <h3>He is a student of batch {experience.batch}</h3>
        </Card.Text>
        <Card.Text>{experience.experience}</Card.Text>
      </Card.Body>
    </Card>
  );
}
