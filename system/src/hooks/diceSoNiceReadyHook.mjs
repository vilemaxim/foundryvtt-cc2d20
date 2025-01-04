export function diceSoNiceReadyHook(dice3d) {
	dice3d.addSystem(
		{ id: "cc2d20", name: "Cohors Cthulhu 2d20" },
		true
	);

	dice3d.addColorset(
		{
			name: "cc2d20",
			description: "Cohors Cthulhu 2d20",
			category: "Colors",
			foreground: "#c3ae5c",
			background: "#000000",
			outline: "#000000",
			texture: "none",
			font: "Germania One",
		}
	);

	dice3d.addDicePreset({
		type: "ds",
		labels: [
			"systems/cc2d20/assets/dice/d1.webp",
			"systems/cc2d20/assets/dice/d2.webp",
			"systems/cc2d20/assets/dice/d3.webp",
			"systems/cc2d20/assets/dice/d4.webp",
			"systems/cc2d20/assets/dice/d5.webp",
			"systems/cc2d20/assets/dice/d6.webp",
		],
		system: "cc2d20",
		colorset: "cc2d20",
	});
}
