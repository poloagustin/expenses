import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useIndexStyles } from '../../styles/index';
import React from 'react';
import { GetAccountTypesQuery } from '../shared/queries/GetAccountTypes.query';

export interface AccountTypesSelectProps {
  value: number;
  setValue: (value: number) => void;
}

const AccountTypesSelectContent = ({
  accountTypes,
  value,
  setValue,
}: {
  accountTypes: any[];
} & AccountTypesSelectProps) => {
  const classes = useIndexStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="type-label">Age</InputLabel>
      <Select
        labelId="type-label"
        id="type-select"
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      >
        {accountTypes.map((accountType) => (
          <MenuItem key={accountType.id} value={accountType.id}>
            {accountType.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const AccountTypesSelect = (props: AccountTypesSelectProps) => {
  return (
    <GetAccountTypesQuery
      Component={AccountTypesSelectContent}
      componentProps={props}
    />
  );
};
