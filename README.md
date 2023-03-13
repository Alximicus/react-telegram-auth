# React Telegram Auth

## Overview

My motivation for creating this package was the need to get a simple React component for authorization in Telegram, which would have types for the Typescript, and also support the latest version of Telegram Login Widget.

## Installation

NPM:

`npm i react-telegram-auth` 

Yarn:

`yarn add react-telegram-auth`

## Usage

This package uses Telegram Login Widget: https://core.telegram.org/widgets/login

How to use in your typescript code:

```tsx
import * as React from 'react';
import { Component } from 'react';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

export class Login extends Component {
  render() {
    return (
      <TLoginButton
        botName="YOUR_BOT_NAME"
        buttonSize={TLoginButtonSize.Large}
        lang="en"
        usePic={false}
        cornerRadius={20}
        onAuthCallback={(user) => {
          console.log('Hello, user!', user);
        }}
        requestAccess={'write'}
        additionalClasses={'css-class-for-wrapper'}
      />
    );
  }
}

```

*Please note: Telegram Login Widget only works with 80 ports.*


## License

MIT License

Copyright (c) 2023 Alximicus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
