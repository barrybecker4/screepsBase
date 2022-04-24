
export default class Notifier {

    constructor() {
    }

    notify(msg) {
        Game.notify(`Does this show? ${msg}`);
    }
}