import { CheckIcon } from '@heroicons/react/solid';
import React, { Children } from 'react';
import { Link, To } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Button = ({
  id,
  className,
  title,
  to = '',
  colorless,
  onClick,
  disabled,
  children,
  headless,
  loading,
  success,
}: {
  id?: string,
  className?: string,
  title?: string,
  to?: To,
  colorless?: boolean,
  onClick?: any,
  disabled?: boolean,
  children?: React.ReactNode,
  headless?: boolean,
  loading?: boolean,
  success?: boolean,
}) => {
  // Return an empty button element if there are no children.
  // Used for navigation buttons when needing a single right aligned button.
  if (Children.toArray(children).length <= 0) return <div role="none" />;

  // Tailwind classes based on props. As observed, classes added later override
  // earlier classes style.
  const style = () => {
    if (headless) return className;

    const base = 'px-8 py-2 rounded-md ease-out transition-colors font-medium whitespace-nowrap text-neutral-100 bg-neutral-900 hover:bg-neutral-800';

    const c = colorless
      ? 'bg-neutral-500 hover:bg-neutral-400'
      : '';

    const d = disabled
      ? 'cursor-not-allowed opacity-50'
      : '';

    const s = success
      ? 'bg-green-300'
      : '';

    return `${base} ${c} ${d} ${s} ${className}`;
  };

  const buttonState = () => {
    if (loading) {
      return <ClipLoader size="18px" color="white" />;
    }

    if (success) {
      return <CheckIcon className="text-white w-6 h-6" />;
    }

    return children;
  };

  const buttonTag = (
    <button
      id={id}
      type="button"
      className={style()}
      onClick={onClick}
      title={title}
      tabIndex={0}
      disabled={disabled}
    >
      {buttonState()}
    </button>
  );

  const linkComp = (
    <Link
      id={id}
      className={style()}
      onClick={onClick}
      title={title}
      tabIndex={0}
      to={to}
    >
      {buttonState()}
    </Link>
  );

  return String(to).length === 0 || disabled ? buttonTag : linkComp;
};

export default Button;
