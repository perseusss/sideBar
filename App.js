import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux'
import SideBar from './src/components/authentication/sideBar';
import Main from './src/components/pages/Main';
import Page2 from './src/components/pages/Page2';
import Page3 from './src/components/pages/Page3';


const App = () =>  {
  return (
       <Router>
          <Drawer drawerWidth={250} contentComponent={SideBar}>
            <Scene key="DrawerMenu">
              <Scene key="Main" component={Main} hideNavBar />
              <Scene key="page2" component={Page2} hideNavBar />
              <Scene key="page3" component={Page3} hideNavBar />
            </Scene>
          </Drawer>
       </Router>
  );
};


export default App;