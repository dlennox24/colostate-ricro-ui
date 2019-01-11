import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

class Form extends React.Component {
  createFormGroup = options => (
    <FormGroup row>
      {options.map(switchOption => (
        <FormControlLabel
          key={switchOption.shortName}
          control={
            <Switch
              checked={this.props[switchOption.shortName]}
              onChange={this.props.onSwitchChange(switchOption.shortName)}
              value={switchOption.shortName}
              color="primary"
            />
          }
          label={switchOption.shortName}
        />
      ))}
    </FormGroup>
  );

  createFieldRows = () => {
    const { autoHideDuration, customIcons } = this.props;
    return [
      [
        {
          label: 'Variant',
          shortName: 'variant',
          options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'],
        },
        { label: 'Align Vertical', shortName: 'anchorVert', options: ['top', 'bottom'] },
        {
          label: 'Align Horizontal',
          shortName: 'anchorHorz',
          options: ['left', 'center', 'right'],
        },
        {
          label: 'Autohide Duration',
          shortName: 'autoHideDuration',
          helperText: autoHideDuration <= 0 ? 'Autohide is disabled' : 'Seconds',
        },
      ],
      [
        {
          shortName: 'disables',
          breakpoints: { xs: 12, md: 3 },
          node: this.createFormGroup([
            { label: 'Disable Action', shortName: 'isActionDisabled' },
            { label: 'Disable Icon', shortName: 'isIconDisabled' },
          ]),
        },
        { label: 'Message', shortName: 'message', breakpoints: { xs: 12, md: 6 } },
        {
          label: 'Custom Icon',
          shortName: 'customIcon',
          options: Object.keys(customIcons).map(opt => ({ label: opt, node: customIcons[opt] })),
          breakpoints: { xs: 12, md: 3 },
        },
      ],
    ];
  };

  createTextField = field => {
    const { classes, onChange } = this.props;
    return (
      <TextField
        id={`select-${field.shortName}`}
        label={field.label}
        value={this.props[field.shortName]}
        onChange={onChange(field.shortName)}
        SelectProps={{ MenuProps: { className: classes.menu } }}
        helperText={field.helperText}
        margin="normal"
        variant="outlined"
        fullWidth
        select={Boolean(field.options)}
      >
        {field.options &&
          field.options.map(option => {
            let Icon = option.node;
            if (Icon) {
              Icon = <Icon className={classNames(classes.icon, classes.iconVariant)} />;
            }
            option = typeof option === 'string' ? option : option.label;
            return (
              <MenuItem key={option} value={option}>
                {Icon}
                {option}
              </MenuItem>
            );
          })}
      </TextField>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        {this.createFieldRows().map((row, i) => (
          <Grid key={`${row[0].shortName}-row`} container alignItems={i === 1 ? 'center' : null}>
            {row.map(field => (
              <Grid
                key={field.shortName}
                className={classes.gridItem}
                item
                {...field.breakpoints || { xs: 12, sm: 6, md: 3 }}
              >
                {field.node || this.createTextField(field)}
              </Grid>
            ))}
          </Grid>
        ))}
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  onChange: PropTypes.func.isRequired,
  onSwitchChange: PropTypes.func,
};

export default withStyles(styles)(Form);
