import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Navbar } from './componants/navbar/Navbar';
import { Home } from './componants/Home/Home';
import { DarkTheme } from './theme/DarkTheme';
import RestaurantDetails from './componants/restaurant/RestaurantDetails';
import Cart from './componants/cart/Cart';
import Profile from './componants/profile/Profile';
import { CustomerRoute } from './routers/CustomerRoute';


function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      
    <CssBaseline/>  
      <ThemeProvider theme={DarkTheme}/>
      {/* <Navbar/> */}
      {/* <Home/> 
      <RestaurantDetails/>
      <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>
    </div>
    
  );
}

export default App;
