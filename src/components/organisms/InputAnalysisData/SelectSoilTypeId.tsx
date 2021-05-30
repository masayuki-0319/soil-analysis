import { VFC } from 'react';
import { SelectBox } from '../../molecules/SelectBox';
import { SelectOptions } from '../../molecules/SelectOptions';
import { InputAnalysisData } from '../../../types/InputAnalysisData';
import { useAnalysisItemSelectOptions } from '../../../hooks/useAnalysisItemSelectOptions';

type Props = {
  inputAnalysisData: InputAnalysisData;
  handleChange: (props?: any) => void;
};

export const SelectSoilTypeId: VFC<Props> = (props) => {
  const { inputAnalysisData, handleChange } = props;

  const { soilTypeData } = useAnalysisItemSelectOptions();

  return (
    <SelectBox
      displayName='土壌の種類'
      keyName='soilTypeId'
      defaultValue={inputAnalysisData.soilTypeId}
      onChange={handleChange}
    >
      {SelectOptions({
        options: soilTypeData,
        nameKey: 'name',
        valueKey: 'id',
      })}
    </SelectBox>
  );
};
