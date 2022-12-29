import React, { useState } from 'react';
import './SignUp.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      //toast.error('Password do not match');
      console.log('passward not match');
      return;
    } else {
      console.log(name, email, password);
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)',
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="lg"
            id="form3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Repeat your password"
            size="lg"
            id="form4"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <MDBBtn
            onClick={(e) => submitHandler(e)}
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
          >
            Register
          </MDBBtn>
          <p>
            If you already have an account <a href="/login">Log In</a>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
