import React from 'react';
import {
    withStyles, Button
} from 'material-ui';
import PropTypes from 'prop-types';

import { navButtonStyle } from '../variables/styles';

class NavButton extends React.Component{
    render(){
        const { classes, color, round, children, disabled, ...rest } = this.props ;
        return (
            <Button
                {...rest}
                className={classes.button + ( color ? " " + classes[color]:"") + ( round ? " " + classes.round:"") + (disabled ? " " + classes.disabled:"")}
                >
                {children}
            </Button>
        );
    }
}

NavButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['transparent']),
    round: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default withStyles(navButtonStyle)(NavButton);
