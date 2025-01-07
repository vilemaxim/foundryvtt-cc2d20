function diceSoNiceReadyHook(dice3d) {
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
			// font: "Germania One",
			font: "Josefin Sans",
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

const SYSTEM_ID$1 = "cc2d20";
const SYSTEM_NAME$1 = "Cohors Cthulhu 2d20";

const CC2D20 = {};

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

async function generateEnrichedTooltips() {
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

async function prepareSkills() {
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

class CombatTracker2d20 extends CombatTracker {

	static get defaultOptions() {
		return {
			...super.defaultOptions,
			template: "systems/cc2d20/templates/combat/combat-tracker.hbs",
		};
	}

	activateListeners(html) {
		const tracker = html.find("#combat-tracker");
		const combatants = tracker.find(".combatant");

		html.find(".ac-combatant-control").click(
			ev => this._onACCombatantControl(ev)
		);

		combatants.click(this._onACCombatantMouseDown.bind(this));

		super.activateListeners(html);
	}

	async getData(options) {
		const context = await super.getData(options);

		const combat = this.viewed;
		for (const turn of context.turns) {
			const combatantsTurnDone = combat.combatantsTurnDone;
			turn.turnDone = combatantsTurnDone[turn.id] ?? false;
		}

		return context;
	}

	async _onACCombatantControl(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!game.user.isGM) return;

		if (!this.viewed.started) {
			ui.notifications.warn(
				game.i18n.localize("CC2D20.Combat.CombatHasNotStarted")
			);
			return;
		}

		const btn = event.currentTarget;
		const li = btn.closest(".combatant");
		const combatant = this.viewed.combatants.get(li.dataset.combatantId);

		if (combatant.isOwner) {
			this.viewed.toggleTurnDone(combatant.id);
		}
	}

	async _onACCombatantMouseDown(event) {
		event.preventDefault();
		if (game.user.isGM && this.viewed.started) {
			const li = event.currentTarget;
			const combatantId = li.dataset.combatantId;

			const combat = this.viewed;

			const currentTurn = combat.turn ?? -1;

			let newTurn = currentTurn;

			for (let [i, turn] of combat.turns.entries()) {
				if (turn.isDefeated) continue;
				if (turn.id === combatantId) {
					newTurn = i;
					break;
				}
			}

			if (newTurn !== currentTurn) {
				combat.setTurn(newTurn);
			}
		}
	}
}

class MomentumTracker extends Application {
	constructor(options = {}) {
		if (MomentumTracker._instance) {
			throw new Error("MomentumTracker already has an instance!!!");
		}

		super(options);

		MomentumTracker._instance = this;
		MomentumTracker.closed = true;
	}

	// override
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["cc2d20", "momentum-tracker"],
			height: "200",
			id: "momentum-tracker-app",
			popOut: false,
			resizable: false,
			template: "systems/cc2d20/templates/app/momentum-tracker.hbs",
			title: "AP Tracker",
			width: "auto",
		});
	}

	// override
	getData() {
		const data = {
			gmMomentum: game.settings.get(SYSTEM_ID, "gmMomentum"),
			isGM: game.user.isGM,
			maxMomentum: game.settings.get(SYSTEM_ID, "maxMomentum"),
			partyMomentum: game.settings.get(SYSTEM_ID, "partyMomentum"),
		};

		data.showGMMomentum = game.user.isGM
			? true
			: game.settings.get(SYSTEM_ID, "gmMomentumShowToPlayers");

		data.showMaxApp = game.user.isGM
			? true
			: game.settings.get(SYSTEM_ID, "maxAppShowToPlayers");

		return data;
	}

	static renderApTracker() {
		if (MomentumTracker._instance) MomentumTracker._instance.render(true);
	}

	activateListeners(html) {
		super.activateListeners(html);

		if (MomentumTracker.closed) {
			html.find(".ap-resource.maxMomentum-box").css("display", "none");
		}

		html.find(".ap-input").change(ev => {
			const type = $(ev.currentTarget).parents(".ap-resource").attr("data-type");
			const value = ev.target.value;

			MomentumTracker.setAP(type, value);
		});

		html.find(".ap-add, .ap-sub").click(ev => {
			const type = $(ev.currentTarget).parents(".ap-resource").attr("data-type");
			const change = $(ev.currentTarget).hasClass("ap-add") ? 1 : -1;

			const currentValue = game.settings.get(SYSTEM_ID, type);
			const newValue = parseInt(currentValue) + change;

			MomentumTracker.setAP(type, newValue);
		});

		html.find(".toggle-maxAp").click(ev => {
			html.find(".ap-resource.maxMomentum-box").slideToggle("fast", function() {
				MomentumTracker.closed = !MomentumTracker.closed;
			});
		});
	}

	static async adjustAP(type, diff) {
		if (!game.user.isGM) {
			game.socket.emit("system.cc2d20", {
				operation: "adjustAP",
				data: { diff, type },
			});
			return;
		}

		diff = Math.round(diff);

		let momentum = game.settings.get(SYSTEM_ID, type);
		momentum += diff;

		this.setAP(type, momentum);
	}


	static async setAP(type, value) {
		if (!game.user.isGM) {
			game.socket.emit("system.cc2d20", {
				operation: "setAP",
				data: { value: value, type: type },
			});
			return;
		}

		value = Math.round(value);
		value = Math.max(0, value);

		const maxMomentum = await game.settings.get(SYSTEM_ID, "maxMomentum");

		if (type === "partyMomentum") value = Math.min(value, maxMomentum);

		if (type === "maxMomentum") {
			const currentPartyMomentum =
				await game.settings.get(SYSTEM_ID, "partyMomentum");

			const newPartyMomentum = Math.min(value, currentPartyMomentum);

			await game.settings.set(SYSTEM_ID, "partyMomentum", newPartyMomentum);
		}

		await game.settings.set(SYSTEM_ID, type, value);

		MomentumTracker.renderApTracker();

		// emit socket event for the players to update
		game.socket.emit("system.cc2d20", { operation: "updateAP" });
	}

	static updateAP() {
		MomentumTracker.renderApTracker();
	}
}

Hooks.once("ready", () => {
	if (MomentumTracker._instance) return;

	new MomentumTracker();

	MomentumTracker.renderApTracker();

	game.socket.on("system.cc2d20", ev => {
		if (ev.operation === "adjustAP") {
			if (game.user.isGM) MomentumTracker.adjustAP(ev.data.type, ev.data.diff);
		}

		if (ev.operation === "setAP") {
			if (game.user.isGM) MomentumTracker.setAP(ev.data.type, ev.data.value);
		}

		if (ev.operation === "updateAP") MomentumTracker.updateAP();
	});
});

/**
 * Extend the base Actor document by defining a custom roll data structure which
 * is ideal for the Simple system.
 * @extends {Actor}
 */
class CCActor extends Actor {

	_calculateAttributeBonuses() {
		for (const attribute of Object.keys(this.system.attributes)) {
			const value = this.system.attributes[attribute].value;

			let bonus = 0;

			if (value === 9) bonus = 1;
			if (value >=10 && value <= 11) bonus = 2;
			if (value >=12 && value <= 13) bonus = 3;
			if (value >=14 && value <= 15) bonus = 4;
			if (value >=16) bonus = 5;

			this.system.attributes[attribute].bonus = bonus;
		}
	}


	_calculateCarryCapacity() {
		const brawn = this.system.attributes?.bra?.value ?? 0;

		let carryCapacity = 6;

		if (brawn < 9) {
			carryCapacity = 6;
		}
		else if (brawn === 9) {
			carryCapacity = 7;
		}
		else if (brawn === 10 || brawn === 11) {
			carryCapacity = 8;
		}
		else if (brawn >= 12) {
			carryCapacity = 9;
		}

		this.system.carryCapacity.value = carryCapacity;
	}


	/**
	 * Update the character's count of treated and untreated injuries
	 */
	_calculateCharacterInjuryValues() {
		const injuries = [
			this.system.injuries.injury0,
			this.system.injuries.injury1,
			this.system.injuries.injury2,
		];

		let treated = 0;
		let untreated = 0;

		for (const injury of injuries) {
			if (injury.text !== "" && !injury.treated) untreated++;
			if (injury.text !== "" && injury.treated) treated++;
		}

		this.system.injuries.value = untreated;
		this.system.injuries.treated = treated;
	}


	_calculateMaxStress() {
		const brawn = this.system.attributes?.bra?.value ?? 0;
		const will = this.system.attributes?.wil?.value ?? 0;

		const fatigue = this.system.fatigue ?? 0;

		const mod = this.system.stress?.mod ?? 0;

		const resilienceSkill = this.items.find(
			i => i.type === "skill" && i.name === "Resilience"
		);

		if (!resilienceSkill) {
			return cc2d20.logger.error(
				`Unable to locate 'Resilience' skill on character ${this.name}`
			);
		}

		const resilience = resilienceSkill.system.value;

		const resiliancePlusBrawn = Math.max(0, resilience + brawn + mod - fatigue);
		const resiliancePlusWill = Math.max(0, resilience + will + mod - fatigue);

		this.system.stress.max = Math.max(resiliancePlusBrawn, resiliancePlusWill);

		if (this.system.stress.value > this.system.stress.max) {
			this.system.stress.value = this.system.stress.max;
		}
	}


	/**
     * Prepare character roll data.
     */
	_getCharacterRollData(data) {
		if (this.type !== "character") return;

		// Copy the ability scores to the top level, so that rolls can use
		// formulas like `@bra.value + 4`.
		if (data.attributes) {
			for (let [k, v] of Object.entries(data.attributes)) {
				data[k] = foundry.utils.deepClone(v);
			}
		}
	}


	/**
     * Prepare NPC roll data.
     */
	_getNpcRollData(data) {}


	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);

		// Set some Token defaults
		//
		const prototypeToken = {
			actorLink: false,
			disposition: CONST.TOKEN_DISPOSITIONS.HOSTILE,
			name: data.name, // Set token name to actor name
			sight: {
				enabled: true,
			},
			texture: foundry.utils.duplicate(this.prototypeToken.texture),
		};

		if (this.type === "character") {
			prototypeToken.actorLink = true;
			prototypeToken.disposition = CONST.TOKEN_DISPOSITIONS.FRIENDLY;
		}

		if (this.type === "vehicle") {
			prototypeToken.disposition = CONST.TOKEN_DISPOSITIONS.NEUTRAL;
		}

		const update = {prototypeToken};
		if (!data.img) {
			const image = CONFIG.CC2D20.DEFAULT_TOKENS[data.type] ?? undefined;

			if (image) {
				update.img = image;
				update.prototypeToken.texture = {
					src: image,
				};
			}
		}

		// Add default Skills to Characters if necessary
		//
		if (this.type === "character") {
			// If the Actor data already contains skill items then this is an
			// Actor being duplicated and we don't want to touch their
			// items at all
			//
			const alreadyHasSkills = Array.isArray(data.items)
				&& data.items.filter(i => i.type === "skill").length > 0;

			if (!alreadyHasSkills) {
				// let skillsCompendium = game.settings.get(
				// 	"cc2d20", "compendium-skills"
				// );

				// if (!skillsCompendium) skillsCompendium = "cc2d20.skills";

				const packSkills =
					await game.packs.get("cc2d20.skills").getDocuments();

				update.items = this.items.map(i => i.toObject());

				packSkills.forEach(s => {
					update.items.push(s.toObject());
				});
			}
		}

		await this.updateSource(update);
	}


	/**
     * Prepare Character type specific data
     */
	_prepareCharacterData(actorData) {
		if (this.type !== "character") return;

		this._calculateAttributeBonuses();
		this._calculateCharacterInjuryValues();
		this._calculateMaxStress();
	}


	/**
     * Prepare NPC type specific data.
     */
	_prepareNpcData(actorData) {
		// if (this.type !== "npc") return;
	}


	/**
     * Override getRollData() that's supplied to rolls.
     */
	getRollData() {
		const data = super.getRollData();
		// Prepare character roll data.
		this._getCharacterRollData(data);
		this._getNpcRollData(data);
		return data;
	}


	/** @override */
	prepareBaseData() {
		// Data modifications in this step occur before processing embedded
		// documents or derived data.
		this._calculateCarryCapacity();
	}


	/** @override */
	prepareData() {
		super.prepareData();
	}


	/**
     * @override
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).
     */
	prepareDerivedData() {
		this._prepareCharacterData(this);
		this._prepareNpcData(this);
	}

}

