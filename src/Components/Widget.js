const sendRequest = async (input) => {
  console.log(input);
  const response = await fetch("http://localhost:8000", {
    credentials: "include",
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({input: input})
  });
  return await response.json();
}

const handleNewUserMessage = (newMessage) => {
  console.log(newMessage);
  sendRequest(newMessage).then(result=>{
    console.log(result.output);
    addResponseMessage(result.output);
  })
};

  // <Widget
  // title="Stock Broker Chatbot"
  // subtitle="I will help you with stocks"
  // handleNewUserMessage={ handleNewUserMessage } />;