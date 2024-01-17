export function Boto1({
  background,
  fontSize,
  pillShape,
}: {
  background: string;
  fontSize: number;
  pillShape: boolean;
}) {

  return (
    <button className='w-24 self-center text-gray-800 rounded px-4 py-2'>
      Click me
    </button>
  );
}
