import React from 'react';
import ReactDOM from 'react-dom';
import Engine from './components/Engine/Engine';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  green500, cyan700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const App = function () {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: green500,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      pickerHeaderColor: green500,
      shadowColor: fullBlack,
    },
  });

  return (
    <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Engine/>
      </MuiThemeProvider>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
