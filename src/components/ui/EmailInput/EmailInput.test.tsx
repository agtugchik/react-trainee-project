import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EmailInput, emailInputLabelText } from './EmailInput';
import { useForm } from 'react-hook-form';
import { BaseForm } from 'types/sign-in-up-form';
import { errors } from 'components/ui/InputValidationError/InputValidationError';

const { getByLabelText, getByText } = screen;
const notValidEmail = '123';
const validEmail = 'artur@mail.ru';

describe('EmailInput component', () => {
  beforeEach(() => {
    const TestInput = () => {
      const form = useForm<BaseForm>({
        defaultValues: {
          email: '',
          password: '',
        },
        mode: 'onChange',
      });

      return <EmailInput form={form} />;
    };

    render(<TestInput />);
  });
  afterEach(cleanup);

  it('should throw error', () => {
    const emailInputNode = getByLabelText(emailInputLabelText);
    fireEvent.change(emailInputNode, { target: { value: notValidEmail } });
    waitFor(() => expect(getByText(errors.email)).toBeInTheDocument());
  });

  it("shouldn't throw error", () => {
    const emailInputNode = getByLabelText(emailInputLabelText);
    fireEvent.change(emailInputNode, { target: { value: validEmail } });
    waitFor(() => expect(getByText(errors.email)).not.toBeInTheDocument());
  });
});
