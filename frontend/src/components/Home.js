import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from '../styles'
import CreateQuote from './CreateQuote'
import Loader from "react-loader-spinner";

const Home = () => {
  const classes = useStyles()
  const [quotesArray, setQuotesArray] = useState([0])
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0);
  const [lastQuote, setLastQuote] = useState(false)

  const handleClickAnother = () => {
    if (counter < quotesArray.length - 1){
      setCounter(counter + 1)
    }
    if (counter + 1 === quotesArray.length -1) {
      setLastQuote(true)
    }
  }
  const getQuoteOfDay = async () => {
    setLoading(true)
    await fetch('http://localhost:3001/quotes')
            .then(data => data.json())
            .then(json => setQuotesArray(json))
            .catch(err => console.log(err))
    setLoading(false)
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
            {  loading ?
            (<div align='center' className="sweet-loading">
                <Loader
                  type="Bars"
                  color="#00BFFF"
                  height={50}
                  width={50}
                  timeout={30000}
                />
              </div>)
            :
            (<div>
              <Typography
                variant='h5'
                align='center'>
                "{quotesArray[counter].quote}"
              </Typography>
              <Typography
                align='right'
                color='textSecondary'>
                -{quotesArray[counter].author}
              </Typography>
             </div>)
            }
          </CardContent>
        </Card>
        <div>
          <Grid
            container
            spacing={2}
            align='center'
            justifyContent='center'>
              <Grid item>
                <Button
                  className={classes.button}
                  variant='contained'
                  disabled={lastQuote ? true : false}
                  onClick={handleClickAnother}>
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