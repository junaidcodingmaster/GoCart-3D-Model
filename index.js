let animationTriggerStatus = "start";

function animationTriggerButtonHandler() {
  const animationTriggerButton = document.getElementById(
    "animationTriggerSwitch"
  );

  if (animationTriggerStatus === "start") {
    animationTriggerStatus = "stop";
    animationTriggerButton.innerHTML = `<i class="fa fa-pause-circle"></i>`;
  } else {
    animationTriggerStatus = "start";
    animationTriggerButton.innerHTML = `<i class="fa fa-play-circle"></i>`;
  }

  console.log(animationTriggerStatus);
}

AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 2 },
    height: { type: "number", default: 0.05 },
  },
  init: function () {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      radius: this.data.radius,
      height: this.data.height,
    });
    this.el.setAttribute("material", { color: "#0d5fb8" });
    this.el.setAttribute("shadow", { receive: true });
  },
});

AFRAME.registerComponent("showcase", {
  schema: {
    type: { type: "string", default: "rotation" },
    duration: { type: "number", default: 15000 },
    from: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    to: { type: "vec3", default: { x: 0, y: 350, z: 0 } },
  },
  tick: function () {
    if (animationTriggerStatus === "start") {
      this.el.setAttribute(
        "animation",
        `property: ${this.data.type}; from: ${this.data.from.x} ${this.data.from.y} ${this.data.from.z}; to: ${this.data.to.x} ${this.data.to.y} ${this.data.to.z}; dur: ${this.data.duration}; loop: true`
      );
    } else {
      this.el.removeAttribute("animation");
    }
  },
});
