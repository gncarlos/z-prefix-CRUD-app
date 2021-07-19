import { Container, Grid } from '@material-ui/core';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from '../styles'

const MainQuoteArea = () => {
  const classes = useStyles();

  return(
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
            justifyContent='center'>
              <Grid item>
                <Button
                  className={classes.button}
                  variant='contained'
                  >
                    Save quote
                </Button>
                <Button
                  className={classes.button}
                  variant='contained'>
                    Another one
                </Button>
                <div align='center'>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'>
                    Create a quote
                </Button>
                </div>
              </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
export default MainQuoteArea