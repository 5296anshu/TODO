import React, { useState } from 'react';

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEntry, setNewEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
      const newEntry = { email: email, password: password }
      console.log(newEntry)

  }

  return (<div className='login-container'>

    <form className='login-form' onSubmit={submitForm}> 
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password" autoComplete='off'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <input type={'submit'} value='submit' id='submit-btn'/>
      </div>
    </form >
    </div>
  )
}
export default BasicForm