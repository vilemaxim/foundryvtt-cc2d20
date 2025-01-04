export default class DialogD6 extends Dialog {

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
