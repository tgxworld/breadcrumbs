import Component from "@glimmer/component";
import Category from "discourse/models/category";

export default class extends Component {
  get category() {
    if (this.args.category) {
      return this.args.category;
    } else if (this.args.topic) {
      return this.args.topic.category;
    }
  }

  get categoryModel() {
    return `${Category.slugFor(this.category)}/${this.category.id}`;
  }
};