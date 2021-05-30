import { VFC } from 'react';
import { SelectBox } from '../../molecules/SelectBox';
import { SelectOptions } from '../../molecules/SelectOptions';
import { InputAnalysisData } from '../../../types/InputAnalysisData';
import { useAnalysisItemSelectOptions } from '../../../hooks/useAnalysisItemSelectOptions';

type Props = {
  inputAnalysisData: InputAnalysisData;
  handleChange: (props?: any) => void;
};

export const SelectFieldTypeId: VFC<Props> = (props) => {
  const { inputAnalysisData, handleChange } = props;

  const { fieldTypeData } = useAnalysisItemSelectOptions();

  return (
    <SelectBox
      displayName='ほ場の種類'
      keyName='fieldTypeId'
      defaultValue={inputAnalysisData.fieldTypeId}
      onChange={handleChange}
    >
      {SelectOptions({
        options: fieldTypeData,
        nameKey: 'name',
        valueKey: 'id',
      })}
    </SelectBox>
  );
};