/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
class CCItem extends Item {

	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);
		if (data.img === undefined) {
			let ico = `systems/cc2d20/assets/doc-icons/${data.type}.svg`;
			this.updateSource({ img: ico });
		}
	}


	async addFocus() {
		let focuses = this.system.focuses;
		const focus = { title: "", isfocus: false, description: "" };
		focuses = [...focuses, focus];
		let updatedItem = { "_id": this.id, "system.focuses": focuses  };
		await this.update(updatedItem);
	}


	async deleteFocus(_index) {
		let focuses = this.system.focuses;
		focuses.splice(_index, 1);
		let updatedItem = { "_id": this.id, "system.focuses": focuses };
		await this.update(updatedItem);
	}


	/**
     * Prepare a data object which is passed to any Roll formulas which are
	 * created related to this Item
     * @private
     */
	getRollData() {
		// If present, return the actor's roll data.
		if (!this.actor) return null;
		const rollData = this.actor.getRollData();
		rollData.item = foundry.utils.deepClone(this.system);

		return rollData;
	}


	/** @override */
	prepareData() {
		super.prepareData();
	}


	/**
     * Handle clickable rolls.
     * @param {Event} event   The originating click event
     * @private
     */
	async roll() {
		// Initialize chat data
		const speaker = ChatMessage.getSpeaker({ actor: this.actor });
		const rollMode = game.settings.get("core", "rollMode");
		const label = `[${this.type}] ${this.name}`;

		// If there's no roll data, send a chat message.
		if (!this.system.formula) {
			ChatMessage.create({
				speaker: speaker,
				rollMode: rollMode,
				flavor: label,
				content: this.system.description ?? "",
			});
		}
		// Otherwise, create a roll and send a chat message from it.
		else {
			// Retrieve roll data.
			const rollData = this.getRollData();

			// Invoke the roll and submit it to chat.
			const roll = new Roll(rollData.item.formula, rollData).roll();
			roll.toMessage({
				speaker: speaker,
				rollMode: rollMode,
				flavor: label,
			});
			return roll;
		}
	}


	async sendToChat() {
		const itemData = foundry.utils.duplicate(this.system);
		itemData._id = this._id;
		itemData.img = this.img;
		itemData.name = this.name;
		itemData.type = this.type;
		itemData.isPhysical = this.system.hasOwnProperty("weight");
		itemData.isWeapon = this.type === "weapon";
		itemData.isArmor = this.type === "armor";
		itemData.isTalent = this.type === "talent";
		itemData.isSpell = this.type === "spell";
		itemData.isSkillkit = this.type === "skillkit";
		itemData.isEquipment = this.type === "equipment";
		itemData.isSpecial_rule = this.type === "special_rule";
		itemData.isSkill = this.type === "skill";
		const html = await renderTemplate("systems/cc2d20/templates/chat/item.hbs", itemData);
		const chatData = {
			user: game.user.id,
			rollMode: game.settings.get("core", "rollMode"),
			content: html,
		};
		if (["gmroll", "blindroll"].includes(chatData.rollMode)) {
			chatData.whisper = ChatMessage.getWhisperRecipients("GM");
		}
		else if (chatData.rollMode === "selfroll") {
			chatData.whisper = [game.user];
		}
		ChatMessage.create(chatData);
	}

}

// import Counter from '../system/counter';

class Combat2d20 extends Combat {

	constructor(options) {
		super(options);

		this.flags.combatantsTurnDone = this.flags.combatantsTurnDone ?? [];
	}

	get combatantsTurnDone() {
		const combatantsTurnDone = this.flags.combatantsTurnDone ?? [];
		return combatantsTurnDone[this.round] ?? {};
	}

	get momentumLog() {
		const momentumLog = this.flags.momentumLog ?? [];
		return momentumLog[this.round] ?? {};
	}

	get shouldUpdateMomentum() {
		return game.settings.get(
			"cc2d20", "combatTrackerMomentumUpdate"
		);
	}

	async endCombat() {
		return Dialog.confirm({
			title: game.i18n.localize("COMBAT.EndTitle"),
			content: `<p>${game.i18n.localize("COMBAT.EndConfirmation")}</p>`,
			yes: () => {
				if (this.shouldUpdateMomentum && this.started) {
					if (game.user.isGM) {
						game.cc2d20.MomentumTracker.adjustAP("partyMomentum", -1);
					}
					else {
						game.socket.emit("system.cc2d20", {
							operation: "adjustAP",
							data: { diff: -1, type: "partyMomentum" },
						});
					}

					ui.notifications.info(
						game.i18n.localize("CC2D20.Combat.CombatEndMomentumPoolDecremented")
					);
				}
				this.delete();
			},
		});
	}

	async nextRound() {
		this.turn = null;

		if (this.shouldUpdateMomentum) {
			if (game.user.isGM) {
				game.cc2d20.MomentumTracker.adjustAP("partyMomentum", -1);
			}
			else {
				game.socket.emit("system.cc2d20", {
					operation: "adjustAP",
					data: { diff: -1, type: "partyMomentum" },
				});
			}

			ui.notifications.info(
				game.i18n.localize("CC2D20.Combat.CombatRoundMomentumPoolDecremented")
			);
		}

		let advanceTime = Math.max(this.turns.length - this.turn, 0) * CONFIG.time.turnTime;
		advanceTime += CONFIG.time.roundTime;
		let nextRound = this.round + 1;

		// Update the document, passing data through a hook first
		const updateData = {round: nextRound, turn: this.turn};
		const updateOptions = {advanceTime, direction: 1};
		Hooks.callAll("combatRound", this, updateData, updateOptions);
		return this.update(updateData, updateOptions);
	}

	async rollInitiative() {
		return this;
	}

	async setTurn(newTurn) {
		this.turn = newTurn;

		// Update the document, passing data through a hook first
		const updateData = {round: this.round, turn: newTurn};
		const updateOptions = {advanceTime: CONFIG.time.turnTime, direction: 1};
		Hooks.callAll("combatTurn", this, updateData, updateOptions);
		return this.update(updateData, updateOptions);
	}

	setupTurns() {
		// Determine the turn order and the current turn
		const turns = this.combatants.contents;

		// Sort alphabetically by name first
		turns.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

		// Now sort by type
		turns.sort((a, b) => {
			const actorA = game.actors.get(a.actorId);
			const actorB = game.actors.get(b.actorId);

			if (actorA.type < actorB.type) {
				return -1;
			}
			if (actorA.type > actorB.type) {
				return 1;
			}
			return 0;
		});

		if (this.turn !== null) this.turn =
			Math.clamped(this.turn, 0, turns.length - 1);

		// Update state tracking
		let c = turns[this.turn];
		this.current = {
			round: this.round,
			turn: this.turn,
			combatantId: c ? c.id : null,
			tokenId: c ? c.tokenId : null,
		};

		// One-time initialization of the previous state
		if (!this.previous) this.previous = this.current;

		// Return the array of prepared turns
		return this.turns = turns;
	}

	async startCombat() {
		const updateData = {
			"round": 1,
			"turn": 0,
			"flags.combatantsTurnDone": [],
		};

		Hooks.callAll("combatStart", this, updateData);

		return this.update(updateData);
	}

	async toggleTurnDone(combatantId) {
		if (!game.user.isGM) return;
		if (!this.started) return;

		const combatantsTurnDone = this.combatantsTurnDone;

		const turnDone = !(combatantsTurnDone[combatantId] ?? false);
		combatantsTurnDone[combatantId] = turnDone;

		this.flags.combatantsTurnDone[this.round] = combatantsTurnDone;

		return this.update({"flags.combatantsTurnDone": this.flags.combatantsTurnDone});
	}
}

/**
 * Manage Active Effect instances through the Actor Sheet via effect control buttons.
 * @param {MouseEvent} event      The left-click event on the effect control
 * @param {Actor|Item} owner      The owning entity which manages this effect
 */
function onManageActiveEffect(event, owner) {
	event.preventDefault();

	const a = event.currentTarget;
	const li = a.closest("li");

	const effect = li.dataset.effectId
		? owner.effects.get(li.dataset.effectId)
		: null;

	switch ( a.dataset.action ) {
		case "create":
			return owner.createEmbeddedDocuments("ActiveEffect", [{
				"disabled": li.dataset.effectType === "inactive",
				"duration.rounds": li.dataset.effectType === "temporary" ? 1 : undefined,
				"icon": "icons/svg/aura.svg",
				"label": "New Effect",
				"origin": owner.uuid,
			}]);
		case "edit":
			return effect.sheet.render(true);
		case "delete":
			return effect.delete();
		case "toggle":
			return effect.update({disabled: !effect.disabled});
	}
}

/**
 * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
 * @param {ActiveEffect[]} effects    The array of Active Effect instances to prepare sheet data for
 * @return {object}                   Data for rendering
 */
function prepareActiveEffectCategories(effects) {
	const categories = {
		temporary: {
			type: "temporary",
			label: game.i18n.localize("CC2D20.EFFECTS.Temporary"),
			effects: [],
		},
		passive: {
			type: "passive",
			label: game.i18n.localize("CC2D20.EFFECTS.Passive"),
			effects: [],
		},
		inactive: {
			type: "inactive",
			label: game.i18n.localize("CC2D20.EFFECTS.Inactive"),
			effects: [],
		},
	};

	for (const e of effects) {
		if (e.disabled) {
			categories.inactive.effects.push(e);
		}
		else if (e.isTemporary) {
			categories.temporary.effects.push(e);
		}
		else {
			categories.passive.effects.push(e);
		}
	}

	return categories;
}

