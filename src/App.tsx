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

type SoilType = {
  id: string;
  name: string;
};

const App = (): JSX.Element => {
  // TODO: FieldType に変更
  const sampleFarmFields: FarmField[] = [
    { id: "1", name: "水田" },
    { id: "2", name: "畑作" },
    { id: "3", name: "牧草地" },
  ];
  const sampleSoilTypes: SoilType[] = [
    { id: "1", name: "露地畑" },
    { id: "2", name: "施設畑" },
    { id: "3", name: "果樹園" },
  ];

  const [farmField, setFarmField] = useState("");
  const [soilType, setSoilType] = useState("");

  const handleChangeFarmField = (e: React.ChangeEvent<{ value: string }>) => {
    setFarmField(e.target.value);
  };
  const handleChangeSoilType = (e: React.ChangeEvent<{ value: string }>) => {
    setSoilType(e.target.value);
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
              onChange={handleChangeFarmField}
              input={<OutlinedInput name="farmField" />}
            >
              {sampleFarmFields.map((farmField, index) => (
                <MenuItem key={index} value={farmField.id}>
                  {farmField.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h3">土壌の種類</Typography>
          <FormControl variant="outlined">
            <Select
              value={soilType}
              onChange={handleChangeSoilType}
              input={<OutlinedInput name="soilType" />}
            >
              {sampleSoilTypes.map((soilType, index) => (
                <MenuItem key={index} value={soilType.id}>
                  {soilType.name}
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
