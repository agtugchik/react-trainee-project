import React from 'react';
import { EmailInput } from 'components/ui/email-input';
import { PasswordInput } from 'components/ui/password-input';
import { RememberCheckbox } from 'components/ui/remember-checkbox';
import { SubmitButton } from 'components/ui/submit-button';
import { NoAccaunt } from 'components/ui/no-accaunt';

export const AuthPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
          <RememberCheckbox />
          <SubmitButton />
        </form>

        <NoAccaunt />
      </div>
    </div>
  );
};
