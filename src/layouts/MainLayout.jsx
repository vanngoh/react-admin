import { Grid, GridItem } from '@chakra-ui/react';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Grid
      templateAreas={`"menu content"`}
      gridTemplateRows={'1fr'}
      gridTemplateColumns={'250px 1fr'}
      fontWeight="bold"
    >
      <GridItem area="menu">
        <Menu />
      </GridItem>
      <GridItem area="content">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
