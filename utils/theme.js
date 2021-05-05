import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6D58A5',
            dark: '#342F51',
            light: '#8D78B7'
        },
        secondary: {
            main: '#F0EFEE',
            second: '#8ED8EF',
        },
        white: {
            main: '#F0EFEE'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#6D58A5',
            secondary: '#F0EFEE'
        },
    },
    typography
});

export default theme;
