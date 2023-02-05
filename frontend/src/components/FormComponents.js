import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';

function FormComponent() {
  const navigate = useNavigate();

  const redirect = '/';

  const [paperName, setPaperName] = useState('');
  const [topic, setTopic] = useState('');
  const [pdf, setPdf] = useState('');
  const [batch, setBatch] = useState(0);

  const handleAddPaper = async (e) => {
    //e.preventDefault();
    try {
      const { data } = await axios.post('api/papers/upload', {
        paperName,
        topic,
        pdf,
        batch,
      });
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
    console.log(paperName, topic, pdf, batch);
  };

  return (
    <div className="container small-container">
      <h1 className="my-3">Upload paper</h1>
      <form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name of this paper</Form.Label>
          <Form.Control
            required
            onChange={(e) => setPaperName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="topic">
          <Form.Label>Topic</Form.Label>
          <Form.Control required onChange={(e) => setTopic(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pdf">
          <Form.Label>Paper Pdf</Form.Label>
          <Form.Control required onChange={(e) => setPdf(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="batch">
          <Form.Label>Batch</Form.Label>
          <Form.Control required onChange={(e) => setBatch(e.target.value)} />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" onClick={handleAddPaper}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
