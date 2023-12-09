import React, { useState } from 'react';

const ChatGPTComponent = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  const generateResponse = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 1050 // Adjust parameters as needed
        })
      });

      const data = await response.json();

      // Handle the response and update state with generated text
      setOutputText(data.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your message here..."
        rows={4}
        cols={50}
      />
      <button onClick={generateResponse}>Send</button>
      <div>
        <p>AI Response:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default ChatGPTComponent;
