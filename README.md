# f2025-lab09

## Running

1. Follow the directions in the lab instructions to set up a Google Cloud Vision API account and ensure you are logged in
1. `npm i`
1. `npm run compile`
1. `npm run start`

If your environment is properly set up, you should get output similar to:

```bash
$ npm run start

> lab09@1.0.0 start
> node .

Running logo detection on ./images/cmu.jpg
Running logo detection on ./images/logo-types-collection.jpg
Running logo detection on ./images/not-a-file.jpg
File ./images/not-a-file.jpg not found
"Carnegie Mellon University" found in in file ./images/cmu.jpg
Average score for ./images/cmu.jpg: 0.8718382120132446
"Starbucks" found in in file ./images/logo-types-collection.jpg
"Gillette" found in in file ./images/logo-types-collection.jpg
"Durex" found in in file ./images/logo-types-collection.jpg
"CNN" found in in file ./images/logo-types-collection.jpg
"Martini Racing" found in in file ./images/logo-types-collection.jpg
"Revolut" found in in file ./images/logo-types-collection.jpg
Average score for ./images/logo-types-collection.jpg: 0.8600353499253591
Error: implement mainAsync
    at mainAsync (file:///home/jlacomis/working/17-214/f24/f24-lab09/dist/index.js:55:19)
    at file:///home/jlacomis/working/17-214/f24/f24-lab09/dist/index.js:65:1
```

## Async-ify-ing

Reimplement the Promise version of `main` as an async version (in `mainAsync`). Your version of the code should not use `.then` and it should use `try/catch` instead of `.catch`.
