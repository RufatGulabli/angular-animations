import {
  trigger,
  transition,
  useAnimation,
  style,
  animate,
  query,
  animateChild,
  group,
  stagger,
  state
} from "@angular/animations";

export const removeBounce = trigger("bounce", [
  transition(":enter", [
    group([
      // to run multiple animations in paralel
      query("p", [style({ transform: "translateY(-100%)" }), animate(500)], {
        optional: true
      }),
      query(
        "@fade", // @fade is the sudo selector, it can be replaced with CSS selectors (in this case ul or li)
        // animateChild(),
        stagger(500, animateChild()), // stagger function must be inside query only and it's for curtain effect animation
        {
          optional: true
        }
      )
    ])
  ])
]);

export const expandCollapse = trigger("expandCollapse", [
  state(
    "collapsed",
    style({
      opacity: 0,
      height: 0
      // overflow: "hidden"
    })
  ),
  transition("collapsed => expanded", [
    animate(
      "300ms ease-out",
      style({
        height: "*"
        // overflow: "auto"
      })
    ),
    animate("1s", style({ opacity: 1 }))
  ]),
  transition("expanded => collapsed", [animate(400)])
]);
