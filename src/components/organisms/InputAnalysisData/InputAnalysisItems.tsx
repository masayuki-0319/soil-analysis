import { VFC } from 'react';
import { TextField, InputAdornment, Grid } from '@material-ui/core';
import { InputAnalysisData } from '../../../types/InputAnalysisData';
import { SelectFormControl } from '../../molecules/SelectFormControl';
import { analysisItems } from '../../../api/masterData/analysisItems';

type Props = {
  inputAnalysisData: InputAnalysisData;
  handleChange: (props?: any) => void;
};

export const InputAnalysisItems: VFC<Props> = (props) => {
  const { inputAnalysisData, handleChange } = props;

  return (
    <>
      {analysisItems.map((item, index) => {
        return (
          <Grid item md={6} xs={12} style={{ marginBottom: 12 }} key={index}>
            <SelectFormControl>
              <TextField
                variant='outlined'
                type='number'
                onChange={handleChange}
                name={item.keyName}
                value={inputAnalysisData[item.keyName]}
                label={item.displayName}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {item.unitName}
                    </InputAdornment>
                  ),
                }}
                helperText={
                  item.keyName === 'cec'
                    ? '※ 未入力の場合は 20 として計算されます'
                    : ''
                }
              />
            </SelectFormControl>
          </Grid>
        );
      })}
    </>
  );
};
