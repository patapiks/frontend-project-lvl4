import React from 'react';

const App = (props) => props.channels.map(({ id, name }) => <div key={id}>{name}</div>);
export default App;