// import { CC2D20 } from "../helpers/config.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
class CCActorSheet extends ActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["cc2d20", "sheet", "actor"],
			template: "systems/cc2d20/templates/actor/actor-sheet.hbs",
			width: 720,
			height: 880,
			tabs: [{
				contentSelector: ".sheet-body",
				initial: "abilities",
				navSelector: ".sheet-tabs",
			}],
		});
	}

	/** @override */
	get template() {
		return `systems/cc2d20/templates/actor/actor-${this.actor.type}-sheet.hbs`;
	}

	/** @inheritdoc */
	get title() {
		const type = game.i18n.localize(`TYPES.Actor.${this.actor.type}`);
		return `[${type}] ${this.actor.name}`;
	}

	/* -------------------------------------------- */

	/** @override */
	async getData() {

		// const context = super.getData();

		// const actorData = context.actor.data;

		const source = this.actor.toObject();
		const actorData = this.actor.toObject(false);

		// Sort all items alphabetically for display on the character sheet
		actorData.items.sort((a, b) => a.name.localeCompare(b.name));

		const context = {
			actor: actorData,
			source: source.system,
			system: actorData.system,
			items: actorData.items,
			effects: prepareActiveEffectCategories(this.actor.effects),
			owner: this.actor.isOwner,
			limited: this.actor.limited,
			options: this.options,
			editable: this.isEditable,
			type: this.actor.type,
			isCharacter: this.actor.type === "character",
			isNPC: this.actor.type === "npc",
			isVehicle: this.actor.type === "vehicle",
			rollData: this.actor.getRollData.bind(this.actor),
		};

		context.biographyHTML = await TextEditor.enrichHTML(context.system.biography, {
			secrets: this.actor.isOwner,
			rollData: context.rollData,
			async: true,
		});

		this._prepareItems(context);

		// Prepare character data and items.
		if (actorData.type === "character") {
			this._prepareCharacterData(context);
		}

		// Prepare Creature data and items.
		if (actorData.type === "vehicle") {
			context.vehicleQualities = this._getVehicleQualities();
		}

		// Add roll data for TinyMCE editors.
		// context.rollData = context.actor.getRollData();

		// Prepare Items Enriched Descriptions
		const itemTypes = ["talent"];
		let itemsEnrichedDescriptions = {};
		for await (let itm of this.actor.items) {
			if (itemTypes.includes(itm.type)) {
				const descriptionRich =
					await TextEditor.enrichHTML(itm.system.description, {async: true});

				itemsEnrichedDescriptions[itm._id] = descriptionRich;
			}
		}

		context.itemsEnrichedDescriptions = itemsEnrichedDescriptions;

		// Prepare active effects
		context.effects = prepareActiveEffectCategories(this.actor.effects);
		context.CC2D20 = CONFIG.CC2D20;

		return context;
	}

	_getVehicleQualities() {
		const vehicleQualities = [];
		for (const key in CONFIG.CC2D20.VEHICLE_QUALITIES) {
			vehicleQualities.push({
				active: this.actor.system?.qualities[key].value ?? false,
				hasRank: CONFIG.CC2D20.VEHICLE_QUALITY_HAS_RANK[key],
				rank: this.actor.system?.qualities[key].rank,
				key,
				label: CONFIG.CC2D20.VEHICLE_QUALITIES[key],
			});
		}

		return vehicleQualities.sort(
			(a, b) => a.label.localeCompare(b.label)
		);
	}

	/**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
	async _prepareCharacterData(context) {
		let isEncumbered = false;
		let physicalItems = context.items.filter(i => i.system.hasOwnProperty("weight"));

		let encumberingItems = physicalItems.filter(i => {
			if (i.type !== "armor") {
				return true;
			}
			else if (!i.system.equipped || (i.system.equipped && i.system.qualities.heavy.value)) {
				return true;
			}
			else {
				return false;
			}
		});

		context.minorItemsTotal = encumberingItems.filter(
			i => parseInt(i.system.weight) === 1
		).length;

		context.majorItemsTotal = encumberingItems.filter(
			i => parseInt(i.system.weight) === 3
		).length;

		let totalEncumbrance = 0;
		for (let i = 0; i < encumberingItems.length; i++) {
			totalEncumbrance += parseInt(encumberingItems[i].system.quantity)
				* parseInt(encumberingItems[i].system.weight);
		}

		if (totalEncumbrance > this.actor.system.carryCapacity.value) isEncumbered = true;

		context.totalEncumbrance = totalEncumbrance;
		context.isEncumbered = isEncumbered;
	}

	/**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
	_prepareItems(context) {
		// Initialize containers.

		const skills = [];
		const talents = [];
		const spells = [];
		const weapons = [];
		const armor = [];
		const skillkits = [];
		const equipment = [];
		const specialRules = [];

		// Iterate through items, allocating to containers
		for (let i of context.items) {
			i.img = i.img || DEFAULT_TOKEN;
			// Append to gear.
			if (i.type === "skill") {
				i.localizedName = cc2d20.utils.getLocalizedSkillName(i.name);
				skills.push(i);
			}
			else if (i.type === "talent") {
				talents.push(i);
			}
			else if (i.type === "spell") {
				spells.push(i);
			}
			else if (i.type === "armor") {
				armor.push(i);
			}
			else if (i.type === "weapon") {
				weapons.push(i);
			}
			else if (i.type === "skillkit") {
				skillkits.push(i);
			}
			else if (i.type === "equipment") {
				equipment.push(i);
			}
			else if (i.type === "special_rule") {
				specialRules.push(i);
			}
		}

		context.skills = skills.sort((a, b) => a.localizedName.localeCompare(b.localizedName));

		context.armor = armor;
		context.equipment = equipment;
		context.skillkits = skillkits;
		context.specialRules = specialRules;
		context.spells = spells;
		context.talents = talents;
		context.weapons = weapons;
	}

	/* -------------------------------------------- */

	/** @override */
	activateListeners(html) {
		super.activateListeners(html);

		// SWITCH TABS
		html.find(".tab-switch").click(evt => {
			evt.preventDefault();
			const el = evt.currentTarget;
			const tab = el.dataset.tab;
			this._tabs[0].activate(tab);
		});

		// Render the item sheet for viewing/editing prior to the editable check.
		html.find(".item-edit").click(ev => {
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			item.sheet.render(true);
		});


		// -------------------------------------------------------------
		// ! Everything below here is only needed if the sheet is editable
		if (!this.isEditable) return;

		// ATTRIBUTE ROLL
		html.find(".roll-attribute.clickable").click(event => {
			event.preventDefault();
			let attr = $(event.currentTarget).data("attr");
			let attribute = this.actor.system.attributes[attr];

			const complication = 20 - this.actor.system.injuries.value;

			const attrName = game.i18n.localize(`CC2D20.Ability.${attr}`);
			game.cc2d20.Dialog2d20.createDialog({ rollName: `Roll ${attrName}`, diceNum: 2, attribute: attribute.value, skill: 0, focus: false, complication: complication });
		});

		// * SKILLS LISTENERS [clic, right-click, value change, focus ]
		// Click Skill Item
		html.find(".roll-skill.clickable").click(ev => {
			const itemId = ev.currentTarget.dataset.itemId;
			const item = this.actor.items.get(itemId);

			this._onRollSkill({skillItem: item});
		});

		html.find(".roll-focus.clickable").click(async event => {
			const dataset = event.currentTarget.dataset;

			const itemId = dataset.itemId;
			const focusName = dataset.focusName;

			const skillItem = this.actor.items.get(itemId);

			if (event.ctrlKey) {
				const focuses = foundry.utils.duplicate(skillItem.system.focuses);

				for (const focus of focuses) {
					if (focus.title === focusName) {
						focus.isfocus = !focus.isfocus;
						break;
					}
				}

				await skillItem.update({"system.focuses": focuses});
			}
			else {
				this._onRollSkill({
					skillItem,
					focusName,
				});
			}
		});

		// Change Skill Rank value
		html.find(".skill-value-input").change(async ev => {
			let newRank = parseInt($(ev.currentTarget).val());
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			let updatedItem = { _id: item.id, system: { value: newRank } };
			await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		});

		// Toggle Focus value
		// html.find(".skill .item-skill-focus").click(async ev => {
		// 	const li = $(ev.currentTarget).parents(".item");
		// 	const item = this.actor.items.get(li.data("itemId"));
		// 	let updatedItem = { _id: item.id, system: { focus: !item.system.focus } };
		// 	await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		// });
		// * END SKILLS


		// * SPELLS GRID
		html.find(".cell-expander").click(event => {
			this._onItemSummary(event);
		});


		html.find(".roll-spell.clickable").click(event => {
			event.preventDefault();
			const li = $(event.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));

			let complication = 20 - parseInt(item.system.difficulty - 1);
			complication -= this.actor.system.injuries.value;

			const skillName = item.system.skill;
			const focusName = item.system.focus;
			if (!skillName) return;

			const skill = this.actor.items.getName(skillName);
			const skillRank = skill?.system?.value ?? 0;

			let isFocus = false;
			for (const [, value] of Object.entries(skill?.system?.focuses ?? {})) {
				if (value.title === focusName && value.isfocus) isFocus = true;
			}

			let prefAttribute = "ins";
			if (this.actor.system.spellcastingType === "researcher") {
				prefAttribute = "rea";
			}
			else if (this.actor.system.spellcastingType === "dabbler") {
				prefAttribute = "wil";
			}

			cc2d20.Dialog2d20.createDialog({
				rollName: item.name,
				diceNum: 2,
				attribute: -1,
				skill: skillRank,
				focus: isFocus,
				complication: complication,
				actor: this.actor.system,
				prefAttribute: prefAttribute,
			});

		});

		html.find(".roll-spell-cost.clickable").click(event => {
			event.preventDefault();

			const li = $(event.currentTarget).parents(".item");
			const itemId = li.data("itemId");

			const item = this.actor.items.get(li.data("itemId"));
			const cost = parseInt(item.system.cost);

			game.cc2d20.DialogD6.createDialog({
				cc2d20Roll: null,
				actorId: this.actor._id,
				diceNum: cost,
				itemId: itemId,
				rollName: `${item.name} - Cost`,
			});
		});

		html.find(".item-value-changer").change(async event => {
			event.preventDefault();
			const keyToChange = $(event.currentTarget).data("field");
			const newValue = $(event.currentTarget).val();
			const li = $(event.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			let data = {};
			data[keyToChange] = newValue;
			let updatedItem = { _id: item.id, data: data };
			await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		});

		// * WEAPON
		html.find(".roll-weapon.clickable").click(event => {
			event.preventDefault();
			const li = $(event.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));

			let complication = 20 - this.actor.system.injuries.value;

			// if unrelliable increase complication
			for (const [k, v] of Object.entries(item.system.qualities)) {
				if (v.value && k === "unreliable") complication -= 1;
			}

			const focusName = item.system.focus;

			const skillItem = this.actor.items.getName(item.system.skill);

			const skill = skillItem && skillItem.system?.value
				? skillItem.system.value
				: 0;

			const skillFocuses = skillItem?.system?.focuses ?? [];

			const focus = skillFocuses.find(
				focus => focus.title === focusName
			)?.isfocus ?? false;

			const attribute = item.actor.type === "vehicle" ? 6 : -1;

			// weaponType is actualy attribute abrevation
			const prefAttribute = item.system.weaponType;

			game.cc2d20.Dialog2d20.createDialog({
				actor: this.actor.system,
				actorId: this.actor._id,
				attribute,
				complication,
				diceNum: 2,
				focus,
				itemId: item._id,
				prefAttribute,
				rollName: item.name,
				skill,
			});

		});

		html.find(".roll-stress.clickable").click(event => {
			event.preventDefault();
			const li = $(event.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			const itemId = li.data("itemId");
			let stressBonus = 0;
			if (item.system.weaponType === "agi") stressBonus = item.actor.system.attributes.bra.bonus;
			else if (item.system.weaponType === "coo") stressBonus = item.actor.system.attributes.ins.bonus;
			else if (item.system.weaponType === "wil") stressBonus = item.actor.system.attributes.wil.bonus;
			let stress = parseInt(item.system.stress) + parseInt(stressBonus);
			game.cc2d20.DialogD6.createDialog({
				rollName: item.name,
				diceNum: stress,
				cc2d20Roll: null,
				itemId: itemId,
				actorId: this.actor._id,
			});
		});

		// * AMMO COUNT UPDATE
		html.find(".ammo-quantity").change(async ev => {
			let newQuantity = parseInt($(ev.currentTarget).val());
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			let updatedItem = { _id: item.id, data: { ammo: newQuantity } };
			await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		});

		// * RESOURCE COUNT
		html.find(".resources-quantity").change(async ev => {
			let newQuantity = parseInt($(ev.currentTarget).val());
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			let updatedItem = { _id: item.id, data: { resources: newQuantity } };
			await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		});

		//* Quantity Change
		html.find(".quantity-count").change(async ev => {
			let newQuantity = parseInt($(ev.currentTarget).val());
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			let updatedItem = { _id: item.id, data: { quantity: newQuantity } };
			await this.actor.updateEmbeddedDocuments("Item", [updatedItem]);
		});

		html.find(".roll-impact.clickable").click(event => {
			event.preventDefault();
			const impact = this.actor.system.impact;
			game.cc2d20.DialogD6.createDialog({ rollName: `${this.actor.name} Impact`, diceNum: impact, cc2d20Roll: null });
		});

		// * CLICK TO EXPAND
		html.find(".expandable-info").click(event => this._onItemSummary(event));

		// * Add Inventory Item
		html.find(".item-create").click(this._onItemCreate.bind(this));


		// TRUTHS
		html.find(".truth-create").click(this._onTruthCreate.bind(this));

		const truthsMenuItems = [
			{
				icon: '<i class="fas fa-edit"></i>',
				name: "",
				callback: t => {
					this._onTruthEdit(t.data());
				},
			},
			{
				icon: '<i class="fas fa-trash"></i>',
				name: "",
				callback: t => {
					this._onTruthDelete(t.data());
				},
			},
		];

		new ContextMenu(html, ".truth-edit", truthsMenuItems);


		// * Delete Inventory Item
		html.find(".item-delete").click(async ev => {
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("itemId"));
			await item.delete();
			li.slideUp(200, () => this.render(false));
		});

		// * Toggle Stash Inventory Item
		html.find(".item-stash").click(async ev => {
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("item-id"));
			await this.actor.updateEmbeddedDocuments("Item", [this._toggleStashed(li.data("item-id"), item)]);
		});

		// * Toggle Equip Inventory Item
		html.find(".item-toggle").click(async ev => {
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("item-id"));
			await item.update({"system.equipped": !item.system.equipped});
		});

		// * Toggle Favorite Inventory Item
		html.find(".item-favorite").click(async ev => {
			const li = $(ev.currentTarget).parents(".item");
			const item = this.actor.items.get(li.data("item-id"));
			await this.actor.updateEmbeddedDocuments("Item", [this._toggleFavorite(li.data("item-id"), item)]);
		});

		// * INJURIES
		html.find(".injury-text, .treated, .injury-type").change(async ev => {
			const $parent = $(ev.currentTarget).parents(".injury");
			const injuryNum = $parent.data("injury");
			let inj = {
				text: $parent.find(".injury-text").val(),
				treated: $parent.find(".controls .treated").is(":checked"),
				injuryType: $parent.find(".controls .injury-type").is(":checked"),
			};
			const dataPath = `system.injuries.${injuryNum}`;
			await this.actor.update({[`${dataPath}`]: inj });

		});
		// * END INJURIES

		// * Active Effect management
		html.find(".effect-control").click(ev => onManageActiveEffect(ev, this.actor));

		/* -------------------------------------------- */
		/* ADD RIGHT CLICK CONTENT MENU
        /* -------------------------------------------- */
		let menu_items = [
			{
				icon: '<i class="fas fa-comment"></i>',
				name: "",

				callback: t => {
					this._onPostItem(t.data("item-id"));
				},
			},
			{
				icon: '<i class="fas fa-edit"></i>',
				name: "",
				callback: t => {
					this._editOwnedItemById(t.data("item-id"));
				},
			},
			{
				icon: '<i class="fas fa-trash"></i>',
				name: "",
				callback: t => {
					this._deleteOwnedItemById(t.data("item-id"));
				},
				condition: t => {
					if (t.data("coreskill")) {
						return t.data("coreskill").length < 1;
					}
					else {
						return true;
					}
				},
			},
		];

		new ContextMenu(html, ".editable-item", menu_items);


		// ! DON'T LET NUMBER FIELDS EMPTY
		const numInputs = document.querySelectorAll("input[type=number]");
		numInputs.forEach(function(input) {
			input.addEventListener("change", function(e) {
				if (e.target.value === "") {
					e.target.value = 0;
				}
			});
		});
	}


	_editOwnedItemById(_itemId) {
		const item = this.actor.items.get(_itemId);
		item.sheet.render(true);
	}

	async _deleteOwnedItemById(_itemId) {
		const item = this.actor.items.get(_itemId);
		await item.delete();
	}

	_onPostItem(_itemId) {
		const item = this.actor.items.get(_itemId);
		item.sendToChat();
	}

	// * UTILS
	_clearTextAreaText(txt) {
		txt.trim();
		txt = txt.replace(/  +/g, " ");
		// ! replace new lines with encided \n so stupid textarea doesn't break
		txt = txt.replace(/(?:\r\n|\r|\n)/g, "&#13;&#10;");
		return txt;
	}

	/**
     * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
     * @param {Event} event   The originating click event
     * @private
     */
	async _onItemCreate(event) {
		event.preventDefault();
		const header = event.currentTarget;
		// Get the type of item to create.
		const type = header.dataset.type;
		// Grab any data associated with this control.
		const data = foundry.utils.duplicate(header.dataset);
		// Initialize a default name.
		const name = `New ${type.capitalize()}`;
		// Prepare the item object.
		const itemData = {
			name: name,
			type: type,
			data: data,
		};
		// Remove the type from the dataset since it's in the itemData.type prop.
		delete itemData.data.type;
		// Finally, create the item!
		const newItem = await Item.create(itemData, { parent: this.actor });
		newItem.sheet.render(true);
	}

	async _onRightClickDelete(itemId) {
		const item = this.actor.items.get(itemId);
		await item.delete();
		// li.slideUp(200, () => this.render(false));
	}


	_onRollSkill({focusName = "", skillItem = null}) {
		let localizedFocusName = focusName;
		let focus = false;

		if (focusName !== "") {
			localizedFocusName = cc2d20.utils.getLocalizedFocusName(focusName);

			for (const skillFocus of skillItem.system.focuses) {
				if (skillFocus.title === focusName) {
					focus = skillFocus.isfocus;
					break;
				}
			}
		}

		const complication = 20 - this.actor.system.injuries.value;

		const localizedSkillName =
			cc2d20.utils.getLocalizedSkillName(skillItem.name);

		const rollName = focusName !== ""
			? `${localizedFocusName} (${localizedSkillName})`
			: localizedSkillName;

		cc2d20.Dialog2d20.createDialog({
			actor: this.actor.system,
			attribute: -1,
			complication,
			diceNum: 2,
			focus,
			prefAttribute: skillItem.system.defaultAttribute,
			rollName,
			skill: skillItem.system.value,
		});
	}

	async _onItemSummary(event) {
		event.preventDefault();
		let li = $(event.currentTarget).parents(".item");
		let item = this.actor.items.get(li.data("itemId"));
		// Toggle summary
		if (li.hasClass("expanded")) {
			let summary = li.children(".item-summary");
			summary.slideUp(200, () => {
				summary.remove();
			});
		}
		else {
			let _descriptionText = await TextEditor.enrichHTML(
				item.system.description, {async: true}
			);

			let div = $(`<div class="item-summary"><div class="item-summary-wrapper"><div class='editor-content'>${_descriptionText}</div></div></div>`);

			li.append(div.hide());
			div.slideDown(200);
		}
		li.toggleClass("expanded");
	}


	async _onTruthCreate(event) {
		event.preventDefault();
		const actorUuid = this.actor.uuid;

		cc2d20.dialogs.DialogEditTruth.createDialog({actorUuid});
	}

	async _onTruthDelete(data) {
		const currentTruths = foundry.utils.duplicate(this.actor.system.truths);
		currentTruths.splice(data.truthIndex, 1);

		this.actor.update({"system.truths": currentTruths});
	}

	async _onTruthEdit(data) {
		const actorId = this.actor._id;

		const currentTruths = foundry.utils.duplicate(this.actor.system.truths);

		const index = data.truthIndex;
		const truth = currentTruths[index];

		cc2d20.dialogs.DialogEditTruth.createDialog({actorId, index, truth});
	}


	// Toggle Stashed Item
	_toggleStashed(id, item) {
		return {
			_id: id,
			data: {
				stashed: !item.system.stashed,
			},
		};
	}

	// Toggle Favorite
	_toggleFavorite(id, item) {
		return {
			_id: id,
			data: {
				favorite: !item.system.favorite,
			},
		};
	}

}

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
class CCItemSheet extends ItemSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["cc2d20", "sheet", "item"],
			width: 520,
			height: 560,
			tabs: [{
				contentSelector: ".sheet-body",
				initial: "attributes",
				navSelector: ".sheet-tabs",
			}],
		});
	}


	/** @override */
	get template() {
		const path = "systems/cc2d20/templates/item";
		return `${path}/item-${this.item.type}-sheet.hbs`;
	}


	/** @inheritdoc */
	get title() {
		const type = game.i18n.localize(`TYPES.Item.${this.item.type}`);
		return `[${type}] ${this.item.name}`;
	}

	/* -------------------------------------------- */


	/** @override */
	activateListeners(html) {
		super.activateListeners(html);

		// Send to Chat
		html.find(".post-item").click(ev => {
			this.item.sendToChat();
		});

		// Everything below here is only needed if the sheet is editable
		if (!this.isEditable) return;

		html.find(".effect-control").click(ev => {
			if (this.item.isOwned) {
				return ui.notifications.warn(
					game.i18n.localize("CC2D20.Warnings.OnEditOwnedItemActiveEffects")
				);
			}

			onManageActiveEffect(ev, this.item);
		});

		// SKILL AND FOCUS
		html.find(".focus-add").click(async ev => {
			await this.item.addFocus();
		});

		html.find(".focus-delete").click(async ev => {
			await this.item.deleteFocus($(ev.currentTarget).data("index"));
		});

		html.find(".focus-title, .focus-cb").change(async ev => {
			let focuses = [];

			html.find(".focus-item").each(function(index) {
				focuses = [...focuses, {
					title: $(this).find(".focus-title").val(),
					isfocus: $(this).find(".focus-cb").is(":checked"),
				}];
			});

			focuses.sort((a, b) => a.title.localeCompare(b.title));

			await this.item.update({"system.focuses": focuses});
		});


		// DON't LET NUMBER FIELDS EMPTY
		const numInputs = document.querySelectorAll("input[type=number]");
		numInputs.forEach(function(input) {
			input.addEventListener("change", function(e) {
				if (e.target.value === "") {
					e.target.value = 0;
				}
			});
		});
	}


	/** @override */
	async getData() {
		const context = await super.getData();

		const item = context.item;
		const source = item.toObject();

		foundry.utils.mergeObject(context, {
			CC2D20: CONFIG.CC2D20,
			effects: prepareActiveEffectCategories(item.effects),
			flags: item.flags,
			isEmbedded: item.isEmbedded,
			source: source.system,
			system: item.system,
			type: item.type,
		});

		context.descriptionHTML = await TextEditor.enrichHTML(
			item.system.description,
			{
				secrets: item.isOwner,
				async: true,
			}
		);

		context.rollData = this.actor?.getRollData() ?? {};

		// Any item specific data used in templates
		//
		if (item.type === "skill") {
			context.system.focuses = context.system.focuses.sort(
				(a, b) => a.title.localeCompare(b.title)
			);
		}
		else if (item.type === "weapon") {
			context.damageEffects = this._getWeaponDamageEffects();
			context.weaponQualities = this._getWeaponQualities();
		}

		return context;
	}


	_getWeaponDamageEffects() {
		const damageEffects = [];
		for (const key in CONFIG.CC2D20.DAMAGE_EFFECTS) {
			damageEffects.push({
				active: this.item.system?.effect[key].value ?? false,
				hasRank: CONFIG.CC2D20.DAMAGE_EFFECT_HAS_RANK[key],
				rank: this.item.system?.effect[key].rank,
				key,
				label: CONFIG.CC2D20.DAMAGE_EFFECTS[key],
			});
		}

		return damageEffects.sort(
			(a, b) => a.label.localeCompare(b.label)
		);
	}


	_getWeaponQualities() {
		const weaponQualities = [];
		for (const key in CONFIG.CC2D20.WEAPON_QUALITIES) {
			weaponQualities.push({
				active: this.item.system?.qualities[key].value ?? false,
				key,
				label: CONFIG.CC2D20.WEAPON_QUALITIES[key],
			});
		}

		return weaponQualities.sort(
			(a, b) => a.label.localeCompare(b.label)
		);
	}


	/** @override */
	async _onSubmit(event) {
		if (!this.isEditable) return;

		if (["spell", "weapon"].includes(this.item.type)) {
			const updateData = this._getSubmitData();

			const newSkill = updateData["system.skill"];
			if (newSkill !== this.item.system.skill) {
				// Skill has changed so existing focus setting is not valid
				updateData["system.focus"] = "";
			}

			this.item.update(updateData);
		}
		else {
			return super._onSubmit(event);
		}
	}
}

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {CCActorSheet}
 */
