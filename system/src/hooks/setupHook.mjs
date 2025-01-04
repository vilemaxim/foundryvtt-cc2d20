import { generateEnrichedTooltips } from "../config.mjs";

export const setupHook = {
	attach: () => {
		Hooks.once("setup", () => {
			// Go through the CONFIG object and attempt to localize any Strings
			// up front
			for (const obj in CONFIG.CC2D20) {
				if ({}.hasOwnProperty.call(CONFIG.CC2D20, obj)) {
					for (const el in CONFIG.CC2D20[obj]) {
						if ({}.hasOwnProperty.call(CONFIG.CC2D20[obj], el)) {
							if (typeof CONFIG.CC2D20[obj][el] === "string") {
								CONFIG.CC2D20[obj][el] = game.i18n.localize(
									CONFIG.CC2D20[obj][el]
								);
							}
						}
					}
				}
			}

			generateEnrichedTooltips();
		});
	},
};
