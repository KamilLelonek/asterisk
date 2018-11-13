const {email} = require('./index')

describe('email', () => {
  test('should replace username/login with stars', () => {
    const address = 'user@domain.com'

    expect(email(address)).toEqual('****@domain.com')
  })

  test('should not replace anything in aninvalid address', () => {
    const address = 'user_domain.com'

    expect(email(address)).toEqual(address)
  })
})
