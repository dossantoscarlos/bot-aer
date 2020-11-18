import React,{useEffect} from 'react'
import ChatBot from 'react-simple-chatbot'

const App = () => {
  
    return (
    <ChatBot
      steps={[
        {
          id: 'hello-world',
          message: 'Hello World!',
          end: true,
        },
      ]}
    />
  )
}

export default App