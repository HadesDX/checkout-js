import React, { memo, useCallback, useMemo, FunctionComponent } from 'react';

import { TranslatedString } from '../../locale';
import { FormField, TextInput } from '../../ui/form';

export interface CreditCardCustomFieldProps {
    additionalClassName: string;
    autoComplete: string;
    labelId: string;
    name: string;
}

const CreditCardCustomField: FunctionComponent<CreditCardCustomFieldProps> = props => {
    const { additionalClassName, autoComplete, labelId, name } = props;

    const renderInput = useCallback(({ field }) => (
        <TextInput
            { ...field }
            autoComplete={ autoComplete }
            id={ field.name }
        />
    ), [autoComplete]);

    const labelContent = useMemo(() => (
        <TranslatedString id={ labelId } />
    ), [labelId]);

    return <FormField
        additionalClassName={ additionalClassName }
        input={ renderInput }
        labelContent={ labelContent }
        name={ name }
    />;
};

export default memo(CreditCardCustomField);
