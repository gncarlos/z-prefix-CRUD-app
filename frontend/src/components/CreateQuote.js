import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from '../styles'

const CreateQuote = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();

  const authorHelperText = `If you don't know the author type Anonymous.
                            We prefer to avoid it but we can use them.`

  const handleClickCreate = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='large'
        onClick={handleClickCreate}>
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
          />
          <TextField
            margin="dense"
            id="author"
            label="Author/Character"
            type="text"
            fullWidth
            helperText={authorHelperText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default CreateQuote