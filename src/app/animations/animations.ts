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
    "300ms ease-out",
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: "translateX(20px)"
      }),
      style({
        offset: 1,
        opacity: 0,
        backgroundColor: "indianred",
        transform: "translateX(-100%)"
      })
    ])
  )
);

const fadeInAnimation = animation(
  [style({ opacity: 0 }), animate("{{ duration }} {{ easing }}")],
  {
    params: {
      duration: "3s",
      easing: "ease-out"
    }
  }
);

const fadeInOut = trigger("fade", [
  // state("void", style({ opacity: 0 })), // if we separate :enter & :leave steps then style funct is not needed.
  // transition("void <=> *", [animate(500)])  // same as below one
  // transition(":enter", [animate(500)]), // instead of that above function re-used
  transition(
    ":enter",
    useAnimation(fadeInAnimation, { params: { duration: "800ms" } })
  ),
  transition(":leave", useAnimation(bounceToLeftAnimation))
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
  transition(":enter", [animate("300ms ease-out")]),
  //   transition(":leave", [animate("500ms ease-in")]),
  transition(":leave", useAnimation(bounceToLeftAnimation))
]);

export const customAnimations = {
  fade: fadeInOut,
  slide: slide,
  bounceToLeftAnimation: bounceToLeftAnimation
};
