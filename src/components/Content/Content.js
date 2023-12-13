import React from 'react';
import './content.css';

const Content = (props) => {
  const { title } = props;
  return (
    <main className="content">
      <p className="name_content">{title}</p>
      <p>This is the main content</p>
    </main>
  );
};

export default Content;