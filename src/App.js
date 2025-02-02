import Grid from '@mui/material/Grid2';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div >

      <Grid
        container
        spacing={10}
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Income" amount="$50" />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="data" amount="$100" />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Expenses" amount="$200" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
