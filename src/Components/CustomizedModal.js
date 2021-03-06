import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[6],
    padding: theme.spacing.unit * 4,
  },
  hs: {
    width: '90%',
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
  ty: {
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  form: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  textField: {
    width: '50%',
  }
});

class CustomizedModal extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <div className={classes.hs}>
            {this.props.children}
          </div>
        </div>
      </Modal>
    );
  }
}

CustomizedModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default CustomizedModal = withStyles(styles)(CustomizedModal);
