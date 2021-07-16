import { CssBaseline, Container, Typography, Grid } from '@material-ui/core'
import { Card, CardContent, CardActions } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import './App.css';

const useStyles = makeStyles({
  root: {

  },
  container: {
    marginTop: '50px'
  },
  title: {
    fontSize: 18
  },
  button: {
    margin: '10px'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
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
                justify='center'>
                  <Grid item>
                    <Button
                      className={classes.button}
                      variant='contained'>
                        Save quote
                    </Button>
                    <Button
                      className={classes.button}
                      variant='contained'>
                        Another one
                    </Button>
                  </Grid>
              </Grid>
            </div>
            {/* <Container className={classes.cardGrid}>
              <Typography>Saved quotes:</Typography>
              <Grid container spacing={4}>
                <Grid item>
                  <Card className={classes.card}>
                    <CardContent>
                      Hello
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container> */}
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
