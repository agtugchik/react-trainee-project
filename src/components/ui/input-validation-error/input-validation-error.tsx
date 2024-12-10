import React from 'react';
import ErrorIcon from 'assets/icons/error.svg';

type Props = {
  inputType: 'email' | 'password' | 'confirm_password';
};

const errors: { [key: string]: string } = {
  email: 'You have to pass correct email adress',
  password: 'At least one big, one small letter and one nember, 6-15 symbols',
  confirm_password: 'Must match with password',
};

export const InputValidationError = ({ inputType }: Props) => (
  <p className="text-xs text-red-500 flex items-center mt-2">
    <img src={ErrorIcon} alt="error" />
    {errors[inputType]}
  </p>
);
