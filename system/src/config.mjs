export const SYSTEM_ID = "cc2d20";
export const SYSTEM_NAME = "Cohors Cthulhu 2d20";

export const CC2D20 = {};

CC2D20.attributes = {
	agi: "CC2D20.AbilityAgi",
	bra: "CC2D20.AbilityBra",
	coo: "CC2D20.AbilityCoo",
	gra: "CC2D20.AbilityGra",
	ins: "CC2D20.AbilityIns",
	rea: "CC2D20.AbilityRea",
	wil: "CC2D20.AbilityWil",
};

CC2D20.abilityAbbreviations = {
	agi: "CC2D20.AbilityAgiAbr",
	bra: "CC2D20.AbilityBraAbr",
	coo: "CC2D20.AbilityCooAbr",
	ins: "CC2D20.AbilityInsAbr",
	rea: "CC2D20.AbilityReaAbr",
	wil: "CC2D20.AbilityWilAbr",
};

CC2D20.DEFAULT_TOKENS = {
	character: "systems/cc2d20/assets/doc-icons/character.svg",
	npc: "systems/cc2d20/assets/doc-icons/npc.svg",
	vehicle: "systems/cc2d20/assets/doc-icons/vehicle.svg",
};

CC2D20.ITEM_COMPENDIUMS = {};

CC2D20.JOURNAL_UUIDS = {
	releaseNotes: "Compendium.cc2d20.system_documentation.JournalEntry.Q2jykbXOXgzNpcSR",
};

CC2D20.Size = ["Trivial", "Minor", "Major"];

CC2D20.DAMAGE_EFFECTS = {
	area: "CC2D20.WEAPONS.damageEffect.area",
	backlash_x: "CC2D20.WEAPONS.damageEffect.backlash_x",
	drain: "CC2D20.WEAPONS.damageEffect.drain",
	intense: "CC2D20.WEAPONS.damageEffect.intense",
	persistent_x: "CC2D20.WEAPONS.damageEffect.persistent_x",
	piercing_x: "CC2D20.WEAPONS.damageEffect.piercing_x",
	snare: "CC2D20.WEAPONS.damageEffect.snare",
	stun: "CC2D20.WEAPONS.damageEffect.stun",
	vicious: "CC2D20.WEAPONS.damageEffect.vicious",
};

CC2D20.VEHICLE_QUALITIES = {
	cargo_x: "CC2D20.VEHICLES.QUALITIES.cargo_x",
	cumbersome: "CC2D20.VEHICLES.QUALITIES.cumbersome",
	enclosed: "CC2D20.VEHICLES.QUALITIES.enclosed",
	exposed: "CC2D20.VEHICLES.QUALITIES.exposed",
	high_performance: "CC2D20.VEHICLES.QUALITIES.high_performance",
	single_seat: "CC2D20.VEHICLES.QUALITIES.single_seat",
	tough_x: "CC2D20.VEHICLES.QUALITIES.tough_x",
};

CC2D20.WEAPON_QUALITIES = {
	accurate: "CC2D20.WEAPONS.weaponQuality.accurate",
	bane: "CC2D20.WEAPONS.weaponQuality.bane",
	close_quarters: "CC2D20.WEAPONS.weaponQuality.close_quarters",
	cumbersome: "CC2D20.WEAPONS.weaponQuality.cumbersome",
	debilitating: "CC2D20.WEAPONS.weaponQuality.debilitating",
	escalation: "CC2D20.WEAPONS.weaponQuality.escalation",
	experimental: "CC2D20.WEAPONS.weaponQuality.experimental",
	giant_killer: "CC2D20.WEAPONS.weaponQuality.giant_killer",
	heavy: "CC2D20.WEAPONS.weaponQuality.heavy",
	hidden: "CC2D20.WEAPONS.weaponQuality.hidden",
	hunger: "CC2D20.WEAPONS.weaponQuality.hunger",
	inaccurate: "CC2D20.WEAPONS.weaponQuality.inaccurate",
	indirect: "CC2D20.WEAPONS.weaponQuality.indirect",
	munition: "CC2D20.WEAPONS.weaponQuality.munition",
	parrying: "CC2D20.WEAPONS.weaponQuality.parrying",
	reliable: "CC2D20.WEAPONS.weaponQuality.reliable",
	subtle: "CC2D20.WEAPONS.weaponQuality.subtle",
	unreliable: "CC2D20.WEAPONS.weaponQuality.unreliable",
};

CC2D20.WEAPONS = {
	range: {
		reach: "CC2D20.RANGE.reach",
		close: "CC2D20.RANGE.close",
		medium: "CC2D20.RANGE.medium",
		long: "CC2D20.RANGE.long",
		extreme: "CC2D20.RANGE.extreme",
	},
	weaponTypes: [
		{
			label: "Melee",
			bonusAttribute: "agi",
		},
		{
			label: "Ranged",
			bonusAttribute: "coo",
		},
		{
			label: "Mental",
			bonusAttribute: "wil",
		},
	],
};

CC2D20.spellcastingTypes = {
	traditional: "traditional",
	researcher: "researcher",
	dabbler: "dabbler",
};

export async function generateEnrichedTooltips() {
	// Damage Effects
	CONFIG.CC2D20.DAMAGE_EFFECT_HAS_RANK = {};
	CONFIG.CC2D20.DAMAGE_EFFECT_TOOLTIPS = [];
	for (const key in CONFIG.CC2D20.DAMAGE_EFFECTS) {
		CONFIG.CC2D20.DAMAGE_EFFECT_TOOLTIPS[key] = await TextEditor.enrichHTML(
			game.i18n.localize(
				`CC2D20.Tooltips.DamageEffect.${key}`
			)
		);
		CONFIG.CC2D20.DAMAGE_EFFECT_HAS_RANK[key] = key.endsWith("_x");
	}

	// Vehicle Qualities
	CONFIG.CC2D20.VEHICLE_QUALITY_HAS_RANK = {};
	CONFIG.CC2D20.VEHICLE_QUALITY_TOOLTIPS = [];
	for (const key in CONFIG.CC2D20.VEHICLE_QUALITIES) {
		CONFIG.CC2D20.VEHICLE_QUALITY_TOOLTIPS[key] = await TextEditor.enrichHTML(
			game.i18n.localize(
				`CC2D20.Tooltips.VehicleQuality.${key}`
			)
		);
		CONFIG.CC2D20.VEHICLE_QUALITY_HAS_RANK[key] = key.endsWith("_x");
	}

	// Weapon Qualities
	CONFIG.CC2D20.WEAPON_QUALITY_TOOLTIPS = {};
	for (const key in CONFIG.CC2D20.WEAPON_QUALITIES) {
		CONFIG.CC2D20.WEAPON_QUALITY_TOOLTIPS[key] = await TextEditor.enrichHTML(
			game.i18n.localize(
				`CC2D20.Tooltips.WeaponQuality.${key}`
			)
		);
	}
}

export async function prepareSkills() {
	let packSkills = await game.packs.get("cc2d20.skills").getDocuments();

	let _skills = [];

	packSkills.forEach(s => {

		_skills.push({
			focuses: s.system.focuses.map(f => f.title),
			key: s.name,
			label: game.i18n.localize(`CC2D20.SKILL.${s.name.toUpperCase()}`),
		});
	});

	CONFIG.CC2D20.SKILLS = _skills.sort((a, b) => a.key.localeCompare(b.key));
}
