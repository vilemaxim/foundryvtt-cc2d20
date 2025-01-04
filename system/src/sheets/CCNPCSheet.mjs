import CCActorSheet from "./CCActorSheet.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {CCActorSheet}
 */
export default class CCNPCSheet extends CCActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["cc2d20", "sheet", "npc"],
			template: "systems/cc2d20/templates/actor/npc-sheet.hbs",
			width: 550,
			height: 780,
			tabs: [{
				navSelector: ".sheet-tabs",
				contentSelector: ".sheet-body",
				initial: "abilities",
			}],
		});
	}
}
