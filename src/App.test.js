// const Chatbot = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [messageHistory, setMessageHistory] = useState([]);

//   const openai = new OpenAI({
//     apiKey: "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",
//     dangerouslyAllowBrowser: true
//   });

//   const sendMessage = async () => {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: input }],
//     });

//     setOutput(output + chatCompletion.choices[0].message.content + "\n");
//     setInput(""); // Clear the input field after sending the message
//   };

//   return (
//     <div className="chat-container">
//       <h1>Chatbot</h1>
//       <div className="bot-message">{output}</div>
//       <div className="user-message">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="chat-input"
//         />
//         <button type="button" onClick={sendMessage} className="send-button">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Chatbot;
