import History from "./history";
import Profile from "./profile";
import Stretchable from "./stretchable";
import { throttle } from "lodash";

export default class Coordinator {
  private readonly profile = new Profile();
  private readonly history = new History();
  readonly main: HTMLElement = document.querySelector("main");

  constructor() {
    // Allow flexbox to figure out the initial way to lay out the enclosures
    // but ensure they don't shrink height after that.
    document
      .querySelectorAll(".enclosure")
      .forEach((enclosure: HTMLElement) => {
        const originalHeight = `${enclosure.scrollHeight}px`;
        enclosure.style.minHeight = originalHeight;
      });

    this.profile.stretchables.forEach(this.attachStretchableHandler.bind(this));

    this.attachGlobalHandler();
  }

  private attachGlobalHandler(): void {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).matches(".profile *")) {
        this.normalize();
      }
    };
    document.body.addEventListener("click", handleClick.bind(this));
  }

  private attachStretchableHandler(stretchable: Stretchable): void {
    const handleClick = () => {
      this.profile.expand(stretchable);
      this.profile.maximize();
      this.history.lower();
    };
    stretchable.overlay.addEventListener(
      "click",
      throttle(handleClick.bind(this), 50)
    );
  }

  normalize(): void {
    this.profile.normalize();
    this.history.normalize();
  }
}