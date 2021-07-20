import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from '../styles'
import CreateQuote from './CreateQuote'
import SavedQuotes from './SavedQuotes'

const Home = () => {
  const classes = useStyles();

  // const [recent, setRecent] = useState(false)

  const handleClickSave = () => {

    // setRecent(true)
  }
  // const showRecent = () => {
  //   if (recent === true) {
  //     return (<SavedQuotes/>)
  //   }
  // }
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
                  onClick={handleClickSave}
                  >
                    Save quote
                </Button>
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
      {/* {showRecent()} */}
    </div>
  )
}
export default Home