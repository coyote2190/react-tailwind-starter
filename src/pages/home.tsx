import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement, reset } from '../store/counterSlice';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Home Page</h1>
        <p className="text-center text-gray-600 mb-6">Vite + React + TypeScript + Tailwind CSS + Redux</p>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              -
            </button>
            <span className="text-3xl font-bold text-gray-800 min-w-[60px] text-center">{count}</span>
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(reset())}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Reset
          </button>

          <p className="text-gray-600 text-center text-sm">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/pages/home.tsx</code> and save to test HMR
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Styled with <span className="font-semibold text-indigo-600">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
