import type { ButtonHTMLAttributes, FC } from 'react';

export interface OmniaButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'type'> {
  text: string;
  className?: string;
  ariaLabel?: string;
}

const OmniaButton: FC<OmniaButtonProps> = ({
  text,
  className = '',
  ariaLabel,
  onClick,
  disabled = false,
  type = 'button'
}) => {
  return (
    <div className="main-button">
      <button
        className={`theme-btn ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
        aria-label={ariaLabel ?? text}
      >
        {text}
      </button>
      <span className="arrow-btn">
        <i className="icon-arrow-right" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default OmniaButton;
