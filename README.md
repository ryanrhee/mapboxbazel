# mapboxbazel

Sample typescript project showing that using `@mapbox/polyline` failing when building with bazel.

`yarn build:bazel` will build with bazel; `yarn build:nobazel` will build without bazel. The first one fails, but the 2nd one succceeds.

# generated files

These files were generated via `npm init @bazel mapboxbazel`:
- .bazelignore
- .bazelrc
- .bazelversion
- .gitignore
- package.json
- WORKSPACE.bazel

The `yarn_install` and `node_repositories` sections of `WORKSPACE.bazel` were set up by me.

`package.json` has been changed to pin dep versions, and add necessary dependencies.
