import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from '../styles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const CreateQuote = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [newQuote, setNewQuote] = useState('')
  const [newAuthor, setNewAuthor] = useState('')


  const authorHelperText = `If you don't know the author type Anonymous.
                            We prefer to avoid it but we can use them.`

  const handleClickCreateAQuote = () => {
    setDialogOpen(true)
  }
  const handleClose = () => {
    setAlert(false);
    setDialogOpen(false);
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
    setAlert(true)
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
      <Dialog open={dialogOpen} onClose={handleClose}>
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
            multiline={true}
            rows={2}
            fullWidth
            onChange={(e) => setNewQuote(e.target.value)}
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
          <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Your quote was created!
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default CreateQuote

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}