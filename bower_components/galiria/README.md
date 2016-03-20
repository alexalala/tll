# Galiria
Galiria is a minimal js and css image gallery.

![Galiria gif](https://zippy.gfycat.com/FickleCloudyAdamsstaghornedbeetle.gif)

# How to use it
Get the source using:

`npm install galiria --save`

`bower install galiria --save`

Include the minified .css and .js files in your .html file, and create an instance of Galiria with `new Galiria()`.

Create a `<div class="galiria">`, and for each image, create a `<figure>` element with its `<img>` tag and `<figcaption>` and you should be on the go.

Just like this example:
```
<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
  <!-- this is basic functionality of container. please use it. -->
  <link rel="stylesheet" href="components/galiria/build/galiria.min.css">

  <!-- this can be edited to fit your styling needs. -->
  <link rel="stylesheet" href="components/galiria/build/galiria.theme.min.css">
</head>
<body>
  <div class="galiria">
    <figure>
      <img src="http://placehold.it/1024x640">
      <figcaption>Figure Caption 1</figcaption>
    </figure>
    <figure>
      <img src="http://placehold.it/1024x640">
      <figcaption>Figure Caption 2</figcaption>
    </figure>
  </div>

  <script src="components/galiria/build/galiria.min.js"></script>
  <script>new Galiria()</script>
</body>
</html>
```
