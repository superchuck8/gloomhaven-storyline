import Storable from './Storable'
import Card from "./Card";
import slugify from "slugify";

class Item {

    constructor(data) {
        this.id = data.id;
        this.number = '#' + String(data.id).padStart(3, '0');
        this._name = data.name;
        this.cost = data.cost;
        this.count = data.count;
        this._slot = data.slot;
        this.source = data.source;
        this.desc = data.desc;
        this.faq = data.faq;
        this.spent = data.spent || false;
        this.consumed = data.consumed || false;
    }

    get name() {
        return app.$t('items.' + this._name.replace("'", ''));
    }

    get use() {
        if (this.spent) {
            return 'img/icons/general/spent_white.png';
        } else if (this.consumed) {
            return 'img/icons/general/consumed_white.png';
        }
        return '';
    }

    get slot() {
        return 'img/icons/equipment/' + slugify(this._slot, {lower: true}) + '.png';
    }

    get image() {
        return 'img/items/' + slugify(this._name.replace("'", ''), {lower: true}) + '.png';
    }
}

export default Item;
