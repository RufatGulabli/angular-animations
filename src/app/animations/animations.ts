import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation
} from "@angular/animations";

const bounceToLeftAnimation = animation(
  animate(
    "0.5s ease-out",
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: "translateX(20px)"
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: "translateX(-100%)"
      })
    ])
  )
);

const fadeInOut = trigger("fade", [
  state("void", style({ opacity: 0 })),
  // transition("void <=> *", [animate(500)])  // same as below one
  transition(":enter, :leave", [animate(500)])
]);

const slide = trigger("slide", [
  state(
    "void",
    style({
      backgroundColor: "white",
      opacity: 0,
      transform: "translateX(-100px)"
    })
  ),
  transition(":enter", [animate("500ms ease-out")]),
  //   transition(":leave", [animate("500ms ease-in")]),
  transition(":leave", useAnimation(bounceToLeftAnimation))
]);

export const customAnimations = {
  fade: fadeInOut,
  slide: slide,
  bounceToLeftAnimation: bounceToLeftAnimation
};
