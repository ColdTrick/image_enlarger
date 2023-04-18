Image Enlarger
==============

![Elgg 5.0](https://img.shields.io/badge/Elgg-5.0-green.svg)
![Lint Checks](https://github.com/ColdTrick/image_enlarger/actions/workflows/lint.yml/badge.svg?event=push)
[![Latest Stable Version](https://poser.pugx.org/coldtrick/image_enlarger/v/stable.svg)](https://packagist.org/packages/coldtrick/image_enlarger)
[![License](https://poser.pugx.org/coldtrick/image_enlarger/license.svg)](https://packagist.org/packages/coldtrick/image_enlarger)

Allows images to be enlarged in content. Clicking them will open a lightbox with the image

## How it works

All images in the content of a page will be checked if they can be enlarged in a lightbox.

The following conditions must apply:

- The image is not inside a link
- The image must have a `src` attribute

### High resolution alternative

If you have a high resolution alternative of the image you wish to show in the lightbox, you can set a data attribute with the high resolution URL.

Set the URL in the attribute `data-highres-url` on the `img` tag.
