import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { errors, InputValidationError } from '../InputValidationError/InputValidationError';
import { FormFieldsNames } from 'constants/form-fields-names';

const { getByText } = screen;

describe('InputValidationError component', () => {
  afterEach(cleanup);

  it('should throw email error', () => {
    render(<InputValidationError inputType={FormFieldsNames.EMAIL} />);
    expect(getByText(errors.email)).toBeInTheDocument();
  });

  it('should throw password error', () => {
    render(<InputValidationError inputType={FormFieldsNames.PASSWORD} />);
    expect(getByText(errors.password)).toBeInTheDocument();
  });

  it('should throw confirm password error', () => {
    render(<InputValidationError inputType={FormFieldsNames.CONFIRM_PASSWORD} />);
    expect(getByText(errors.confirm_password)).toBeInTheDocument();
  });
});
