import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  errors,
  InputValidationError,
} from 'components/ui/InputValidationError/InputValidationError';
import { FormFieldsNames } from 'constants/form-fields-names';

const { getByText } = screen;

describe('InputValidationError component', () => {
  afterEach(cleanup);

  it('should throw correct error', () => {
    render(<InputValidationError inputType={FormFieldsNames.EMAIL} />);
    expect(getByText(errors.email)).toBeInTheDocument();
    render(<InputValidationError inputType={FormFieldsNames.PASSWORD} />);
    expect(getByText(errors.password)).toBeInTheDocument();
    render(<InputValidationError inputType={FormFieldsNames.CONFIRM_PASSWORD} />);
    expect(getByText(errors.confirm_password)).toBeInTheDocument();
  });
});
