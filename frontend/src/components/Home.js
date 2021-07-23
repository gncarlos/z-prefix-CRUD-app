import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from '../styles'
import CreateQuote from './CreateQuote'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [quotesArray, setQuotesArray] = useState([0]);
  const [loaded, setLoaded] = useState(false)
  const [counter, setCounter] = useState(0);

  const handleClickSave = () => {
    setOpen(true);
  }
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const getQuoteOfDay = async () => {
    setLoaded(true)
    await fetch('http://localhost:3001/quotes')
            .then(data => data.json())
            .then(json => setQuotesArray(json))
            .catch(err => console.log(err))
    setLoaded(false)
  }

  useEffect(() => {
    getQuoteOfDay()
  },[])

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
              color='textSecondary'
              gutterBottom>
              Quote of the Day:
            </Typography>
            {  loaded ?
            (<div align='center' className="sweet-loading">
                <Loader
                  type="Bars"
                  color="#00BFFF"
                  height={50}
                  width={50}
                  timeout={30000} //3 secs
                />
              </div>)
            :
            (<div>
              <Typography
                variant='h5'
                align='center'>
                "{quotesArray[0].quote}"
              </Typography>
              <Typography
                align='right'
                color='textSecondary'>
                -{quotesArray[0].author}
              </Typography>
             </div>)
            }
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
