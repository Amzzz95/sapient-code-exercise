# Sapient-code-exercise
Need to display spaceX Launch Progrmas with filters


### Quick Start

```shell
$ git clone https://github.com/Amzzz95/sapient-code-exercise.git
$ cd sapient-code-exercise
$ git checkout develop
$ npm install
$ npm run webpack
$ npm run dev
```


### Branches

* **master**: Production Build
* **develop**: Dev Build


### Working

* At start when url is hit, the data is coming from server and displayed on UI.
* When any filter is applied, API is hit from UI to update data.
* Also on applying filters, url params are get updated or added.
* When page is reloaded with some applied filters then data is server side rendered.
