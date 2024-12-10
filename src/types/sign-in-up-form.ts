interface BaseForm {
  email: string;
  password: string;
}

export interface SignInFormType extends BaseForm {
  remember: boolean;
}

export interface SignUpFormType extends BaseForm {
  confirm_password: string;
}
