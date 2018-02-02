// @flow
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Context } = require( '../../utils')
import * as validation from '../../validation'

// Check Mutate.parse.
type BackendError = validation.ValidationError | validation.ValidationErrors<*>;

const throwError = (error: BackendError) => {
  throw new Error(JSON.stringify(error));
};

const throwNotAuthorizedError = () => {
  throwError({ type: 'notAuthorized' });
};

const auth = {
  // $FlowFixMe
  async signup(parent, args, ctx, info) {
    const validationErrors = validation.validateEmailPassword(args);
    if (validationErrors) throwError({ type: 'notAuthorized'})

    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  // $FlowFixMe
  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
}

module.exports = { auth }
