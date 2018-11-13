const regexpEmail = /.+?(?=@)/

function replacer({length}) {
  return '*'.repeat(length)
}

function email(email) {
  return email.replace(regexpEmail, replacer)
}

module.exports = {email}
