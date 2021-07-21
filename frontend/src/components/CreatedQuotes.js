import { useState, useEffect } from 'react'
import { Typography, Container, Paper, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from '../styles'

const CreatedQuotes = () => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    console.log('fetching created quotes')
    fetch('http://localhost:3001/created')
      .then(data => data.json())
      .then(json => setQuotes(json))
      .catch(err => console.log(err))
  }, [])

  const handleClickDelete = (quoteId, index) => {
    fetch('http://localhost:3001/', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: quoteId})
    }).catch(err => console.log(err))
    let filtered = quotes.filter((quote, qIndex) => qIndex != index)
    setQuotes(filtered)
    getQuotes()
  }
  const getQuotes = () => {
    return quotes.map((quote, index) => {
      let id = quote.id

      return (
          <Paper className={classes.paperQuote}>
            <Typography key={index} className={classes.quote}>
              "{quote.quote}", -{quote.author}
              <IconButton fontSize='inherit'>
                <EditIcon className={classes.icon} color='primary'/>
              </IconButton>
              <IconButton>
                <DeleteIcon className={classes.icon} color='secondary' onClick={()=> handleClickDelete(id, index)}/>
              </IconButton>
            </Typography>
          </Paper>
        )
      })
  }

  return (<>
    <div>
      <Container maxWidth='md'>
        <Typography
          variant='h5'
          gutterBottom>
            Created Quotes:
        </Typography>

          {getQuotes()}


      </Container>
    </div>

  </>)
}

export default CreatedQuotes;