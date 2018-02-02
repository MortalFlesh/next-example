// @flow
import * as validation from './index';

type Translator = validation.ValidationError => string;

export const translateError: Translator = error => {
  switch (error.type) {
    case 'alreadyExists':
      return 'Zkus něco originálnějšího';

    case 'notExists':
      return 'To neznám';

    case 'wrongPassword':
      return 'Zadej správné heslo';

    case 'notAuthorized':
      return 'Sem nesmíš';

    case 'unknownError':
      return 'Neznám :-) ' + error.message;

    case 'requestFailed':
      return 'Selhal dotaz';

    case 'trim':
      return 'Máš tam mezeru navíc';

    case 'required':
      return 'To musíš vyplnit';

    case 'email':
      return 'Máš špatný e-mail';

    case 'minLength':
      return 'Dej tam aspoň ' + error.minLength + ' znaků';

    case 'maxLength':
      return 'To máš moc dlouhé, zadej jen ' + error.maxLength + ' znaků';

    default:
      // https://flow.org/en/docs/react/redux/#toc-typing-redux-reducers
      // eslint-disable-next-line no-unused-expressions
      (error: empty);
      return '';
  }
};