class CCNPCSheet extends CCActorSheet {

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

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {CCActorSheet}
 */
class CCVehicleSheet extends CCActorSheet {

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

class DialogEditTruth extends Dialog {

	constructor(dialogData = {}, options = {}) {
		super(dialogData, options);
	}


	static async createDialog({actorUuid, index = -1, truth = ""}) {
		let dialogData = {
			actorUuid,
			truth,
			index,
		};

		const html = await renderTemplate(
			"systems/cc2d20/templates/dialogs/edit-truth.hbs",
			dialogData
		);

		const label = index < 0
			? game.i18n.localize("CC2D20.TEMPLATES.ADD")
			: game.i18n.localize("CC2D20.TEMPLATES.SAVE");

		const title = index < 0
			? game.i18n.localize("CC2D20.TEMPLATES.AddTruth")
			: game.i18n.localize("CC2D20.TEMPLATES.EditTruth");

		const dialog = new DialogEditTruth({
			title,
			content: html,
			buttons: {
				edit: {
					icon: '<i class="fas fa-floppy-disk"></i>',
					label,
					callback: async html => {
						const actorUuid = html.find(".actorUuid").val() ?? "";
						const index = parseInt(html.find(".index").val()) ?? -1;

						let truth = html.find(".truth").val();

						// Strip any leading/trailing spaces
						truth = truth.replace(/^\s+|\s+$/g, "");

						if (truth === "") return; // do nothing

						const actor = await fromUuid(actorUuid);

						const currentTruths = foundry.utils.duplicate(
							actor.system.truths
						) ?? [];

						if (index < 0) {
							// Append new truth
							currentTruths.push(truth);
							actor.update({"system.truths": currentTruths});
						}
						else if (index <= currentTruths.length) {
							// Replace edited truth
							currentTruths[index] = truth;
							actor.update({"system.truths": currentTruths});
						}
						else {
							cc2d20.logger.error("Truth index out of range");
						}
					},
				},
			},
			default: "edit",
			close: () => { },
		});

		dialog.render(true);
	}
}

var dialogs = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DialogEditTruth: DialogEditTruth
});

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
const preloadHandlebarsTemplates = async function() {
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

async function registerSettings() {
	console.log(`${SYSTEM_NAME} | Registering game settings`);

	// ------------------
	//  MOMENTUM TRACKER
	// ------------------
	//
	game.settings.register(SYSTEM_ID, "partyMomentum", {
		name: "Party Momentum",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
	});

	game.settings.register(SYSTEM_ID, "gmMomentum", {
		name: "GM Momentum",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
	});

	game.settings.register(SYSTEM_ID, "maxMomentum", {
		name: "Max Momentum",
		scope: "world",
		config: false,
		default: 6,
		type: Number,
	});

	// -------------------
	//  STANDARD SETTINGS
	// -------------------
	//
	game.settings.register(SYSTEM_ID, "gmMomentumShowToPlayers", {
		name: game.i18n.localize("CC2D20.SETTINGS.showmomentumName"),
		hint: game.i18n.localize("CC2D20.SETTINGS.showmomentumHint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
	});

	game.settings.register(SYSTEM_ID, "maxAppShowToPlayers", {
		name: game.i18n.localize("CC2D20.SETTINGS.maxappName"),
		hint: game.i18n.localize("CC2D20.SETTINGS.maxappHint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
	});

	game.settings.register(SYSTEM_ID, "combatTrackerMomentumUpdate", {
		name: game.i18n.localize("CC2D20.SETTINGS.ctName"),
		hint: game.i18n.localize("CC2D20.SETTINGS.ctHint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
	});

	// ----------------
	//  DEBUG SETTINGS
	// ----------------
	//
	game.settings.register(SYSTEM_ID, "debugEnabled", {
		name: game.i18n.localize("CC2D20.SETTINGS.debugEnabled.label"),
		hint: game.i18n.localize("CC2D20.SETTINGS.debugEnabled.hint"),
		scope: "world",
		type: Boolean,
		config: true,
		default: false,
		requiresReload: true,
	});

	game.settings.register(SYSTEM_ID, "worldSchemaVersion", {
		name: game.i18n.localize("CC2D20.SETTINGS.worldSchemaVersion.label"),
		hint: game.i18n.localize("CC2D20.SETTINGS.worldSchemaVersion.hint"),
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: -1,
		type: Number,
	});

	game.settings.register(SYSTEM_ID, "systemVersion", {
		name: game.i18n.localize("CC2D20.SETTINGS.systemVersion.label"),
		hint: game.i18n.localize("CC2D20.SETTINGS.systemVersion.hint"),
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: "",
		type: String,
	});

	game.settings.register(SYSTEM_ID, "migrateSystemCompendiums", {
		name: game.i18n.localize("CC2D20.SETTINGS.migrateSystemCompendiums.label"),
		hint: game.i18n.localize("CC2D20.SETTINGS.migrateSystemCompendiums.label"),
		scope: "world",
		type: Boolean,
		config: game.settings.get(SYSTEM_ID, "debugEnabled"),
		default: false,
		requiresReload: true,
	});
}

const registerHandlebarsHelpers = function() {

	/* -------------------------------------------- */
	/*  GENERAL HELPERS                             */
	/* -------------------------------------------- */
	Handlebars.registerHelper("activeEffectIcon", effect => {
		return cc2d20.utils.foundryMinVersion(12)
			? effect.img
			: effect.icon;
	});

	Handlebars.registerHelper("concat", function() {
		let outStr = "";
		for (let arg in arguments) {
			if (typeof arguments[arg] != "object") {
				outStr += arguments[arg];
			}
		}
		return outStr;
	});

	Handlebars.registerHelper("fromConfig", function(arg1, arg2) {
		return CONFIG.CC2D20[arg1][arg2] ? CONFIG.CC2D20[arg1][arg2] : arg2;
	});

	Handlebars.registerHelper("toLowerCase", function(str) {
		return str.toLowerCase();
	});

	Handlebars.registerHelper("toUpperCase", function(str) {
		return str.toUpperCase();
	});

	Handlebars.registerHelper("subString", function(str, s, e) {
		return str.substring(s, e);
	});

	Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
		switch (operator) {
			case "==":
				// eslint-disable-next-line eqeqeq
				return v1 == v2 ? options.fn(this) : options.inverse(this);
			case "===":
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case "!=":
				// eslint-disable-next-line eqeqeq
				return v1 != v2 ? options.fn(this) : options.inverse(this);
			case "!==":
				return v1 !== v2 ? options.fn(this) : options.inverse(this);
			case "<":
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case "<=":
				return v1 <= v2 ? options.fn(this) : options.inverse(this);
			case ">":
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case ">=":
				return v1 >= v2 ? options.fn(this) : options.inverse(this);
			case "&&":
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case "||":
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});

	Handlebars.registerHelper("listDamageEffects", function(effects) {
		const elements = [];

		for (const key in effects) {
			if (!CONFIG.CC2D20.DAMAGE_EFFECTS.hasOwnProperty(key)) continue;

			const effect = effects[key];

			if (!effect.value) continue;

			let effectName = CONFIG.CC2D20.DAMAGE_EFFECTS[key];
			if (effect.rank > 0) effectName += ` ${effect.rank}`;

			const tooltip = CONFIG.CC2D20.DAMAGE_EFFECT_TOOLTIPS[key];

			const resultHtml = document.createElement("span");
			resultHtml.classList.add("effect", "hover");
			resultHtml.dataset.key = key;
			resultHtml.dataset.tooltip = tooltip;
			resultHtml.innerHTML = effectName;

			elements.push(resultHtml.outerHTML);
		}

		let listString = "";

		if (elements.length > 0) {
			listString = elements.join(",&nbsp;");
		}
		else {
			listString = "&mdash;";
		}

		return listString;
	});

	Handlebars.registerHelper("listWeaponQualities", function(qualities) {
		const elements = [];

		for (const key in qualities) {
			if (!CONFIG.CC2D20.WEAPON_QUALITIES.hasOwnProperty(key)) continue;

			const effect = qualities[key];

			if (!effect.value) continue;

			let qualityName = CONFIG.CC2D20.WEAPON_QUALITIES[key];

			const tooltip = CONFIG.CC2D20.WEAPON_QUALITY_TOOLTIPS[key];

			const resultHtml = document.createElement("span");
			resultHtml.classList.add("quality", "hover");
			resultHtml.dataset.key = key;
			resultHtml.dataset.tooltip = tooltip;
			resultHtml.innerHTML = qualityName;

			elements.push(resultHtml.outerHTML);
		}

		let listString = "";

		if (elements.length > 0) {
			listString = elements.join(",&nbsp;");
		}
		else {
			listString = "&mdash;";
		}

		return listString;
	});

	Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
		lvalue = parseFloat(lvalue);
		rvalue = parseFloat(rvalue);
		return {
			"+": lvalue + rvalue,
			"-": lvalue - rvalue,
			"*": lvalue * rvalue,
			"/": lvalue / rvalue,
			"%": lvalue % rvalue,
		}[operator];
	});

	/* -------------------------------------------- */
	/*  CC2D20 HELPERS                             */
	/* -------------------------------------------- */

	Handlebars.registerHelper("damageFaIconClass", function(str) {
		if (str === "physical") return "fas fa-fist-raised";
		else if (str === "energy") return "fas fa-bolt";
		else if (str === "radiation") return "fas fa-radiation";
		else if (str === "poison") return "fas fa-biohazard";
	});

	Handlebars.registerHelper("getSkillFocusList", function(key) {
		if (key === "") return [];

		const skill = CONFIG.CC2D20.SKILLS.find(s => s.key === key);

		const focuses = {};

		for (const focus of skill.focuses) {
			focuses[focus] = cc2d20.utils.getLocalizedFocusName(focus);
		}

		return focuses;
	});

	Handlebars.registerHelper("getWeaponEffects", function(effect) {
		let effects = [];
		Object.entries(effect).forEach(([k, v]) => {
			let effString = "";
			let tooltip = "";
			let locString = "";
			if (v.value) {
				let tstr = `CC2D20.WEAPONS.effects.${k}`;
				let lstr = `CC2D20.WEAPONS.damageEffect.${k}`;
				tooltip = Handlebars.helpers.getTooltipFromConfigKey(tstr);
				locString = game.i18n.localize(lstr);
				effString += `<span data-tooltip="${tooltip}">${locString}`;
				if (v.rank) {
					effString += ` ${v.rank}`;
				}
				effString += "</span>";
				effects.push(effString);
			}
		});
		return effects.join(", ");
	});

	Handlebars.registerHelper("getWeaponQualities", function(qualities) {
		let _qualities = [];
		Object.entries(qualities).forEach(([k, v]) => {
			let quString = "";
			let tooltip = "";
			let locString = "";
			if (v.value) {
				let tstr = `CC2D20.WEAPONS.qualities.${k}`;
				let lstr = `CC2D20.WEAPONS.weaponQuality.${k}`;
				tooltip = Handlebars.helpers.getTooltipFromConfigKey(tstr);
				locString = game.i18n.localize(lstr);
				quString += `<span data-tooltip="${tooltip}">${locString}</span>`;
				_qualities.push(quString);
			}
		});
		return _qualities.join(", ");
	});

	Handlebars.registerHelper("isCreaturesWeapon", function(weapon) {
		if (weapon.system.weaponType === "creatureAttack" || weapon.actor?.type === "creature") return true;
		else return false;
	});

	Handlebars.registerHelper("isWeaponUsingMeleeBonus", function(weapon, actor) {
		if ((weapon.weaponType === "unarmed" || weapon.weaponType === "meleeWeapons") && actor?.type !== "creature") return true;
		else return false;
	});

	Handlebars.registerHelper("hasInjury", function(txt) {
		if (txt.length > 0) return true;
		else return false;
	});

	Handlebars.registerHelper("listSkillFocuses", function(skill, onlyFocused = false) {
		const elements = [];

		const focuses = foundry.utils.duplicate(skill?.system?.focuses ?? [])
			.sort((a, b) => {
				const aTitle = cc2d20.utils.getLocalizedFocusName(a.title);
				const bTitle = cc2d20.utils.getLocalizedFocusName(b.title);

				return aTitle.localeCompare(bTitle);
			});

		for (const focus of focuses) {
			if (onlyFocused && !focus.isfocus) continue;

			const tooltip = game.i18n.localize(`CC2D20.Tooltips.Focus.${focus.title.slugify()}`);
			const resultHtml = document.createElement("span");

			resultHtml.classList.add("skill-focus", "clickable", "roll-focus");
			if (focus.isfocus) resultHtml.classList.add("focused");

			resultHtml.dataset.focusName = focus.title;
			resultHtml.dataset.isFocused = focus.isfocus;
			resultHtml.dataset.itemId = skill._id;
			resultHtml.dataset.tooltip = tooltip;

			resultHtml.innerHTML = cc2d20.utils.getLocalizedFocusName(focus.title);

			elements.push(resultHtml.outerHTML);
		}

		let listString = "";

		if (elements.length > 0) {
			listString = elements.join(",&nbsp;&nbsp;");
		}

		return listString;
	});

	Handlebars.registerHelper("getAttributeBonus", function(actor, weaponType) {
		if (weaponType === "agi") return actor.system.attributes.bra.bonus;
		else if (weaponType === "coo") return actor.system.attributes.ins.bonus;
		else if (weaponType === "wil") return actor.system.attributes.wil.bonus;
	});

	Handlebars.registerHelper("getArmorQualities", function(qualities) {
		let qual = Object.entries(qualities).filter(([k, v]) => v.value).map(m => m[0]);
		return qual;
	});

	Handlebars.registerHelper("getSizeLabel", function(num) {
		switch (parseInt(num) ?? null) {
			case 0:
				return "Trivial";
			case 1:
				return "Minor";
			case 3:
				return "Major";
			default:
				return "-";
		}
	});


	Handlebars.registerHelper("clearTextAreaText", function(txt) {
		txt.trim();
		txt = txt.replace(/  +/g, " ");
		// ! replace new lines with encided \n so stupid textarea doesn't break
		txt = txt.replace(/(?:\r\n|\r|\n)/g, "&#13;&#10;");
		return txt;
	});

	// FOR TIMES LOOP
	Handlebars.registerHelper("times", function(n, block) {
		let accum = "";
		for (let i = 0; i < n; ++i) accum += block.fn(i);
		return accum;
	});

	// * Use with #if
	// {{#if (or
	// (eq section1 "foo")
	// (ne section2 "bar"))}}
	// .. content
	// {{/if}}
	Handlebars.registerHelper({
		eq: (v1, v2) => v1 === v2,
		ne: (v1, v2) => v1 !== v2,
		lt: (v1, v2) => v1 < v2,
		gt: (v1, v2) => v1 > v2,
		lte: (v1, v2) => v1 <= v2,
		gte: (v1, v2) => v1 >= v2,
		and() {
			return Array.prototype.every.call(arguments, Boolean);
		},
		or() {
			return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
		},
	});

	Handlebars.registerHelper("getTooltipFromConfigKey", function(key) {
		return key.split(".").reduce((o, i) => o[i], CONFIG);
	});

	Handlebars.registerHelper("select", function(selected, options) {
		const escapedValue = RegExp.escape(Handlebars.escapeExpression(selected));
		const rgx = new RegExp(` value=["']${escapedValue}["']`);
		const html = options.fn(this);
		return html.replace(rgx, "$& selected");
	});

	Handlebars.registerHelper("slugify", function(value) {
		return typeof value === "string"
			? value.slugify()
			: value;
	});

};

function registerTextEditorEnrichers() {
	CONFIG.TextEditor.enrichers = [
		...CONFIG.TextEditor.enrichers,
		{
			pattern: /@(s(tress)?|c(hallenge)?)/gim,
			enricher: async (match, options) => {
				const i = document.createElement("i");
				i.className = "cth-ico-cth";

				// Adjust positioning slightly to align better with text.
				i.style.position = "relative";
				i.style.top = "0.2em";

				return i;
			},
		},
		{
			pattern: /@(x(ross)?)/gim,
			enricher: async (match, options) => {
				const i = document.createElement("i");
				i.className = "cth-ico-cth-cross";

				// Adjust positioning slightly to align better with text.
				i.style.position = "relative";
				i.style.top = "0.1em";

				return i;
			},
		},
	];
}

class Dialog2d20 extends Dialog {

	constructor(
		rollName,
		diceNum,
		attribute,
		skill,
		focus,
		complication,
		actor,
		prefAttribute,
		actorId,
		itemId,
		dialogData={},
		options={}
	) {
		super(dialogData, options);

		this.actor = actor;
		this.actorId = actorId;
		this.attribute = attribute;
		this.complication = complication;
		this.diceNum = diceNum;
		this.focus = focus;
		this.itemId = itemId;
		this.prefAttribute = prefAttribute;
		this.rollName = rollName;
		this.skill = skill;

		this.options.classes = ["dice-icon"];
	}

	activateListeners(html) {
		super.activateListeners(html);

		html.ready(e => {
			this.markDiceNumber(html, this.diceNum);
		});

		html.on("click", ".dice-icon", (e, i, a) => {
			let index = e.currentTarget.dataset.index;
			this.diceNum = parseInt(index);
			this.markDiceNumber(html, this.diceNum);
		});

		html.on("click", ".roll", event => {
			let attribute = html.find('[name="attribute"]').val();

			if (!attribute) {
				let attributeShortName = html.find(".select-attribute").val();
				attribute = this.actor.attributes[attributeShortName].value;
			}

			const skill = html.find('[name="skill"]').val();
			const complication = html.find('[name="complication"]').val();
			const isFocus = html.find('[name="focus"]').is(":checked");

			game.cc2d20.Roller2D20.rollD20({
				actorId: this.actorId,
				attribute,
				complication,
				dicenum: this.diceNum,
				focus: isFocus,
				itemId: this.itemId,
				rollName: this.rollName,
				skill,
			});
		});
	}

	markDiceNumber(html) {
		$(html).find(".dice-icon").removeClass("marked");
		$(html).find(`[data-index="${this.diceNum}"]`).addClass("marked");
	}

	static async createDialog({
		actor = null,
		actorId = null,
		attribute = 0,
		complication = 20,
		diceNum = 2,
		focus = false,
		itemId = null,
		prefAttribute = null,
		rollName = "Roll D20",
		skill = 0,
	} = {}) {
		const dialogData = {
			actor,
			actorId,
			attribute,
			complication,
			diceNum,
			focus,
			itemId,
			prefAttribute,
			rollName,
			skill,
		};

		const html = await renderTemplate(
			"systems/cc2d20/templates/dialogs/dialog2d20.hbs",
			dialogData
		);

		const dialog = new Dialog2d20(
			rollName,
			diceNum,
			attribute,
			skill,
			focus,
			complication,
			actor,
			prefAttribute,
			actorId,
			itemId,
			{
				title: rollName,
				content: html,
				buttons: {
					roll: {
						icon: '<i class="fas fa-check"></i>',
						label: "ROLL",
					},
				},
			}
		);
		dialog.render(true);
	}
}

class DialogD6 extends Dialog {

	constructor(dialogData = {}, options = {}) {
		super(dialogData, options);

		this.options.classes = ["dice-icon"];
	}

	static async createDialog({
		cc2d20Roll = null,
		actorId = null,
		diceNum = 2,
		itemId = null,
		rollName = "Challenge Roll",
	}={}) {
		const dialogData = {
			cc2d20Roll,
			actorId,
			diceNum,
			itemId,
			rollName,
		};

		const html = await renderTemplate(
			"systems/cc2d20/templates/dialogs/dialogD6.hbs",
			dialogData
		);

		const dialog = new DialogD6({
			title: rollName,
			content: html,
			buttons: {
				roll: {
					icon: '<i class="fas fa-check"></i>',
					label: "ROLL",
					callback: html => {
						const diceNum = parseInt(
							html.find(".d-number")[0].value
						);

						if (isNaN(diceNum) || diceNum <= 0) {
							return ui.notifications.error(
								game.i18n.localize("CC2D20.Error.NumberOfDiceMustBeNonZero")
							);
						}

						const rollOptions = {
							actorId,
							diceNum,
							itemId,
							rollName,
						};

						if (cc2d20Roll) {
							rollOptions.cc2d20Roll = cc2d20Roll;

							game.cc2d20.Roller2D20.addD6(rollOptions);
						}
						else {
							game.cc2d20.Roller2D20.rollD6(rollOptions);
						}
					},
				},
			},
			default: "roll",
			close: () => {},
		});

		dialog.render(true);
	}
}

class DieCCChallenge extends Die {
	constructor(termData) {
		termData.faces = 6;
		super(termData);
	}

	static DENOMINATION = "s";

	/** @override */
	getResultLabel(result) {
		return {
			1: '<img src="systems/cc2d20/assets/dice/d1.webp" />',
			2: '<img src="systems/cc2d20/assets/dice/d2.webp" />',
			3: '<img src="systems/cc2d20/assets/dice/d3.webp" />',
			4: '<img src="systems/cc2d20/assets/dice/d4.webp" />',
			5: '<img src="systems/cc2d20/assets/dice/d5.webp" />',
			6: '<img src="systems/cc2d20/assets/dice/d6.webp" />',
		}[result.result];
	}

	static values = {
		1: 1,
		2: 2,
		3: 0,
		4: 0,
		5: "<img width='24' height='24' style='border: none' src='systems/cc2d20/assets/dice/d5.webp'/>",
		6: "<img width='24' height='24' style='border: none' src='systems/cc2d20/assets/dice/d6.webp'/>",
	};

	get total() {
		if (!this._evaluated) return null;
		return this.results.reduce((t, r) => {
			if (!r.active) return t;
			if (r.count !== undefined) return t + r.count;
			return t + DieACChallenge.getValue(r.result);
		}, 0);
	}

	/** @override */
	roll(options) {
		const roll = super.roll(options);
		roll.effect = roll.result === 5 || roll.result === 6;
		return roll;
	}

	get resultValues() {
		return this.results.map(result => {
			return DieACChallenge.getResultLabel(result.result);
		});
	}

	static getValue(dieSide) {
		// 1 if Effect, otherwise take the value
		return typeof DieACChallenge.values[dieSide] === "string"
			? 1
			: DieACChallenge.values[dieSide];
	}

}

class Roller2D20 {
	diceRolled = [];

	complicationThreshold = 20;

	critThreshold = 0;

	successes = 0;

	successThreshold = 0;

	static async addD6({
		cc2d20Roll = null,
		actorId = null,
		dicenum = 2,
		diceRolled = [],
		itemId = null,
		rollName = "Roll D6",
	} = {}) {
		let formula = `${dicenum}ds`;
		let roll = new Roll(formula);

		await roll.evaluate();
		this.showDiceSoNice(roll);

		let newRollName = `${cc2d20Roll.rollName} [+ ${dicenum} DC]`;
		let oldDiceRolled = cc2d20Roll.diceRolled;

		await Roller2D20.parseD6Roll({
			rollName: newRollName,
			roll,
			diceRolled: diceRolled,
			addDice: oldDiceRolled,
			itemId: itemId,
			actorId: actorId,
		});
	}


	static getComplicationCount(results) {
		let complications = 0;

		results.forEach(roll => {
			complications += roll.complication;
		});

		return complications;
	}


	static getRollModeSettings() {
		const rollMode = game.settings.get("core", "rollMode");

		let blind = false;
		let whisper = null;

		switch (rollMode) {
			case "blindroll": {
				blind = true;
			}
			case "gmroll": {
				const gmList = game.users.filter(user => user.isGM);
				const gmIDList = [];
				gmList.forEach(gm => gmIDList.push(gm.id));
				whisper = gmIDList;
				break;
			}
			case "roll": {
				const userList = game.users.filter(user => user.active);
				const userIDList = [];
				userList.forEach(user => userIDList.push(user.id));
				whisper = userIDList;
				break;
			}
			case "selfroll": {
				whisper = [game.user.id];
				break;
			}
		}
		return { whisper, blind };
	}


	static getSuccessCount(results) {
		let successes = 0;

		results.forEach(roll => {
			successes += roll.success;
		});

		return successes;
	}


	static async parseD20Roll({
		actorId = null,
		complicationThreshold = 20,
		critThreshold = 1,
		diceRolled = [],
		itemId = null,
		rerollIndexes = [],
		roll = null,
		rollName = "Roll xD20",
		successThreshold = 0,
	}) {
		let rerollIndex = 0;

		roll.dice.forEach(dice => {
			dice.results.forEach(roll => {
				let success = 0;
				let complication = 0;

				if (roll.result <= successThreshold) success++;
				if (roll.result <= critThreshold) success++;
				if (roll.result >= complicationThreshold) complication = 1;

				// If there are no rollIndexes sent then it is a new roll.
				// Otherwise it's a re-roll and we should replace dice at given
				// indexes
				if (!rerollIndexes.length) {
					diceRolled.push({
						complication,
						reroll: false,
						result: roll.result,
						success,
					});
				}
				else {
					diceRolled[rerollIndexes[rerollIndex]] = {
						complication,
						reroll: true,
						result: roll.result,
						success,
					};

					rerollIndex++;
				}
			});
		});

		await Roller2D20.sendToChat({
			actorId,
			complicationThreshold,
			critThreshold,
			diceRolled,
			itemId,
			rerollIndexes,
			roll,
			rollName,
			successThreshold,
		});
	}


	static async parseD6Roll({
		actorId = null,
		addDice = [],
		diceRolled = [],
		itemId = null,
		rerollIndexes = [],
		roll = null,
		rollName = "Roll D6",
	} = {}) {
		let diceResults = [
			{ result: 1, effect: 0 },
			{ result: 2, effect: 0 },
			{ result: 0, effect: 0 },
			{ result: 0, effect: 0 },
			{ result: 1, effect: 1 },
			{ result: 1, effect: 1 },
		];

		let i = 0;
		roll.dice.forEach(d => {
			d.results.forEach(r => {
				let diceResult = diceResults[r.result - 1];
				diceResult.face = r.result;
				// if there are no rollIndexes sent then it is a new roll.
				// Otherwise it's a re-roll and we should replace dices at given
				// indexes
				if (!rerollIndexes.length) {
					diceRolled.push(diceResult);
				}
				else {
					diceRolled[rerollIndexes[i]] = diceResult;
					i++;
				}
			});
		});

		if (addDice.length) {
			diceRolled = addDice.concat(diceRolled);
		}

		await Roller2D20.sendD6ToChat({
			rollName: rollName,
			roll: roll,
			diceRolled: diceRolled,
			rerollIndexes: rerollIndexes,
			itemId: itemId,
			actorId: actorId,
		});
	}


	static async rerollD20({
		complicationThreshold = 20,
		critThreshold = 1,
		diceRolled = [],
		rerollIndexes = [],
		roll = null,
		rollName = "Roll xD20",
		successThreshold = 0,
	} = {}) {
		if (!rerollIndexes.length) {
			return ui.notifications.notify("Select the dice you wish to reroll");
		}

		let numOfDice = rerollIndexes.length;
		let formula = `${numOfDice}d20`;

		let _roll = new Roll(formula);
		await _roll.evaluate();
		this.showDiceSoNice(_roll);

		await Roller2D20.parseD20Roll({
			rollName: `${rollName} [re-roll]`,
			roll: _roll,
			successThreshold: successThreshold,
			critThreshold: critThreshold,
			complicationThreshold: complicationThreshold,
			diceRolled: diceRolled,
			rerollIndexes: rerollIndexes,
		});
	}


	static async rerollD6({
		actorId = null,
		diceRolled = [],
		itemId = null,
		rerollIndexes = [],
		roll = null,
		rollName = "Roll D6",
	} = {}) {

		if (!rerollIndexes.length) {
			ui.notifications.notify("Select Dice you want to Reroll");
			return;
		}
		let numOfDice = rerollIndexes.length;
		let formula = `${numOfDice}ds`;
		let _roll = new Roll(formula);

		await _roll.evaluate();
		this.showDiceSoNice(_roll);

		await Roller2D20.parseD6Roll({
			rollName: `${rollName} [re-roll]`,
			roll: _roll,
			diceRolled: diceRolled,
			rerollIndexes: rerollIndexes,
			itemId: itemId,
			actorId: actorId,
		});
	}


	static async rollD20({
		actorId = null,
		attribute = 0,
		complication = 20,
		dicenum = 2,
		difficulty = 1,
		focus = false,
		itemId = null,
		rollName = "Roll xD20",
		skill = 0,
	} = {}) {
		const successThreshold = parseInt(attribute) + parseInt(skill);

		const critThreshold = focus && parseInt(skill) > 0 ? parseInt(skill) : 1;

		const complicationThreshold = parseInt(complication);

		const formula = `${dicenum}d20`;
		const roll = new Roll(formula);

		await roll.evaluate();
		this.showDiceSoNice(roll);

		await Roller2D20.parseD20Roll({
			actorId,
			complicationThreshold,
			critThreshold,
			itemId,
			roll,
			rollName,
			successThreshold,
		});
	}


	static async rollD6({
		actorId = null,
		diceNum = 2,
		itemId = null,
		rollName = "Roll D6",
	} = {}) {
		const formula = `${diceNum}ds`;
		const roll = new Roll(formula);

		await roll.evaluate();
		this.showDiceSoNice(roll);

		await Roller2D20.parseD6Roll({
			actorId: actorId,
			itemId: itemId,
			roll: roll,
			rollName: rollName,
		});
	}


	static async sendD6ToChat({
		actorId = null,
		diceRolled = [],
		itemId = null,
		rerollIndexes = [],
		roll = null,
		rollName = "Roll D6",
	} = {}) {
		let damage = diceRolled.reduce(
			(a, b) => ({ result: a.result + b.result })
		).result;

		let effects = diceRolled.reduce(
			(a, b) => ({ effect: a.effect + b.effect })
		).effect;

		let item;
		let itemEffects;
		if (itemId && actorId) {
			item = game.actors.get(actorId)?.items.get(itemId) ?? null;

			if (item && item.type === "spell") {
				itemEffects = item.system.costEffects;
			}
		}

		let rollData = {
			itemEffects,
			damage,
			effects,
			item,
			results: diceRolled,
			rollName,
		};

		const html = await renderTemplate(
			"systems/cc2d20/templates/chat/rollD6.hbs",
			rollData
		);

		const cc2d20Roll = {
			damage,
			diceFace: "d6",
			diceRolled,
			effects,
			rerollIndexes,
			rollName,
		};

		const speaker = {actor: actorId};

		const { whisper, blind } = this.getRollModeSettings();

		const chatData = {
			blind,
			content: html,
			flags: { cc2d20Roll, itemId, actorId },
			roll,
			rollMode: game.settings.get("core", "rollMode"),
			speaker,
			user: game.user.id,
			whisper,
		};

		await ChatMessage.create(chatData);
	}


	static async sendToChat({
		actorId = null,
		complicationThreshold = 20,
		critThreshold = 1,
		diceRolled = [],
		itemId = null,
		rerollIndexes = [],
		roll = null,
		rollName = "Roll xD20",
		successThreshold = 0,
	} = {}) {
		const successes = Roller2D20.getSuccessCount(diceRolled);
		const complications = Roller2D20.getComplicationCount(diceRolled);

		const rollData = {
			actorId,
			complications,
			itemId,
			results: diceRolled,
			rollName,
			successes,
			successThreshold: successThreshold,
		};

		const html = await renderTemplate(
			"systems/cc2d20/templates/chat/roll2d20.hbs",
			rollData
		);

		const cc2d20Roll = {
			complicationThreshold,
			critThreshold,
			diceFace: "d20",
			diceRolled,
			rerollIndexes,
			rollName,
			successThreshold,
		};

		const speaker = {actor: actorId};

		const { whisper, blind } = this.getRollModeSettings();

		let chatData = {
			blind,
			content: html,
			flags: { cc2d20Roll },
			roll,
			rollMode: game.settings.get("core", "rollMode"),
			speaker,
			user: game.user.id,
			whisper,
		};

		await ChatMessage.create(chatData);
	}


	/**
	 * Add support for the Dice So Nice module
	 * @param {Object} roll
	 * @param {String} rollMode
	 */
	static async showDiceSoNice(roll) {
		if (game.modules.get("dice-so-nice")
			&& game.modules.get("dice-so-nice").active
		) {
			const { whisper, blind } = Roller2D20.getRollModeSettings();

			await game.dice3d.showForRoll(roll, game.user, true, whisper, blind);
		}
	}
}

class CCUtils {

	static foundryMinVersion(version) {
		const majorVersion = parseInt(game.version.split(".")[0]);
		return majorVersion >= version;
	}


	static async getAvailableItemCompendiumSelectData() {
		const compendiumChoices = {};

		game.packs.filter(
			pack => pack.metadata.type === "Item"
		).sort(
			(a, b) => a.metadata.label.localeCompare(b.metadata.label)
		).forEach(
			pack => {
				compendiumChoices[pack.metadata.id] = pack.metadata.label;
			}
		);

		return compendiumChoices;
	}


	static getLocalizedFocusName(name) {
		const i18nKey = `CC2D20.FOCUS.${name}`;
		return this.getLocalizedStringIfAvailable(i18nKey, name);
	}


	static getLocalizedSkillName(name) {
		const i18nKey = `CC2D20.SKILL.${name.toUpperCase()}`;
		return this.getLocalizedStringIfAvailable(i18nKey, name);
	}


	static getLocalizedStringIfAvailable(i18nKey, originalString) {
		let localized = game.i18n.localize(i18nKey);

		// No localized version, so we return the original
		if (localized === i18nKey) return originalString;

		return localized;
	}


	static getMessageStyles() {
		const messageStyles = this.foundryMinVersion(12)
			? CONST.CHAT_MESSAGE_STYLES
			: CONST.CHAT_MESSAGE_TYPES;

		return messageStyles;
	}


	// If this is a new release or a new world, show the release notes to the
	// GM the first time they login
	//
	static async showNewReleaseNotes() {
		if (game.user.isGM) {
			const savedVersion = game.settings.get("cc2d20", "systemVersion");
			const systemVersion = game.system.version;

			if (systemVersion !== savedVersion) {
				Hotbar.toggleDocumentSheet(
					CONFIG.CC2D20.JOURNAL_UUIDS.releaseNotes
				);

				game.settings.set(
					"cc2d20", "systemVersion",
					systemVersion
				);
			}
		}
	}
}

class Logger {
	static DEBUG_ENABLED = null;

	static debug(...args) {
		if (this.DEBUG_ENABLED === null) {
			this.DEBUG_ENABLED = game.settings.get(SYSTEM_ID, "debugEnabled");
		}

		if (this.DEBUG_ENABLED) console.debug(`${SYSTEM_NAME} |`, ...args);
	}

	static error(...args) {
		console.error(`${SYSTEM_NAME} |`, ...args);
	}

	static log(...args) {
		console.log(`${SYSTEM_NAME} |`, ...args);
	}

	static warn(...args) {
		console.warn(`${SYSTEM_NAME} |`, ...args);
	}
}

class CCUpdateBase {

	static version;

	version = this.constructor["version"]; // eslint-disable-line

	// Update the actor to the latest schema version.
	//
	async updateActor(actorData) {}

	// Update the item to the latest schema version.
	//
	async updateItem(itemData, actorData) {}

	// Any updates required to system settings can be performed here.
	//
	async updateSettings() {}

}

class Update_240218_1 extends CCUpdateBase {
	static version = 240218.1;
}

class Update_240526_1 extends CCUpdateBase {
	static version = 240526.1;

	async updateActor(actorData) {
		if (actorData.type !== "vehicle") return;

		const singleSeatValue =
			actorData.system?.qualities["singleSeat:"]?.value ?? false;

		const updateData = {
			"system.qualities.-=singleSeat:": null,
			"system.qualities.singleSeat.value": singleSeatValue,
		};

		for (const [key] of Object.entries(actorData?.system?.qualities ?? {})) {
			if (key === "singleSeat:") continue;

			updateData[`system.qualities.${key}.-=description`] = null;
		}

		return updateData;
	}
}

class Update_240526_2 extends CCUpdateBase {
	static version = 240526.2;

	async updateActor(actorData) {
		// Get rid of ancient legacy data that's no longer needed
		const updateData = {
			"system.injuries.-=list": null,
			"system.truths": [],
		};

		return updateData;
	}
}

class Update_240527_1 extends CCUpdateBase {
	static version = 240527.1;

	async updateActor(actorData) {
		const truthsText = actorData.system.truthsText ?? "";
		if (truthsText === "") return;

		const lines = truthsText.split("\n");

		const newTruths = [];
		for (let truth of lines) {
			truth = truth.replace(/^\s+|\s+$/g, "");
			if (truth === "") continue; // do nothing

			newTruths.push(truth);
		}

		const updateData = {
			"system.-=truthsText": null,
			"system.truths": newTruths,
		};

		return updateData;
	}
}

class Update_240529_1 extends CCUpdateBase {
	static version = 240529.1;

	async updateItem(itemData, actorData) {
		if (itemData.type !== "weapon") return;

		const updateData = {};

		const rename_effects = [
			"backlash",
			"persistent",
			"piercing",
		];

		for (const key in itemData.system.effect) {
			const value = itemData.system.effect[key].value;

			let rank =  itemData.system.effect[key].rank;
			rank = rank && rank >= 0 ? rank : 0;

			if (rename_effects.includes(key)) {
				updateData[`system.effect.-=${key}`] = null;
				updateData[`system.effect.${key}_x.rank`] = rank;
				updateData[`system.effect.${key}_x.value`] = value;
			}
			else {
				updateData[`system.effect.${key}.-=description`] = null;
				updateData[`system.effect.${key}.-=label`] = null;
			}
		}

		return updateData;
	}

}

class Update_240530_1 extends CCUpdateBase {
	static version = 240530.1;

	async updateItem(itemData, actorData) {
		if (itemData.type !== "weapon") return;

		const updateData = {};

		for (const key in itemData.system.qualities) {
			const value = itemData.system.qualities[key].value;

			if (key === "closeQuarters") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.close_quarters.value"] = value;
			}
			else if (key === "giant-killer") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.giant_killer.value"] = value;
			}
			else {
				updateData[`system.qualities.${key}.-=description`] = null;
				updateData[`system.qualities.${key}.-=label`] = null;
			}
		}

		return updateData;
	}

}

