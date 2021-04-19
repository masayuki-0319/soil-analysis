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
        <Grid mb={8} xs={12}>
          <Typography variant="h4" style={{ fontWeight: "bold" }} gutterBottom>
            ほ場データ入力
          </Typography>
          <Typography variant="body1" gutterBottom>
            ほ場の種類と、土壌種類を入力する。
          </Typography>
        </Grid>
        <Grid mb={4}>
          <Typography variant="h5" color="secondary" gutterBottom>
            ほ場の種類
          </Typography>
          <FormControl
            variant="outlined"
            style={{ width: "50%", marginBottom: "20px", minWidth: 120 }}
          >
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
