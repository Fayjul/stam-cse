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

function PaperSearch() {
  const [papers, setPapers] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const topic = sp.get('topic') || 'all';
  console.log(topic);
  useEffect(() => {
    fetch(`/api/papers/search?topic=${topic}`)
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>
      <h1>All Paper from paper search </h1>
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
export default PaperSearch;
