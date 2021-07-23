import { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core';
import { Typography, Container, Paper, IconButton } from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from '../styles'

const CreatedQuotes = () => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState([]);
  const [alert, setAlert] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [updatedQuote, setUpdatedQuote] = useState({})
  const [updateFlag, setUpdateFlag] = useState(false)

  useEffect(() => {
    console.log('fetching created quotes')
    fetch('http://localhost:3001/created')
      .then(data => data.json())
      .then(json => setQuotes(json))
      .catch(err => console.log(err))
  }, [updateFlag])

  const handleClickEdit = () => {
    console.log('edit', updatedQuote)
    setDialogOpen(true)
  }
  const handleClose = () => {
    setAlert(false);
    setDialogOpen(false);
    setUpdatedQuote({})
  }
  const handleChange = (e) => {

    const value = e.target.value
    setUpdatedQuote(
      {...updatedQuote,
        [e.target.id]: value
      }
    )
  }
  const handleClickSave = (index, quote) => {
    let id = quote.id
    fetch('http://localhost:3001/', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        ...updatedQuote})
    }).catch(err => console.log(err))
    .then(()=>setUpdateFlag(!updateFlag))
    setAlert(true)
    getQuotes()
  }
  const handleClickDelete = (quoteId, index) => {
    fetch('http://localhost:3001/', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: quoteId})
    }).catch(err => console.log(err))
    .then(()=>setUpdateFlag(!updateFlag))
    getQuotes()
  }
  const getQuotes = () => {
    return quotes.map((quote, index) => {
      return (
          <Paper className={classes.paperQuote}>
            <Typography key={index} className={classes.quote}>
              "{quote.quote}" -{quote.author}
              <IconButton fontSize='inherit' onClick={handleClickEdit}>
                <EditIcon className={classes.icon} color='primary' />
              </IconButton>
              <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>Edit Quote</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Make your desired changes to either the quote or author and don't forget to click save!
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="quote"
                    label="Quote"
                    type="text"
                    multiline={true}
                    fullWidth
                    defaultValue={quote.quote}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="dense"
                    id="author"
                    label="Author/Character"
                    type="text"
                    fullWidth
                    defaultValue={quote.author}
                    onChange={handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={() => handleClickSave(index, quote)} color="primary">
                    Save
                  </Button>
                  <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                      Your quote was updated!
                    </Alert>
                  </Snackbar>
                </DialogActions>
              </Dialog>
              <IconButton onClick={()=> handleClickDelete(quote.id, index)}>
                <DeleteIcon className={classes.icon} color='secondary'/>
              </IconButton>
            </Typography>
          </Paper>
        )
      })
  }

  return (
    <div>
      <Container maxWidth='md'>
        <Typography
          variant='h5'
          gutterBottom>
            Created Quotes:
        </Typography>
        {getQuotes()}
      </Container>
    </div>)
}

export default CreatedQuotes;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}