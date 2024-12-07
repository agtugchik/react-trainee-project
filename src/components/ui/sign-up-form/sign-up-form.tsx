import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { SubmitButton } from 'components/ui/submit-button';

export const SignUpForm = () => {
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
      <PasswordInput isConfirm={true} />
      <SubmitButton />
    </form>
  );
};
