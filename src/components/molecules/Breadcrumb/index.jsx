import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';
export default function Breadcrumb({ data, className }) {
  const mergedClassName = ['breadcrumb', className].filter(Boolean).join(' ');
  return (
    <nav aria-label="breadcrumb">
      <ol className={mergedClassName}>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <li
              key={`breadcrumb-${index}`}
              className={['breadcrumb-item', isLast ? 'active' : '']
                .filter(Boolean)
                .join(' ')}
            >
              {isLast ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      pageTitle: PropTypes.string.isRequired,
      pageHref: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};
Breadcrumb.defaultProps = {
  className: '',
};