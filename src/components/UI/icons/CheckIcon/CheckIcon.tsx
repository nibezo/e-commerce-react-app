interface ICheckIconProps {
  width?: number;
  height?: number;
  filled?: boolean;
  fill?: string;
}
const CheckIcon: React.FC<ICheckIconProps> = ({ width = 20, height = 20, filled = false, fill = '#222222' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={height}
      viewBox="0 0 48 48"
      fill={filled ? '#f44336' : fill}
    >
      <path d="M21.05 33.3 35.3 19l-2.55-2.5-11.7 11.75-5.9-5.9-2.5 2.5Zm2.95 11q-4.15 0-7.875-1.6-3.725-1.6-6.475-4.35Q6.9 35.6 5.3 31.9 3.7 28.2 3.7 24t1.6-7.925q1.6-3.725 4.35-6.45Q12.4 6.9 16.1 5.3T24 3.7q4.2 0 7.925 1.6 3.725 1.6 6.45 4.325T42.7 16.05q1.6 3.7 1.6 7.95 0 4.2-1.6 7.9t-4.325 6.45Q35.65 41.1 31.95 42.7q-3.7 1.6-7.95 1.6Zm0-3.4q7.05 0 11.975-4.95T40.9 24q0-7.05-4.925-11.975T24 7.1q-7 0-11.95 4.925Q7.1 16.95 7.1 24q0 7 4.95 11.95Q17 40.9 24 40.9ZM24 24Z" />
    </svg>
  );
};

export default CheckIcon;
