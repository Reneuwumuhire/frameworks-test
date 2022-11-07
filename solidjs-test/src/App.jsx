import { createSignal } from "solid-js";

const Component = () => {
	const [count, setCount] = createSignal(0);
	const [multiplier, setMultiplier] = createSignal(1);
	const product = () => count() * multiplier();
	return (
		<div>
			<h1>
				{count()} * {multiplier} = {product()}
			</h1>
			<button onClick={() => setCount(count() + 1)}>Increment</button>
			<button onClick={() => setMultiplier(multiplier() + 1)}>
				Increment Multiplier
			</button>
		</div>
	);
};
function App() {
	return (
		<div>
			<Component />
			<Component />
			<Component />
		</div>
	);
}

export default App;
