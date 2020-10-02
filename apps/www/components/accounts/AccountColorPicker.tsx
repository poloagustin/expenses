import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, StyleRules } from '@material-ui/core/styles';
import React from 'react';

const colors = [
  '#26c6da',
  '#0097a7',
  '#0d47a1',
  '#1565c0',
  '#039be5',
  '#64b5f6',
  '#ff6f00',
  '#ffa000',
  '#ffb300',
  '#ce9600',
  '#8d6e63',
  '#6d4c41',
  '#d32f2f',
  '#ff1744',
  '#f44336',
  '#ec407a',
  '#AD1457',
  '#6a1b9a',
  '#ab47bc',
  '#ba68c8',
  '#00695c',
  '#00897b',
  '#4db6ac',
  '#2e7d32',
  '#43a047',
  '#64dd17',
  '#212121',
  '#5f7c8a',
  '#b0bec5',
  '#455A64',
  '#607d8b',
  '#90a4ae',
];

const useStyles = makeStyles(() =>
  createStyles(
    colors.reduce(
      (obj, backgroundColor, index) => ({
        ...obj,
        [`color-${index}`]: {
          backgroundColor,
          display: 'inline-flex',
          marginRight: '1rem',
        },
      }),
      {} as StyleRules
    )
  )
);

export interface AccountColorPickerProps {
  value: string;
  setValue: (color: string) => void;
}

const AccountColorPicker = ({ value, setValue }: AccountColorPickerProps) => {
  const classes = useStyles();

  return (
    <FormControl>
      <InputLabel id="color-label">Color</InputLabel>
      <Select
        labelId="color-label"
        id="color-select"
        value={`${value === null ? '' : value}`}
        onChange={(event) => setValue(`${event.target.value}`)}
        className={classes.select}
      >
        {colors.map((color, index) => (
          <MenuItem key={index} value={color}>
            <Avatar className={classes[`color-${index}`]}>#</Avatar>
            {color}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccountColorPicker;
