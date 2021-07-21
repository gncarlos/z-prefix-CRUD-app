import { useState, useEffect } from 'react'


const CreatedQuotes = () => {
  const [quotes, setQuotes] = useState([1,2,3]);

  useEffect(() => {
    console.log('fetching created quotes')
    fetch('http://localhost:3001/created')
      .then(data => data.json())
      .then(json => setQuotes(json))
      .catch(err => console.log(err))
  }, [])

  const getQuotes = () => {
    return quotes.map((quote, index) => {
        return <p key={index}>"{quote.quote}", -{quote.author}</p>
      })
  }

  return (<>
    {getQuotes()}
  </>)
}

export default CreatedQuotes;