class Update_240531_1 extends CCUpdateBase {
	static version = 240531.1;

	async updateActor(actorData) {
		if (actorData.type !== "vehicle") return;

		const updateData = {};

		for (const key in actorData.system.qualities) {
			const value = actorData.system.qualities[key].value;

			let rank = actorData.system.qualities[key].rank;
			rank = rank && rank >= 0 ? rank : 0;

			if (key === "cargo") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.cargo_x.rank"] = rank;
				updateData["system.qualities.cargo_x.value"] = value;
			}
			else if (key === "highPerformance") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.high_performance.rank"] = rank;
				updateData["system.qualities.high_performance.value"] = value;
			}
			else if (key === "singleSeat") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.single_seat.rank"] = rank;
				updateData["system.qualities.single_seat.value"] = value;
			}
			else if (key === "tough") {
				updateData[`system.qualities.-=${key}`] = null;
				updateData["system.qualities.tough_x.rank"] = rank;
				updateData["system.qualities.tough_x.value"] = value;
			}
		}

		return updateData;
	}
}

class Update_240531_2 extends CCUpdateBase {
	static version = 240531.2;

	async updateItem(itemData, actorData) {
		if (itemData.type !== "skill" || !actorData) return;
		if (game.settings.get("core", "language") === "en") return;

		const languageLut = await this._generateLanguageLut();

		const updateData = {};

		const fixedSkillName = languageLut.skill[itemData.name] ?? itemData.name;
		if (itemData.name !== fixedSkillName) {
			updateData.name = fixedSkillName;
		}

		const fixedFocuses = [];
		for (const focus of itemData.system.focuses ?? []) {
			focus.title =
				languageLut.focus[focus.title] ?? focus.title;

			fixedFocuses.push(focus);
		}

		updateData["system.focuses"] = fixedFocuses;

		return updateData;
	}

