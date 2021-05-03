import React, { memo, VFC } from 'react';
import { Grid, InputAdornment, Paper, TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { analysisResultState } from '../../../store/analysisResultState';
import { analysisItems } from '../../../types/AnalysisResult';
import SelectFormControl from '../../atoms/SelectFormControl';
import { FormTopInfo } from '../../molecules/FormTopInfo';

interface Props {}

export const Step2: VFC<Props> = memo(() => {
  const [analysisResult, setAnalysisResultState] = useRecoilState(analysisResultState);

  const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setAnalysisResultState({ ...analysisResult, [e.target.name]: Number(e.target.value) });
  };

  const fields = analysisItems.map((item, index) => {
    return (
      <Grid item md={6} xs={12} style={{ marginBottom: 12 }} key={index}>
        <SelectFormControl>
          <TextField
            variant="outlined"
            type="number"
            onChange={handleChange}
            name={item.keyName}
            value={analysisResult[item.keyName]}
            label={item.labelName}
            InputProps={{
              endAdornment: <InputAdornment position="end">{item.unitName}</InputAdornment>,
            }}
          />
        </SelectFormControl>
      </Grid>
    );
  });

  return (
    <Paper elevation={8} style={{ padding: 20, marginBottom: 21 }}>
      <Grid container>
        <FormTopInfo title="分析結果の入力" description="※ 分析機器による土壌サンプルの分析結果を入力する。" />
        {fields}
      </Grid>
    </Paper>
  );
});
