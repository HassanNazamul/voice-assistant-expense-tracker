import Grid from '@mui/material/Grid2';
import Detail from './components/detail/Detail';
import Main from './components/main/Main';

function App() {
  return (
    <div >

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Income" amount="$50" />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Main />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Expenses" amount="$200" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
