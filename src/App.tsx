import React, { useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import MainContent from "./components/templates/MainContent";

type FarmField = {
  id: string;
  name: string;
};

const App = (): JSX.Element => {
  const sampleFarmFields: FarmField[] = [
    { id: "0", name: "未選択" },
    { id: "1", name: "水田" },
    { id: "2", name: "畑作" },
    { id: "3", name: "牧草地" },
  ];

  const [farmField, setFarmField] = useState("0");
  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setFarmField(e.target.value);
  };

  return (
    <MainContent>
      <Grid container>
        <Grid item mb={8} xs={12}>
          <Typography variant="h2">ほ場データ入力</Typography>
          <Typography variant="body1">
            ほ場の種類と、土壌種類を入力する。
          </Typography>
        </Grid>
        <Grid item mb={4} xs={12}>
          <Typography variant="h3">ほ場の種類</Typography>
          <FormControl variant="outlined">
            <Select
              value={farmField}
              onChange={handleChange}
              input={<OutlinedInput name="farmField" />}
            >
              {sampleFarmFields.map((farmField, index) => (
                <MenuItem key={index} value={farmField.id}>
                  {farmField.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </MainContent>
  );
};

export default App;