	async _generateLanguageLut() {
		const lut = {
			skill: {},
			focus: {},
		};

		for (const skillName of this.englishSkillNames) {
			const localizedName =
				game.i18n.localize(`CC2D20.SKILL.${skillName.toUpperCase()}`);

			lut.skill[localizedName] = skillName;
		}

		for (const focusName of this.englishFocusNames) {
			const localizedName = game.i18n.localize(`CC2D20.FOCUS.${focusName}`);

			lut.focus[localizedName] = focusName;
		}

		return lut;
	}

	get englishFocusNames() {
		return [
			"Air Force",
			"Aircraft",
			"Animal Handling",
			"Architecture",
			"Army",
			"Art",
			"Camouflage",
			"Cars",
			"Charm",
			"Climbing",
			"Close Quarters",
			"Combat Engineering",
			"Covert Operations",
			"Cryptography",
			"Deceive",
			"Discipline",
			"Disguise",
			"Electronics",
			"Exotic",
			"Explosives",
			"Finance",
			"First Aid",
			"Foraging",
			"Fortitude",
			"Hand-to-Hand",
			"Handguns",
			"Hearing",
			"Heavy Vehicles",
			"Heavy Weapons",
			"History",
			"Hunting",
			"Immunity",
			"Infectious Diseases",
			"Innuendo",
			"Instincts",
			"Intimidation",
			"Invocation",
			"Leadership",
			"Lifting",
			"Linguistics",
			"Mechanical Engineering",
			"Melee Weapons",
			"Motorcycles",
			"Mysticism",
			"Navy",
			"Negotiation",
			"Occultism",
			"Orienteering",
			"Pharmacology",
			"Physical Training",
			"Psychiatry",
			"Rhetoric",
			"Rifles",
			"Running",
			"Rural Stealth",
			"Science",
			"Sight",
			"Smell and Taste",
			"Surgery",
			"Swimming",
			"Tanks",
			"Technical Projects",
			"Threat Awareness",
			"Throwing",
			"Toxicology",
			"Tracking",
			"Urban Stealth",
			"Watercraft",
		];
	}

