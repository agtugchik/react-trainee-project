import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { RememberCheckbox } from 'components/ui/remember-checkbox';
import { SubmitButton } from 'components/ui/submit-button';

export const SignInForm = () => {
  return (
    <form
      className="space-y-6"
      onChange={(e) => console.log(e)}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <EmailInput />
      <PasswordInput />
      <RememberCheckbox />
      <SubmitButton />
    </form>
  );
};
