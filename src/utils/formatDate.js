export default function formatDate(date) {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
  });
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
  return `${da} ${mo}`;
}