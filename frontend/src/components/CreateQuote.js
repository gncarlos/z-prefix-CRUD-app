import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from '../styles'

const CreateQuote = () => {
  const [open, setOpen] = useState(false)
  const [newQuote, setNewQuote] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const classes = useStyles();

  const authorHelperText = `If you don't know the author type Anonymous.
                            We prefer to avoid it but we can use them.`

  const handleClickCreateAQuote = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleClickCreate = () => {
    let newQuoteObject = {
      quote: newQuote,
      author: newAuthor,
      user_created: true
    }
    fetch('http://localhost:3001/new-quote', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuoteObject)
    })
    .catch(err => console.log(err))
    .then(handleClose())
  }

  return (
    <>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='large'
        onClick={handleClickCreateAQuote}>
          Create a quote
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Quote</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a quote, fill the fields below and click on create. We'll add it and other user will be able to see them!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="quote"
            label="Quote"
            type="text"
            fullWidth
            onChange={(e)=> setNewQuote(e.target.value)}
          />
          <TextField
            margin="dense"
            id="author"
            label="Author/Character"
            type="text"
            fullWidth
            helperText={authorHelperText}
            onChange={(e)=> setNewAuthor(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default CreateQuote