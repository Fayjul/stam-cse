import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Paper from '../components/Paper';

function PapersScreen() {
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    fetch('/api/papers')
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>
      {/* <h1>All Features Of STAM:CSE</h1> */}
      <br></br>
      <div>
        {
          <Row>
            {papers.map((paper) => (
              <Col key={paper._id} sm={6} md={4} lg={4} className="mb-3">
                <Paper paper={paper}></Paper>
                {console.log(paper)}
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}
export default PapersScreen;
