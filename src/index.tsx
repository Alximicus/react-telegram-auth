import * as React from 'react';
import { Component, createRef, ReactNode } from 'react';

export enum TLoginButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type TUser = Readonly<{
  auth_date: number;
  first_name: string;
  last_name?: string;
  hash: string;
  id: number;
  photo_url?: string;
  username?: string;
}>;

export type TLoginButtonProps = Readonly<{
  botName: string;
  buttonSize: TLoginButtonSize;
  onAuthCallback?: (user: TUser) => void;
  redirectUrl?: string;
  cornerRadius?: number;
  requestAccess?: string;
  usePic?: boolean;
  lang?: string;
  additionalClassNames?: string;
}>;

export class TLoginButton extends Component<TLoginButtonProps> {
  private readonly _containerRef = createRef<HTMLDivElement>();

  override componentDidMount(): void {
    const {
      botName,
      buttonSize,
      cornerRadius,
      requestAccess,
      usePic,
      onAuthCallback,
      redirectUrl,
      lang,
    } = this.props;

    if (onAuthCallback != null) {
      (window as any).TelegramOnAuthCb = (user: TUser) => onAuthCallback(user);
    }

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?21';
    script.async = true;

    script.setAttribute('data-telegram-login', botName)
    if (buttonSize != null) {
      script.setAttribute('data-size', buttonSize)
    }
    if (buttonSize != null) {
      script.setAttribute('data-radius', `${cornerRadius}`)
    }
    if (usePic != null) {
      script.setAttribute('data-userpic', `${usePic}`)
    }
    if (lang != null) {
      script.setAttribute('data-lang', lang)
    }
    if (redirectUrl != null) {
      script.setAttribute('data-auth-url', redirectUrl)
    }
    if (onAuthCallback != null) {
      script.setAttribute('data-onauth', 'TelegramOnAuthCb(user)')
    }
    if (requestAccess != null) {
      script.setAttribute('data-request-access', requestAccess)
    }

    // componentDidMount will only be called once after the first render.
    this._containerRef.current!.appendChild(script);
  }

  override render(): ReactNode {
    return <div className={`tlogin-button ${this.props.additionalClassNames ?? ''}`} ref={this._containerRef}/>;
  }
}
