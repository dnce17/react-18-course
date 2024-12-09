// NOTE: This is just a mini lesson on some basics of jsx
// Creator deletes these codes in the video, but I'm keeping it here as reference

import React from 'react'

const App = () => {
  const name = "Johnny Test";
  const x = 10;
  const y = 30;
  const names = ['Bob', 'Rad', 'Ashley'];
  const loggedIn = true;

  // Inline styling
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  // This works fine, but you usually want conditional inside
  // the one return statement below this entire if block
  // if (loggedIn) {
  //   return <h1>Hello Member</h1>;
  // }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={{ color: 'red', fontSize: '24px' }}>Hi</p>
      <p style={ styles }>See you later, { name } </p>
      <p>
        Sum of x and y: { x + y }
      </p>
      <ul>
        { names.map((name, index) => (
          <li key={ index }>{ name }</li>
        ))}
      </ul>
      { loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App