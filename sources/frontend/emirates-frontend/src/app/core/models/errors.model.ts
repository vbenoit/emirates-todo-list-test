import { ValueLabel } from './common.model';

export enum ErrorCode {
  Forbidden = 'Forbidden'
}

export const ErrorCodeMessage: Array<ValueLabel<ErrorCode>> = [
  { value: ErrorCode.Forbidden, label: 'Authentification failed' }
];

export class CsError {
  code: ErrorCode;
  get message(): string {
    return this.userFriendlyMessage();
  }

  constructor(code?: ErrorCode) {
    this.code = code;
  }

  private userFriendlyMessage() {
    const message = ErrorCodeMessage.find(f => f.value === this.code);
    return message ? message.label : 'An error happened';
  }
}
