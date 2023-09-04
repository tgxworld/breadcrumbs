import Component from "@glimmer/component";
import Category from "discourse/models/category";

export default class extends Component {
  get topic() {
    return this.args.outletArgs.topic;
  }

  get category() {
    if (this.args.outletArgs.category) {
      return this.args.category;
    } else if (this.topic) {
      return this.topic.category;
    }
  }

  get categoryModel() {
    return `${Category.slugFor(this.category)}/${this.category.id}`;
  }
}
