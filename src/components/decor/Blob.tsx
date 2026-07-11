type BlobProps = {
  className?: string;
};

export default function Blob({ className = "" }: BlobProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
    >
      <path
        fill="currentColor"
        d="M45.3,-58.5C58.5,-49.6,68.4,-34.5,72.6,-17.7C76.9,-0.9,75.5,17.7,67.4,32.6C59.4,47.6,44.7,58.9,28.1,65.6C11.6,72.3,-6.8,74.4,-24.1,70.1C-41.5,65.8,-57.8,55.1,-66.5,39.9C-75.2,24.7,-76.3,5,-71.8,-12.5C-67.3,-30,-57.2,-45.3,-43.6,-54.4C-30,-63.5,-15,-66.4,1.2,-68C17.4,-69.6,34.7,-69.9,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
