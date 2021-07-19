import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from '../styles';

const Quotes = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant='body2'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>
            <Typography
              color='textSecondary'
              variant='caption'>
              -Author
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant='body2'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>
            <Typography
              color='textSecondary'
              variant='caption'>
              -Author
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            Hello
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            Hello
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            Hello
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            Hello
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
export default Quotes