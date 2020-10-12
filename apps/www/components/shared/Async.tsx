import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export interface AsyncProps<TQuery = unknown, TKey extends keyof TQuery = any> {
  loading: boolean;
  error?: Error;
  data: TQuery;
  dataKey: keyof TQuery;
  Component: React.FunctionComponent<{ data: TQuery[TKey] }>;
}

const Async: <T>(props: AsyncProps<T>) => JSX.Element = ({
  loading,
  error,
  data,
  dataKey,
  Component,
}) => {
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return (
      <Container maxWidth="lg">
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }
  return <Component data={data[dataKey]} />;
};

export default Async;
