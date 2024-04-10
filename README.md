# Simple GoCart 3D Model Representation

This is a Simple GoCart 3D Model Representation by using [A-Frame](https://aframe.io) .

Check Out! preview in browser => https://junaidcodingmaster.github.io/GoCart-3D-Model

## Features

- A Toggle Switch UI for toggling Car animation(By Default,animation is rotation, you can change it by using `type=""` in `<a-entity showcase type=""></a-entity>`)

- A `showcase` property for showcasing or simple rotation or position or size animation.
  Usage:

```
<a-entity showcase>
<a-box position="0 0 0"></a-box>
</a-entity>
```

Play with properties of a 3D object (like: size,position,rotation,scale)

```
<a-entity showcase type="position" from="3 0 0" to="-3 0 0" duration="1000">
<a-box position="0 0 0"></a-box>
</a-entity>
```

Note : `duration` is in `ms`-milliseconds , `1sec = 1000ms` .

---

Made By [Junaid](https://abujuni.dev) .
