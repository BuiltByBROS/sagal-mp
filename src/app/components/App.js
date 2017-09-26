import React, { PropTypes } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

function App({ children }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="container">
        {children}
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
