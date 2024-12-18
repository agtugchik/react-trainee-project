import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { BaseForm } from 'types/sign-in-up-form';
import { RememberCheckbox, rememberLabel } from 'components/ui/RememberCheckbox';

const { getByLabelText, getByText } = screen;

describe('RememberCheckbox component', () => {
  beforeEach(() => {
    const TestInput = () => {
      const form = useForm<BaseForm>({
        defaultValues: {
          email: '',
          password: '',
          remember: false,
        },
        mode: 'onChange',
      });

      return <RememberCheckbox form={form} />;
    };

    render(<TestInput />);
  });
  afterEach(cleanup);

  it("shouldn't be checked", () => {
    const rememberInputNode = getByLabelText(rememberLabel).closest('input');
    expect(getByText(rememberLabel)).toBeInTheDocument();
    expect(rememberInputNode).not.toBeChecked();
  });

  it('should be checked', () => {
    const rememberInputNode = getByLabelText(rememberLabel).closest('input');
    fireEvent.click(rememberInputNode as Element);
    expect(rememberInputNode).toBeChecked();
  });
});
