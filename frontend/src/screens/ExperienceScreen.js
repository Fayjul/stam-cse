import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Experience from '../components/Experience';

function ExperienceScreen() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch('/api/experience')
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>

      <br></br>
      <div>
        {
          <Row className="experience-card">
            {experiences.map((experience) => (
              <Col key={experience._id} className="mb-3">
                <br />
                <Experience experience={experience}></Experience>
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}
export default ExperienceScreen;
