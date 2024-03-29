import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Paper from '../components/Paper';
import SearchBox from '../components/SearchBox';

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
      <h1>All Paper </h1>
      <SearchBox />
      <br></br>
      <div>
        {
          <Row>
            {papers.map((paper) => (
              <Col key={paper._id} sm={6} md={4} lg={4} className="mb-3">
                <Paper paper={paper}></Paper>
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}
export default PapersScreen;
