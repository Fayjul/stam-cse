import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';

function ShareExpeScreen() {
  const navigate = useNavigate();

  const redirect = '/';

  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [batch, setBatch] = useState(0);

  const handleAddPaper = async (e) => {
    e.preventDefault();
    console.log(name, experience, batch);
    navigate(redirect || '/');
    try {
      const { data } = await axios.post('api/experience/upload', {
        name,
        batch,
        experience,
      });
    } catch (err) {
      toast.error(getError(err));
      console.log(err);
    }
  };

  return (
    <div className="container small-container">
      <h1 className="my-3">Share Your Experience.</h1>
      <form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name of this Poject</Form.Label>
          <Form.Control required onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Write Your Experience</Form.Label>
          <Form.Control
            required
            onChange={(e) => setExperience(e.target.value)}
          />
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

export default ShareExpeScreen;
