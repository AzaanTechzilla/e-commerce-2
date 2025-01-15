type H1Props = {
  title: string;
  className: string;
};
export default function H1({ title, className }: H1Props) {
  return (
    <>
      <h1 className={className}>{title}</h1>
    </>
  );
}
