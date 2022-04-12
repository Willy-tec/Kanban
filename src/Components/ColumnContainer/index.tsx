type ColumnContainerProps = {
  children: React.ReactNode;
  title: string;
};

export default function ColumnContainer({
  children,
  title,
}: ColumnContainerProps): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <p>Column</p>
      {children}
    </div>
  );
}
