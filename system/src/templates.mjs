/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
	const partials = [
		"systems/cc2d20/templates/actor/_shared-partials/weapon-details-hint.hbs",
		"systems/cc2d20/templates/actor/parts/actor-abilities.hbs",
		"systems/cc2d20/templates/actor/parts/actor-armor.hbs",
		"systems/cc2d20/templates/actor/parts/actor-effects.hbs",
		"systems/cc2d20/templates/actor/parts/actor-encumbrance.hbs",
		"systems/cc2d20/templates/actor/parts/actor-equipment.hbs",
		"systems/cc2d20/templates/actor/parts/actor-header.hbs",
		"systems/cc2d20/templates/actor/parts/actor-skillkit.hbs",
		"systems/cc2d20/templates/actor/parts/actor-spells.hbs",
		"systems/cc2d20/templates/actor/parts/actor-talents.hbs",
		"systems/cc2d20/templates/actor/parts/actor-weapons.hbs",
		"systems/cc2d20/templates/actor/parts/npc-abilities.hbs",
		"systems/cc2d20/templates/actor/parts/npc-header.hbs",
		"systems/cc2d20/templates/actor/parts/simple-expandable-item.hbs",
		"systems/cc2d20/templates/actor/parts/vehicle-abilities.hbs",
		"systems/cc2d20/templates/actor/parts/vehicle-header.hbs",
		"systems/cc2d20/templates/item/parts/item-effects.hbs",
		"systems/cc2d20/templates/item/parts/item-header.hbs",
	];

	const paths = {};
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");
		paths[key] = path;
	}

	return loadTemplates(paths);
};
