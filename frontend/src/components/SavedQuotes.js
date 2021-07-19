import { Container, Grid, Typography } from '@material-ui/core';
import Quotes from './Quotes'
import useStyles from '../styles';

const SavedQuotes = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md' className={classes.cardGrid}>
        <Typography variant='h5' gutterBottom>
          Saved quotes:
        </Typography>
        <Grid container direction='row' spacing={4}>
          <Quotes/>
        </Grid>
      </Container>

    </>
  )
}
export default SavedQuotes