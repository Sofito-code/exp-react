import { useState } from "react";

export default function Home() {
  const [miDato, setMiDato] = useState<string>("mi dato");
  const [count, setCounter] = useState<number>(0);

  const increaseCounter = () => {
    setCounter(count + 1)
  }
  const decreaseCounter = () => {
    setCounter(count - 1)
  }
  return (
    <div className="flex flex-col w-full items-center p-8 gap-5">
      <span>Valor del contador: {count}</span>
      <div className="flex gap-4">
        <button onClick={increaseCounter} className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-gray-700">/\</button>
        <button onClick={decreaseCounter} className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-gray-700">\/</button>
      </div>
    </div>
  );
}
