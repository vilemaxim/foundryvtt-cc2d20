import { CCChat } from "../system/CCChat.mjs";

export const renderChatMessageHook = {
	attach: () => {
		cc2d20.logger.debug("Attaching renderChatMessage hook");

		Hooks.on("renderChatMessage", CCChat.onRenderChatMessage);
	},
};
