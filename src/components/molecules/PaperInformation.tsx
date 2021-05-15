import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';

type Props = {
  title: string;
  description: string;
};

export const PaperInformation: VFC<Props> = (props) => {
  const { title, description } = props;

  return (
    <Grid
      item
      container
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 21 }}
    >
      <Grid>
        <Typography variant="h5" style={{ fontWeight: 'bold' }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
