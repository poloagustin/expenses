import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useGetCurrenciesQuery } from '../../generated/graphql';
import React from 'react';

import { FormControlProps } from '../../shared/symbols';
import MenuItem from '@material-ui/core/MenuItem';

export type CurrenciesSelectProps = FormControlProps<number>;

const CurrenciesSelect = ({ value, setValue }: CurrenciesSelectProps) => {
  const { data, loading, error } = useGetCurrenciesQuery();

  if (error) {
    console.error(error);
    return <div>{JSON.stringify(error)}</div>;
  }
  if (loading) {
    return null;
  }

  return (
    <FormControl>
      <InputLabel id="currency-label">Currency</InputLabel>
      <Select
        labelId="currency-label"
        id="currency-select"
        value={`${value === null ? '' : value}`}
        onChange={(event) => setValue(+event.target.value)}
      >
        {data.Currencies.map((currency) => (
          <MenuItem key={currency.id} value={currency.id}>
            {currency.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrenciesSelect;
