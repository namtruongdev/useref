import React, { useRef, useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const render = useRef(1);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const reset = () => {
    console.log(nameRef.current.prototype);
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };

  useEffect(() => {
    render.current = render.current + 1;
  });
  console.log(`Rerender ${render.current} times`);
  console.log(name);

  return (
    <main className="form">
      <section className="form__info">
        <input
          ref={nameRef}
          placeholder="* Enter your full name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          ref={emailRef}
          placeholder="* Enter your email address"
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </section>
      <section>
        <input
          ref={subjectRef}
          placeholder="* Enter your subject"
          id="subject"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
        />
      </section>
      <section>
        <textarea
          ref={messageRef}
          placeholder="* Your message here..."
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </section>
      <section className="form__submit">
        <button>Send message</button>
        <button onClick={reset}>Reset</button>
        <p>* please fill all rquired form fields, thanks !</p>
      </section>
      <p>Họ và tên: {name}</p>
      <p>Email: {email}</p>
      <p>Tiêu đề: {subject}</p>
      <p>Nội dung: {message}</p>
    </main>
  );
};

export default App;