	get englishSkillNames() {
		return [
			"Academia",
			"Athletics",
			"Engineering",
			"Fighting",
			"Medicine",
			"Observation",
			"Persuasion",
			"Resilience",
			"Stealth",
			"Survival",
			"Tactics",
			"Vehicles",
		];
	}

}

var migrations = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Update_240218_1: Update_240218_1,
	Update_240526_1: Update_240526_1,
	Update_240526_2: Update_240526_2,
	Update_240527_1: Update_240527_1,
	Update_240529_1: Update_240529_1,
	Update_240530_1: Update_240530_1,
	Update_240531_1: Update_240531_1,
	Update_240531_2: Update_240531_2
});

class CCMigrationRunner {
	allMigrations;

	currentMigrationTask;

	latestVersion = 0;

	async buildMigrations() {
		const unsortedMigrations = [];

		for (const migration in migrations) {
			const migrationVersion = migrations[migration].version;

			this.latestVersion = migrationVersion > this.latestVersion
				? migrationVersion
				: this.latestVersion;

			if (migrationVersion > this.currentVersion) {
				unsortedMigrations.push(new migrations[migration]());
			}
		}

		this.allMigrations = unsortedMigrations.sort((a, b) => {
			return a.version - b.version;
		});
	}

	get currentVersion() {
		return game.settings.get(SYSTEM_ID$1, "worldSchemaVersion");
	}


