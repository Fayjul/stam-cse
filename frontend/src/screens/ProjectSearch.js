import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Paper from '../components/Paper';
import SearchBox from '../components/SearchBox';
import axios from 'axios';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import Project from '../components/Project';

function ProjectSearch() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const topic = sp.get('topic') || 'all';
  console.log(topic);

  useEffect(() => {
    fetch(`/api/projects/search?topic=${topic}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>
      <h1>Here All project According to your search. </h1>
      <SearchBox />
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
export default ProjectSearch;
