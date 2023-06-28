export default function HeaderHashLink({ className, to }) {

  return (
    <a
      className={className}
      href={`/${to}`}
    ></a>
  );
}
