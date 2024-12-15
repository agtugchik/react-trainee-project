import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from 'context/';

export const GoogleAuthButton = () => {
  const { handleAuth } = useAuth();
  return (
    <div role="google" className="w-full flex justify-center">
      <GoogleLogin
        onSuccess={() => {
          handleAuth(false);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};
