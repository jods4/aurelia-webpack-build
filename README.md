# aurelia-webpack-build
This repo contains demos that I used when developping the new v2.0 webpack plugins for Aurelia.

They are meant to be as simple and straightforward as possible. I made them starting from scratch, without helper libs or CLI.

The companion wiki goes into more details.

> Another user put up a super minimal setup for JS-only projects (no TS, no LESS -- in fact no CSS).
Check it out here: https://github.com/nathanchase/super-minimal-aurelia

1. `No_splits` uses `includeAll` to easily put all of `src` into the bundle, without requiring internal `PLATFORM.moduleName` annotations. 
It's the easiest way to get started with Webpack on an existing project.
Note that you still need `moduleName` when referring to external code.

2. `Traced_deps` uses a more standard tracing approach. Webpack determines what depends on what precisely and bundles it.
The main difference with 1. is that we also use `moduleName` internally.

3. `Code_splits` is the same as 2. but uses `moduleName("module", "chunk")` when defining routes so that area of the application are lazily loaded on demand.

4. `Small_ES6_build` is my test project to see how small a basic Aurelia build can get.
Some restrictions apply, like using ES6 without polyfills or lack of SVG support.
See the wiki page for more infos.

5. `DllReferencePlugin` is an advanced scenario that enables partial compilation and long term caching.
See the wiki page for more infos.

6. `ASPNET` is a setup that incorporate an Aurelia + Webpack front-end into an ASP.NET Core + SPA Services back-end.