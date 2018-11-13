# asterisk

Mask sensitive data and filter out some confidential information.

## Installation

To install all required packages, run:

    npm i

## Usage

Firstly, import the function as follows:

    const {email} = require('./index')

Then, you can use it like:

    > email("kamil@lelonek.me")
    '*****@lelonek.me'

## Testing

To run all tests, execute:

    npm test

## Linting

To validate code style, use:

    npm run lint
