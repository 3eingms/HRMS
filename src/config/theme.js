import {createTheme} from "@mui/material"
import { purple } from '@mui/material/colors';
const theme = createTheme({
  typography:{
    // fontFamily = 
  },
    palette: {
      primary: {
        main:"#03a9f4",
      },
      secondary:{
        main:purple[700]
      },
      
    },
  });

  export default theme