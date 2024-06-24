import Link from 'next/link';

const Button = ({ url, color, text }) => {
  return (
    <Link href={url} className={`btn btn-${color}`}>
      {text}
    </Link>
  );
};

export default Button;