	async migrateCompendium(pack) {
		const documentName = pack.documentName;

		if (!["Actor", "Item"].includes(documentName)) return;

		// Unlock the pack for editing
		const wasLocked = pack.locked;
		await pack.configure({locked: false});

		// Begin by requesting service-side migration
		await pack.migrate();
		const documents = await pack.getDocuments();

		// Iterate over compendium entries - apply migration functions
		for (let doc of documents) {
			let updateData = {};
			try {
				const objectData = doc.toObject();
				switch (documentName) {
					case "Actor":
						updateData = await this.currentMigrationTask.updateActor(objectData);
						break;
					case "Item":
						updateData = await this.currentMigrationTask.updateItem(objectData);
						break;
				}

				// Save the entry if data was updated
				if (foundry.utils.isEmpty(updateData)) continue;

				await doc.update(updateData);

				cc2d20.logger.log(`Migrated ${documentName} document "${doc.name}" in Compendium "${pack.collection}"`);
			}
			catch(err) {
				err.message = `Failed system migration for document "${doc.name}" in pack "${pack.collection}": ${err.message}`;
				console.error(err);
			}
		}

		// Apply the original locked status for the pack
		await pack.configure({locked: wasLocked});

		cc2d20.logger.log(`Migrated all "${documentName}" documents from Compendium "${pack.collection}"`);
	}

	async migrateSceneTokens(scene) {
		for (const token of scene.tokens) {
			try {
				// if the token is linked or has no actor, we don"t need to do anything
				if (token.actorLink || !game.actors.has(token.actorId)) continue;

				const actorData = foundry.utils.duplicate(game.actors.get(token.actorId));

				const delta = token.delta;

				if (delta?.system) {
					actorData.system = foundry.utils.mergeObject(
						actorData.system,
						delta.system,
						{inplace: false}
					);
				}

				const updateData = await this.currentMigrationTask.updateActor(actorData);

				if (!foundry.utils.isEmpty(updateData)) {
					cc2d20.logger.log(`Migrating Token document "${token.name}"`);

					updateData._id = token.id;

					await scene.updateEmbeddedDocuments(
						"Token",
						[updateData],
						{enforceTypes: false}
					);
				}
			}
			catch(err) {
				err.message = `Failed system migration for Token "${token.name}": ${err.message}`;
				cc2d20.logger.error(err);
			}
		}
	}

	async migrateSettings() {
		await this.currentMigrationTask.updateSettings();
	}

	async migrateWorldCompendiums() {
		for (let pack of game.packs) {
			// don't migrate system packs
			if (pack.metadata.packageType !== "world") continue;

			await this.migrateCompendium(pack);
		}
	}

	async migrateWorldActors() {
		const actors = game.actors.map(a => [a, true])
			.concat(Array.from(game.actors.invalidDocumentIds).map(
				id => [game.actors.getInvalid(id), false]
			));

		for (const [actor, valid] of actors) {
			try {
				const actorSource = valid
					? actor.toObject()
					: game.actors.find(a => a._id === actor.id);

				const updateData = await this.currentMigrationTask.updateActor(actorSource);

				if (!foundry.utils.isEmpty(updateData)) {
					cc2d20.logger.log(`Migrating Actor document "${actor.name}"`);
					await actor.update(updateData);
				}

				const items = actor.items.map(a => [a, true])
					.concat(Array.from(actor.items.invalidDocumentIds).map(
						id => [actor.items.getInvalid(id), false]
					));

				for (const [item, validItem] of items) {
					const itemSource = validItem
						? item.toObject()
						: actor.items.find(a => a._id === item.id);

					const updateData = await this.currentMigrationTask.updateItem(
						itemSource,
						actorSource
					);

					if (!foundry.utils.isEmpty(updateData)) {
						cc2d20.logger.log(`Migrating Actor Item document "${item.name}"`);
						await item.update(updateData);
					}
				}
			}
			catch(err) {
				err.message = `Failed system migration for Actor "${actor.name}": ${err.message}`;
				console.error(err);
			}
		}
	}

	async migrateWorldItems() {
		const items = game.items.map(a => [a, true])
			.concat(Array.from(game.items.invalidDocumentIds).map(
				id => [game.items.getInvalid(id), false]
			));

		for (const [item, valid] of items) {
			try {
				const source = valid
					? item.toObject()
					: game.items.find(a => a._id === item.id);

				const updateData = await this.currentMigrationTask.updateItem(source);

				if (!foundry.utils.isEmpty(updateData)) {
					cc2d20.logger.log(`Migrating Item document "${item.name}"`);
					item.update(updateData);
				}
			}
			catch(err) {
				err.message = `Failed system migration for Item "${item.name}": ${err.message}`;
				console.error(err);
			}
		}
	}

	async migrateWorldScenes() {
		for (const scene of game.scenes) {
			await this.migrateSceneTokens(scene);
		}
	}

	async migrateWorld() {
		const version = this.currentMigrationTask.version;

		const startMessage = game.i18n.format("CC2D20.MIGRATION.begin_schema", {version});

		cc2d20.logger.log(startMessage);
		ui.notifications.info(startMessage, {permanent: false});

		await this.migrateSettings();
		await this.migrateWorldActors();
		await this.migrateWorldItems();
		await this.migrateWorldScenes();
		await this.migrateWorldCompendiums();

		cc2d20.logger.log(
			game.i18n.format("CC2D20.MIGRATION.completed_schema", {version})
		);
	}

	needsMigration() {
		return this.latestVersion > this.currentVersion;
	}

	async run() {
		cc2d20.logger.log(`Current schema version ${this.currentVersion}`);

		await this.buildMigrations();

		// If this is a brand new world then we don't need to do any migrations.
		//
		if (game.world.playtime === 0) {
			// Should be a brand new world
			await game.settings.set(
				SYSTEM_ID$1, "worldSchemaVersion",
				this.latestVersion
			);
		}

		if (!this.needsMigration()) return;

		const startMessage = game.i18n.localize("CC2D20.MIGRATION.begin_migration");

		cc2d20.logger.log(startMessage);
		ui.notifications.info(startMessage, {permanent: false});

		for (const migration of this.allMigrations) {
			if (this.currentVersion < migration.version) {
				this.currentMigrationTask = migration;

				await this.migrateWorld();

				await game.settings.set(SYSTEM_ID$1, "worldSchemaVersion", migration.version);
			}
		}

		const endMessage = game.i18n.localize("CC2D20.MIGRATION.completed_migration");

		cc2d20.logger.log(endMessage);
		ui.notifications.info(endMessage, {permanent: false});
	}
}

const readyHook = {
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

const setupHook = {
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

class CCChat {

	static async _renderChatMessage(
		actor,
		data,
		template,
		mode
	) {
		const html = await renderTemplate(template, data);

		if (!mode) {
			mode = game.settings.get("core", "rollMode");
		}

		const chatData = {
			user: game.user.id,
			speaker: ChatMessage.getSpeaker({
				actor: actor,
			}),
			rollMode: mode,
			content: html,
			type: CONST.CHAT_MESSAGE_TYPES.OTHER,
		};

		if (["gmroll", "blindroll"].includes(chatData.rollMode)) {
			chatData.whisper = ChatMessage.getWhisperRecipients("GM");
		}
		else if (chatData.rollMode === "selfroll") {
			chatData.whisper = [game.user];
		}

		await ChatMessage.create(chatData);
	}

	static async onRenderChatMessage(message, html, data) {
		cc2d20.logger.debug("Running renderChatMessage hook");

		const rerollButton = html.find(".reroll-button");

		if (rerollButton.length > 0) {
			rerollButton[0].setAttribute("data-messageId", message.id);

			rerollButton.click(el => {
				const selectedDiceForReroll = html.find(".dice-selected");

				const rerollIndex = [];
				for (const die of selectedDiceForReroll) {
					rerollIndex.push($(die).data("index"));
				}

				const rollData = message.flags.cc2d20Roll;

				switch (rollData.diceFace) {
					case "d6":
						cc2d20.Roller2D20.rerollD6({
							rollName: rollData.rollName,
							rerollIndexes: rerollIndex,
							diceRolled: rollData.diceRolled,
							itemId: message.flags.itemId,
							actorId: message.flags.actorId,
						});
						break;
					case "d20":
						cc2d20.Roller2D20.rerollD20({
							rollName: rollData.rollName,
							rerollIndexes: rerollIndex,
							successThreshold: rollData.successThreshold,
							critThreshold: rollData.critThreshold,
							complicationThreshold: rollData.complicationThreshold,
							diceRolled: rollData.diceRolled,
						});
						break;
					default:
						ui.notifications.error(`Unrecognised dice face "${rollData.diceFace}`);
				}
			});
		}


		html.find(".dice-icon").click(el => {
			if ($(el.currentTarget).hasClass("dice-selected")) {
				$(el.currentTarget).removeClass("dice-selected");
			}
			else {
				$(el.currentTarget).addClass("dice-selected");
			}
		});


		const addButton = html.find(".add-button");
		if (addButton.length > 0) {
			addButton[0].setAttribute("data-messageId", message.id);

			addButton.click(ev => {
				const cc2d20Roll = message.flags.cc2d20Roll;
				const actorId = message.flags.actorId;
				const itemId = message.flags.itemId;

				game.cc2d20.DialogD6.createDialog({
					cc2d20Roll,
					actorId,
					diceNum: 1,
					itemId,
					rollName: cc2d20Roll.rollName,
				});
			});
		}
	}

}

const renderChatMessageHook = {
	attach: () => {
		cc2d20.logger.debug("Attaching renderChatMessage hook");

		Hooks.on("renderChatMessage", CCChat.onRenderChatMessage);
	},
};

// import { hotbarDropHook } from "../hooks/hotbarDropHook.mjs";
// import { initiativeHooks } from "../hooks/initiativeHooks.mjs";
// import { preCreateItemHook } from "../hooks/preCreateItemHook.mjs";

const CCHooks = {
	attach: () => {
		cc2d20.logger.debug("Attaching hooks");

		const listeners = [
			readyHook,
			renderChatMessageHook,
			setupHook,
		];

		for (const listener of listeners) {
			listener.attach();
		}
	},
};

async function initHook() {
	console.debug(`${SYSTEM_NAME$1} | Running init hook`);

	// Add custom constants for configuration.
	CONFIG.CC2D20 = CC2D20;

	globalThis.SYSTEM_ID = SYSTEM_ID$1;
	globalThis.SYSTEM_NAME = SYSTEM_NAME$1;

	// Add utility classes to the global game object so that they're more easily
	// accessible in global contexts.
	globalThis.cc2d20 = game.cc2d20 = {
		dialogs,
		Dialog2d20,
		DialogD6,
		logger: Logger,
		MomentumTracker: MomentumTracker,
		Roller2D20,
		utils: CCUtils,
	};

	/**
   * Set an initiative formula for the system
   * @type {String}
   */
	CONFIG.Combat.initiative = {
		formula: "1",
		decimals: 0,
	};

	registerDocumentClasses();
	registerDocumentSheets();

	CONFIG.Dice.terms.s = DieCCChallenge;

	// Combat tracker stuff
	CONFIG.ui.combat = CombatTracker2d20;

	registerSettings();

	// Register text enrichers.
	registerHandlebarsHelpers();
	registerTextEditorEnrichers();

	preloadHandlebarsTemplates();

	CCHooks.attach();
}


function registerDocumentClasses() {
	// Define custom Document classes
	CONFIG.Actor.documentClass = CCActor;
	CONFIG.Item.documentClass = CCItem;
	CONFIG.Combat.documentClass = Combat2d20;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet("cc2d20",
		CCActorSheet,
		{
			makeDefault: true,
			types: ["character"],
		}
	);

	Actors.registerSheet("cc2d20",
		CCNPCSheet,
		{
			makeDefault: true,
			types: ["npc"],
		}
	);

	Actors.registerSheet("cc2d20",
		CCVehicleSheet,
		{
			makeDefault: true,
			types: ["vehicle"],
		}
	);

	Items.registerSheet("cc2d20",
		CCItemSheet,
		{
			makeDefault: true,
		}
	);
}

Hooks.once("init", initHook);
Hooks.once("diceSoNiceReady", diceSoNiceReadyHook);
//# sourceMappingURL=cc2d20-compiled.mjs.map
