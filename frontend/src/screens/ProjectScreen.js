import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Project from '../components/Project';
//import Paper from '../components/Paper';

function ProjectScreen() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>
      <h1>All Project Of STAM:CSE</h1>
      <br></br>
      <div>
        {
          <Row>
            {projects.map((project) => (
              <Col key={project._id} sm={6} md={4} lg={4} className="mb-3">
                <Project project={project}></Project>
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}
export default ProjectScreen;
