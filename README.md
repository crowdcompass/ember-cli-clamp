# ember-cli-clamp
ember-cli addon for clamp.js: https://github.com/josephschmitt/Clamp.js

##Notes
* Allows for Clamp.js's `clamp` option by using the `lines` attribute (see examples below)
* Disables Clamp.js's `useNativeClamp` because native clamping produces unsatisfactory results
* Listens for window resize events and re-renders truncated text.

##Caveats
* Loading webfonts after rendering can change the number of characters that should be truncated. A valid workaround is to use an initializer for loading webfonts, thus guaranteeing that the clamping will occur after the content is done rendering.

##Basic usage
The default number of lines is 2.
```
{{#clamp-js}}
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel placerat magna. Pellentesque accumsan lobortis aliquam. Vestibulum feugiat pellentesque nisi, nec fringilla felis bibendum non. Nulla quis vulputate sapien. Vivamus id nibh eu ipsum fermentum sollicitudin at vitae sapien. Cras a convallis turpis. Donec finibus mauris vel risus vulputate tempus. Vivamus nulla diam, porta quis tempus sed, dictum id felis. Praesent dignissim hendrerit facilisis. In scelerisque elit at nunc consectetur consectetur. Nulla facilisi. Vestibulum in orci nec diam consequat molestie non eu massa. Ut interdum vestibulum sem lobortis commodo. Aenean dictum, urna sit amet condimentum ornare, nisi enim ultricies lacus, sed placerat risus neque a tellus. Suspendisse non mauris quam.
{{/clamp-js}}
```

##With declared number of lines
```
{{#clamp-js lines=3}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel placerat magna. Pellentesque accumsan lobortis aliquam. Vestibulum feugiat pellentesque nisi, nec fringilla felis bibendum non. Nulla quis vulputate sapien. Vivamus id nibh eu ipsum fermentum sollicitudin at vitae sapien. Cras a convallis turpis. Donec finibus mauris vel risus vulputate tempus. Vivamus nulla diam, porta quis tempus sed, dictum id felis. Praesent dignissim hendrerit facilisis. In scelerisque elit at nunc consectetur consectetur. Nulla facilisi. Vestibulum in orci nec diam consequat molestie non eu massa. Ut interdum vestibulum sem lobortis commodo. Aenean dictum, urna sit amet condimentum ornare, nisi enim ultricies lacus, sed placerat risus neque a tellus. Suspendisse non mauris quam.
{{/clamp-js}}
```

##With declared height
```
{{#clamp-js lines="100px"}}
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel placerat magna. Pellentesque accumsan lobortis aliquam. Vestibulum feugiat pellentesque nisi, nec fringilla felis bibendum non. Nulla quis vulputate sapien. Vivamus id nibh eu ipsum fermentum sollicitudin at vitae sapien. Cras a convallis turpis. Donec finibus mauris vel risus vulputate tempus. Vivamus nulla diam, porta quis tempus sed, dictum id felis. Praesent dignissim hendrerit facilisis. In scelerisque elit at nunc consectetur consectetur. Nulla facilisi. Vestibulum in orci nec diam consequat molestie non eu massa. Ut interdum vestibulum sem lobortis commodo. Aenean dictum, urna sit amet condimentum ornare, nisi enim ultricies lacus, sed placerat risus neque a tellus. Suspendisse non mauris quam.
{{/clamp-js}}
```
