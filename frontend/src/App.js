import { CssBaseline } from '@material-ui/core';
import MainQuoteArea from './components/MainQuoteArea';
import SavedQuotes from './components/SavedQuotes';


function App() {

  return (
    <>
      <main>
        <CssBaseline />
        <MainQuoteArea />
        {/* <SavedQuotes /> */}
      </main>
    </>
  );
}

export default App;
