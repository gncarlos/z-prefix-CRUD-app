import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from '../styles'
import CreateQuote from './CreateQuote'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickSave = () => {
    setOpen(true);
  }
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return(
    <div className={classes.mainQuoteArea}>
      <Container maxWidth='sm'>
        <Typography
        variant='h3'
        align='center'
        gutterBottom>
          Quotes for you
        </Typography>
        <Card>
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom>
              Quote of the Day:
            </Typography>
            <Typography
              variant='h5'
              align='center'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>
            <Typography
              align='right'
              color='textSecondary'>
              -Author
            </Typography>
          </CardContent>
        </Card>
        <div>
          <Grid
            container
            spacing={2}
            justifyContent='center'>
              <Grid item>
                <Button
                  className={classes.button}
                  variant='contained'
                  onClick={handleClickSave}>
                    Save quote
                </Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success">
                    Your quote was saved!
                  </Alert>
                </Snackbar>
                <Button
                  className={classes.button}
                  variant='contained'>
                    Another one
                </Button>
                <div align='center'>
                  <CreateQuote />
                </div>
              </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
export default Home

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}