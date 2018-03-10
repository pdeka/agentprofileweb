import React from 'react';
import {
    withStyles, Button
} from 'material-ui';
import PropTypes from 'prop-types';

import { splashButtonStyle } from '../variables/styles';

class SplashButton extends React.Component{
    render(){
        const { classes, ...rest } = this.props ;
        return (
            <Button {...rest} className={classes.button}></Button>
        );
    }
}

SplashButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(splashButtonStyle)(SplashButton);
