import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from 'context/';

export const GoogleAuthButton = () => {
  const { handleAuth } = useAuth();
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
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
    </GoogleOAuthProvider>
  );
};
