import { without } from "lodash";
import Stretchable from "./stretchable";

export default class Profile {
  private readonly main: HTMLElement = document.querySelector("main");
  readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>(
        document.querySelectorAll(".profile .stretchable")
      ),
      element => new Stretchable(element)
    );
  }

  private minimize(): void {
    this.main.classList.remove("expanded-profile");
  }

  maximize(): void {
    this.main.classList.add("expanded-profile");
  }

  expand(target: Stretchable): void {
    target.expand();
    without(this.stretchables, target).forEach(stretchable =>
      stretchable.collapse()
    );
  }

  normalize(): void {
    this.stretchables.forEach(stretchable => stretchable.normalize());
    this.minimize();
  }
}
