import React, { memo, FunctionComponent } from 'react';

import { Fieldset } from '../../ui/form';
import { CreditCardCustomField } from '../creditCard';

export interface DocumentOnlyCustomFormProps {
    additionalClassName: string;
    autoComplete: string;
    labelId: string;
    name: string;
}

export interface DocumentOnlyCustomFormFieldsetValues {
    ccDocument?: string;
}

const DocumentOnlyCustomForm: FunctionComponent<DocumentOnlyCustomFormProps> = ({
    additionalClassName,
    autoComplete,
    labelId,
    name,
}) => (
    <Fieldset>
        <div className="form-ccFields">
            <CreditCardCustomField
                additionalClassName={ additionalClassName }
                autoComplete={ autoComplete }
                labelId={ labelId }
                name={ name }
            />
        </div>
    </Fieldset>
);

export default memo(DocumentOnlyCustomForm);
