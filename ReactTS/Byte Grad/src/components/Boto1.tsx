export function Boto({
  background,
  fontSize,
  pillShape
}: {
  background: string;
    fontSize: string;
    pillShape: boolean;
}) {
  const url = 'www.google.com';

  return (
    <button className='w-24 self-center text-gray-800 rounded px-4 py-2'>
      Click me
    </button>
  );
};
export default Boto;
