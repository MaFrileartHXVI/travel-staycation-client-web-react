import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({
  type,
  onClick,
  href,
  target,
  className,
  isPrimary,
  isLight,
  isDisabled,
  isLoading,
  isSmall,
  isLarge,
  isBlock,
  isExternal,
  hasShadow,
  children,
  style,
}) {
  const classNameString = [
    className,
    isPrimary && 'btn-primary',
    isLight && 'btn-light',
    isLarge && 'btn-lg',
    isSmall && 'btn-sm',
    isBlock && 'btn-block',
    hasShadow && 'btn-shadow',
  ]
    .filter(Boolean)
    .join(' ');

  if (isDisabled || isLoading) {
    return (
      <span
        className={[classNameString, isDisabled && 'disabled'].filter(Boolean).join(' ')}
        style={style}
      >
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5" role="status" aria-hidden="true" />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          children
        )}
      </span>
    );
  }

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={classNameString}
          style={style}
          target={target === '_blank' ? '_blank' : undefined}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={href}
        className={classNameString}
        style={style}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNameString}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isLight: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
};
