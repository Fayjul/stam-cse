import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

export default function Experience(props) {
  const [see, setSee] = useState(false);
  const { experience } = props;
  const handleSee = () => {
    if (see) {
      setSee(false);
    } else {
      setSee(true);
    }
  };
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
        {see ? (
          <>
            <Card.Text>{experience.experience}</Card.Text>
            <Button onClick={handleSee}>Close</Button>
          </>
        ) : (
          <Button onClick={handleSee}>Read Experience</Button>
        )}
      </Card.Body>
    </Card>
  );
}
