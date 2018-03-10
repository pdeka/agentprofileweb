/*!

 =========================================================
 * Material Dashboard React - v1.0.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
    WebkitTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    MozTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    OTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    MsTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const container = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
};

const fontFamilySansSerif = "'Oswald', 'Helvetica', 'Arial', sans-serif";
const fontFamilySerif = "'Alegreya', 'Times New Roman', serif";

const primaryColor = '#616161';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';
const whiteColor = '#ffffff';

// ##############################
// // // App styles
// #############################

const appStyle = theme => ({
    wrapper: {
        position: 'relative',
        top: '0',
        height: '100vh',
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: 'auto',
        position: 'relative',
        float: 'right',
        ...transition,
        maxHeight: '100%',
        width: '100%',
    },
    content: {
        marginTop: '70px',
        padding: '30px 15px',
        minHeight: 'calc(100% - 123px)',
    },
    container,
    map:{
        marginTop: '70px',
    }
});

// ##############################
// // // Sidebar styles
// #############################


// ##############################
// // // Header styles
// #############################


// ##############################
// // // HeaderLinks styles
// #############################


// ##############################
// // // Footer styles
// #############################


// ##############################
// // // Dashboard styles
// #############################


// ##############################
// // // Icons styles
// #############################


// ##############################
// // // StatsCard styles
// #############################


// ##############################
// // // ChartCard styles
// #############################


// ##############################
// // // TasksCard styles
// #############################


// ##############################
// // // RegularCard styles
// #############################


// ##############################
// // // ProfileCard styles
// #############################

// ##############################
// // // Button styles
// #############################

const buttonStyle = {
    button: {
        backgroundColor: grayColor,
        color: '#FFFFFF',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '12px 30px',
        margin: '10px 1px',
        fontSize: '12px',
        fontWeight: '400',
        fontFamily: fontFamilySansSerif,
        textTransform: 'uppercase',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: grayColor,
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    },
    fullWidth:{
        width: '100%'
    },
    primary: {
        backgroundColor: primaryColor,
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        '&:hover': {
            backgroundColor: primaryColor,
            boxShadow: '0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        }
    },
    info: {
        backgroundColor: infoColor,
        boxShadow: '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
        '&:hover': {
            backgroundColor: infoColor,
            boxShadow: '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
        }
    },
    success: {
        backgroundColor: successColor,
        boxShadow: '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        '&:hover': {
            backgroundColor: successColor,
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
        }
    },
    warning: {
        backgroundColor: warningColor,
        boxShadow: '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
        '&:hover': {
            backgroundColor: warningColor,
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
        }
    },
    danger: {
        backgroundColor: dangerColor,
        boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
        '&:hover': {
            backgroundColor: dangerColor,
            boxShadow: '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
        }
    },
    rose: {
        backgroundColor: roseColor,
        boxShadow: '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
        '&:hover': {
            backgroundColor: roseColor,
            boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
        }
    },
    white: {
        '&,&:focus,&:hover': {
            backgroundColor: '#FFFFFF',
            color: grayColor
        }
    },
    simple: {
        '&,&:focus,&:hover':{
            color: '#FFFFFF',
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    transparent: {
        '&,&:focus,&:hover': {
            color: "inherit",
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    round: {
        borderRadius: '30px',
    },
    disabled: {
        opacity: '0.65',
        pointerEvents: 'none'
    }
};

let navButtonStyle = {
    button: {
        backgroundColor: grayColor,
        color: '#FFFFFF',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '0px 5px',
        margin: '0px 1px',
        fontFamily: fontFamilySansSerif,
        fontSize: '17px',
        fontWeight: '400',
        textTransform: 'none',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover,&:focus': {
        //     backgroundColor: grayColor,
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    },
    transparent: {
        '&': {
            color: "inherit",
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    round: {
        borderRadius: '30px',
    },
    disabled: {
        opacity: '0.65',
        pointerEvents: 'none'
    }
};

let splashButtonStyle = {
    button: {
        backgroundColor: 'transparent',
        color: '#FFFFFF !important',
        background: 'transparent',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border:'1px solid white',
        borderRadius: '0',
        position: 'relative',
        padding: '0px 5px',
        margin: '0px 1px',
        fontFamily: fontFamilySansSerif,
        fontSize: '17px',
        fontWeight: '400',
        textTransform: 'none',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover,&:focus': {
            backgroundColor: '#616161',
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    }
};


if (window.screen.availWidth < 991){
  navButtonStyle.button['&:hover,&:focus'] = {
              backgroundColor: whiteColor,
              boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
  };
}

// ##############################
// // // IconButton styles
// #############################

// ##############################
// // // Table styles
// #############################


// ##############################
// // // CustomInput styles
// #############################


// ##############################
// // // Tasks styles
// #############################


// ##############################
// // // Typography styles
// #############################

// ##############################
// // // SnackbarContent styles
// #############################

module.exports = {
    buttonStyle,
    navButtonStyle,
    appStyle,
    splashButtonStyle,
}
