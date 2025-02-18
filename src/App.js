import Grid from '@mui/material/Grid2'; // Import Grid component from Material-UI
import Detail from './components/detail/Detail'; // Import Detail component
import Main from './components/main/Main'; // Import Main component

function App() {
  return (
    <div>
      {/* Container Grid with full height of the viewport */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        {/* Grid item for Income details */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Income"   />
        </Grid>

        {/* Grid item for Main component */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Main />
        </Grid>

        {/* Grid item for Expenses details */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Detail title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App; // Export the App component as the default export
