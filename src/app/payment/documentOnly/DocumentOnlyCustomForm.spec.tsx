import { mount } from 'enzyme';
import { Formik } from 'formik';
import { noop } from 'lodash';
import React, { FunctionComponent } from 'react';

import DocumentOnlyCustomForm, { DocumentOnlyCustomFormFieldsetValues, DocumentOnlyCustomFormProps } from './DocumentOnlyCustomForm';

describe('OxxoCustomCardForm', () => {
    let defaultProps: DocumentOnlyCustomFormProps;
    let DocumentOnlyCustomFormTest: FunctionComponent<DocumentOnlyCustomFormProps>;
    let initialValues: DocumentOnlyCustomFormFieldsetValues;

    beforeEach(() => {
        defaultProps = {
            additionalClassName: 'custom-additional-class-name',
            autoComplete: 'custom-auto-complete-label',
            labelId: 'custom-label-id',
            name: 'custom-name',
        };

        initialValues = { ccDocument: '' };

        DocumentOnlyCustomFormTest = props => (
            <Formik
                initialValues={ initialValues }
                onSubmit={ noop }
            >
                    <DocumentOnlyCustomForm { ...props } />
            </Formik>
        );
    });

    it('renders oxxo document field', () => {
        const container = mount(<DocumentOnlyCustomFormTest { ...defaultProps } />);

        expect(container.find('input[id="custom-name"]').exists())
            .toEqual(true);
    });
});
