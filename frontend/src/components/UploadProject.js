import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';

function UploadPoject() {
  const navigate = useNavigate();

  const redirect = '/';

  const [paperName, setPaperName] = useState('');
  const [gitlink, setGitlink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState(0);

  const handleAddPaper = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('api/papers/upload', {
        paperName,
        course,
        description,
        batch,
        gitlink,
        videoLink,
      });
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
    console.log(
      paperName,
      course,
      description,
      batch,
      gitlink,
      videoLink,
      batch
    );
  };

  return (
    <div className="container small-container">
      <h1 className="my-3">Upload Poject</h1>
      <form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name of this Poject</Form.Label>
          <Form.Control
            required
            onChange={(e) => setPaperName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="course">
          <Form.Label>Course</Form.Label>
          <Form.Control required onChange={(e) => setCourse(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Poject Description</Form.Label>
          <Form.Control
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="batch">
          <Form.Label>Batch</Form.Label>
          <Form.Control required onChange={(e) => setBatch(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="video">
          <Form.Label>Video</Form.Label>
          <Form.Control
            required
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="github">
          <Form.Label>Github</Form.Label>
          <Form.Control required onChange={(e) => setGitlink(e.target.value)} />
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

export default UploadPoject;
