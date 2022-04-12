interface CardProps {
  children: React.ReactNode;
}

export default function Card({children}: CardProps): JSX.Element {
  return <div>{children}</div>;
}
