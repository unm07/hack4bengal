import React from "react";
import "./response.css"

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY"
});

const openai = new OpenAIApi(config);

function createCompletion(data) {
  return new Promise((resolve, reject) => {
    openai.createCompletion(data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

function Prompt(props) {
  const [reply, setReply] = React.useState("");

  async function submitPrompt() {
    const inputPrompt="symptoms and dignosis indicated by the following medicines:"+props.prompt+"and please answer in new lines for each mdeicine";
    try {
      const data = {
        model: "text-davinci-003",
        prompt: inputPrompt,
        max_tokens: 100,
        temperature: 0
      };

      const response = await createCompletion(data);
      setReply(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={submitPrompt} className="hover-button">
        Get Details from AI
      </button>
      <p className="para">{reply}</p>
    </div>
  );
}

export default Prompt;
