import { prepareSkills } from "../config.mjs";
import CCMigrationRunner from "../migrations/CCMigrationRunner.mjs";

export const readyHook = {
	attach: () => {
		cc2d20.logger.debug("Attaching ready hook");

		Hooks.once("ready", async () => {
			cc2d20.logger.debug("Running ready hook");

			if (game.user.isGM) {
				await new CCMigrationRunner().run();
			}

			prepareSkills();

			cc2d20.utils.showNewReleaseNotes();
		});
	},
};
