import CCActorSheet from "./CCActorSheet.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {CCActorSheet}
 */
export default class CCVehicleSheet extends CCActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["cc2d20", "sheet", "vehicle"],
			template: "systems/cc2d20/templates/actor/vehicle-sheet.hbs",
			width: 550,
			height: 550,
			tabs: [{
				navSelector: ".sheet-tabs",
				contentSelector: ".sheet-body",
				initial: "abilities",
			}],
		});
	}
}
