import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        // These get translated into Media Queries
        // For Mobile Device
        base: `"nav " "main"`,
        // For Larger Device
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
