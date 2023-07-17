import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

async function handleButtonClick(number: number) {
  const response = await fetch(`http://localhost:8080/values/${number}`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.textContent = (await response.text()).toString();
    }
  }
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{props.count}</p>
      <Button onClick={() => handleButtonClick(1)}>1</Button>
      <Button onClick={() => handleButtonClick(2)}>2</Button>
      <Button onClick={() => handleButtonClick(3)}>3</Button>
    </div>
  );
}
