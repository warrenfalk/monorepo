# Monorepo
## Purpose
This repo demonstrates two monorepo setups that are compatible with conventional tools, including TypeScript.  The intent is that these work with minimal additional manual configuration than would be needed in a non-monorepo setup.

This can be used to demonstrate current problems such as incompatibilities with tools that mostly arise from the re-implementation of module resolution rules (e.g. not using node's own) and possibly additionally by departure from node's algorithm.

## Contents
This contains both a yarn 1 and a yarn 2 repo which are mostly identical, except for some differences in how workspaces are configured between yarn 1 and 2.

Each contains a "test" script which demonstrates everything either working or what is not working, which can be used to help implement compatibility fixes to components that need them.

## Goals
### Components
Currently this demonstrates the following components
1. Yarn 2 and 1
2. Node (app and library) (version 12 of node)
3. TypeScript (version 3.8)
4. Fuse-box app (version 4 @next)

Others, such as webpack-based, and perhaps create-react-app, etc., will eventually be added.

### Capabilities
The following are the intended goals of the setup
1. Package structure that mirrors standalone packages as much as possible
	* Each package can and must<sup>1</sup> declare its own dependencies
	* Each package has its own tests
	* Packages can and must<sup>1</sup> declare dependencies between each other.
2. Conventional tools work without the need to memorize additional manual rituals to make them work.  Things that should work (from each package) are:
	* `yarn add somelib`
	* `yarn test`
	* `yarn tsc --build --watch`
	* Some way to `yarn add` a local dependency




___
<sup>1</sup> Yarn 1 workspaces (and also Lerna), because it uses a shared node_modules model automatically shares all dependencies with all packages in all workspaces, so that a package can require/import from a library that is not in its dependencies.  Yarn 2 is the solution to this issue.  Yarn 1 will eventually be removed from this demo as soon as Yarn 2 passes all requirements here.
