import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Project(props) {
  const { project } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Paper Name : {project.projectName}</Card.Title>

        <Card.Text>Course : {project.course}</Card.Text>
        <Card.Text>Batch : {project.batch}</Card.Text>
        <Card.Text>Description : {project.description}</Card.Text>
        <a href={project.video}>
          <Button>Click for Video </Button>
        </a>
        <a href={project.github}>
          <Button>Click for Github </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
