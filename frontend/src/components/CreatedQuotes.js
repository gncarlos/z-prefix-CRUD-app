import { useState, useEffect } from 'react'
import { Typography, Container, Paper, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from '../styles'

const CreatedQuotes = () => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState([1,2,3]);

  useEffect(() => {
    console.log('fetching created quotes')
    fetch('http://localhost:3001/created')
      .then(data => data.json())
      .then(json => setQuotes(json))
      .catch(err => console.log(err))
  }, [])
  const handleClickDelete = () => {
    
  }
  const getQuotes = () => {
    return quotes.map((quote, index) => {
        return (
          <Paper className={classes.paperQuote}>
            <Typography key={index} className={classes.quote}>
              "{quote.quote}", -{quote.author}
              <IconButton fontSize='inherit'>
                <EditIcon className={classes.icon} color='primary'/>
              </IconButton>
              <IconButton>
                <DeleteIcon className={classes.icon} color='secondary' onClick={handleClickDelete}/>
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