import './App.css';
import React, { useState } from 'react';

const YourComponent = () => {
  const loremIpsumParagraphs = [
    '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    '3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    '4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    '5. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    '6. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    '7. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    '8. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    '9. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    '10. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  ];
  const [generatedData, setGeneratedData] = useState([]);

  const onClickHandler = () => {
    const userInputNumber = parseInt(document.getElementById('yourInputId').value, 10);
    
    if (userInputNumber <= 0 || userInputNumber > loremIpsumParagraphs.length) {
      alert("Please enter a valid number within the range of 1 to " + loremIpsumParagraphs.length);
      return;
    }

    setGeneratedData(loremIpsumParagraphs.slice(0, userInputNumber));
  };

  return (
    <div>
      <h1>Sasta Lorem Ipsum</h1>
      <label htmlFor="">Paragraph</label>
      <input type="number" id="yourInputId" />
      <button onClick={onClickHandler}>Generate</button>

      {generatedData.map((elem, index) => (
        <YourParagraphComponent key={index} text={elem} />
      ))}
    </div>
  );
};

const YourParagraphComponent = ({ text }) => {
  return <p>{text}</p>;
};

export default YourComponent;
