import { LanguageService } from '@bigcommerce/checkout-sdk';
import { memoize } from '@bigcommerce/memoize';
import { object, string, ObjectSchema } from 'yup';

import { DocumentOnlyCustomFormFieldsetValues } from './DocumentOnlyCustomForm';

export type documentPaymentMethods = 'oxxo' | 'qpay' | 'boleto';
export interface DocumentValidationSchemaOptions {
    paymentMethod: documentPaymentMethods;
    language: LanguageService;
}

const checkoutComShemas = {
    oxxo: (language: LanguageService) => ({
        ccDocument: string()
            .notRequired()
            .length(
                18,
                language.translate('payment.credit_card_document_invalid_error_oxxo')
            ),
    }),
    qpay: (language: LanguageService) => ({
        ccDocument: string()
            .notRequired()
            .max(
                32,
                language.translate('payment.credit_card_document_invalid_error_qpay')
            ),
    }),
    boleto: (language: LanguageService) => ({
        ccDocument: string()
            .notRequired()
            .min(
                11,
                language.translate('payment.credit_card_document_invalid_error_boleto')
            )
            .max(
                14,
                language.translate('payment.credit_card_document_invalid_error_boleto')
            ),
    }),
};

export default memoize(function getDocumentValidationSchema({
    paymentMethod,
    language,
}: DocumentValidationSchemaOptions): ObjectSchema<DocumentOnlyCustomFormFieldsetValues> {

    return object(checkoutComShemas[paymentMethod](language));
});
