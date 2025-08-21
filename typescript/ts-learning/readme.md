# Typescript Configuration file 
- How to generate config file
- use of config file
- Convert All ts in the js file at once and together
- Fix error after config file
- Common use of config

# TypeScript Configuration File (`tsconfig.json`)

## Table of Contents
- [1. How to Generate a Config File](#1-how-to-generate-a-config-file)
- [2. Use of Config File](#2-use-of-config-file)
- [3. Convert All `.ts` Files into `.js` at Once](#3-convert-all-ts-files-into-js-at-once)
- [4. Fix Errors After Config File](#4-fix-errors-after-config-file)
- [5. Common Uses of `tsconfig.json`](#5-common-uses-of-tsconfigjson)
- [Quick Example: Minimal `tsconfig.json`](#quick-example-minimal-tsconfigjson)

---

## 1. How to Generate a Config File
To create a default `tsconfig.json` file in your project:
```bash
npx tsc --init
```
or

```bash

tsc --init
```
This will generate a basic configuration file with common settings.

2. Use of Config File
<details> <summary>Click to expand</summary>
Central configuration for the TypeScript compiler.

Defines how the compiler should behave for the entire project.

Manages:

Compilation options (e.g., target, module)

Included/excluded files

Output directory (outDir)

Source root directory (rootDir)

Strict type-checking rules

</details>
3. Convert All .ts Files into .js at Once
<details> <summary>Click to expand</summary>
Run:

```bash

npx tsc
```
or simply:

```bash

tsc
```
TypeScript will look for tsconfig.json in the project root.

It will compile all included TypeScript files to JavaScript as per your configuration (outDir is often set to dist/ or build/).

</details>
4. Fix Errors After Config File
<details> <summary>Click to expand</summary>
Common errors after enabling tsconfig.json:

"Cannot find module" → Add "moduleResolution": "node"

"Cannot find types for..." → Install types:

```bash

npm install --save-dev @types/node
```
Path issues → Set:

```json

"rootDir": "./src",
"outDir": "./dist"
```
Strict mode errors → Disable temporarily:

```json

"strict": false
```
</details>
5. Common Uses of tsconfig.json
<details> <summary>Click to expand</summary>
Target version:

```json

"target": "ES2022"
Module type:
```

```json

"module": "CommonJS" // or "ESNext"
```
Source maps (for debugging):

```json

"sourceMap": true
```
Include/Exclude files:

```json

"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
```
Strict type-checking:

```json

"strict": true

```
Path aliases:


```json

"baseUrl": "./",
"paths": {
  "@utils/*": ["src/utils/*"]
}
```

</details>

Quick Example: Minimal tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}```
