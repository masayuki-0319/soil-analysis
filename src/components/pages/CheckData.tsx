import React, { useState, memo } from "react";
import { FormControl, Grid, Typography } from "@material-ui/core";
import SelectBox from "../atoms/selectbox/Selectbox";

type FieldType = {
  value: string;
  name: string;
};

type SoilType = {
  value: string;
  name: string;
};

export const CheckData = memo(() => {
  const sampleFieldTypes: FieldType[] = [
    { value: "1", name: "水田" },
    { value: "2", name: "畑作" },
    { value: "3", name: "牧草地" },
  ];
  const sampleSoilTypes: SoilType[] = [
    { value: "1", name: "露地畑" },
    { value: "2", name: "施設畑" },
    { value: "3", name: "果樹園" },
  ];

  const [fieldType, setFieldType] = useState("");
  const [soilType, setSoilType] = useState("");

  const handleChangeFieldType = (e: React.ChangeEvent<{ value: string }>) => {
    setFieldType(e.target.value);
  };
  const handleChangeSoilType = (e: React.ChangeEvent<{ value: string }>) => {
    setSoilType(e.target.value);
  };

  return (
    <Grid container>
      <Grid item mb={8} xs={12}>
        <Typography variant="h2">ほ場データ入力</Typography>
        <Typography variant="body1">
          ほ場の種類と、土壌種類を入力する。
        </Typography>
      </Grid>
      <Grid item mb={4} xs={12}>
        <FormControl variant="outlined">
          <Typography variant="h3">ほ場の種類</Typography>
          <SelectBox
            name="fieldType"
            value={fieldType}
            onChange={handleChangeFieldType}
            options={sampleFieldTypes}
          />
        </FormControl>
      </Grid>
      <Grid item mb={4} xs={12}>
        <FormControl variant="outlined">
          <Typography variant="h3">土壌の種類</Typography>
          <SelectBox
            name="soilType"
            value={soilType}
            onChange={handleChangeSoilType}
            options={sampleSoilTypes}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
});
