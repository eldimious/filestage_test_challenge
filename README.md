# filestage_test_challenge

### Quick Start ###

In order to run the service, you have to run: 

```shell
node index.js src/data/file1.txt src/data/file2.txt
```

where `src/data/file1.txt`, `src/data/file2.txt` are the paths to the files that you want to read. I am passing them as **nodeJS args**. 

Also, I wrote some tests too, and in order to be able to run them you need to: 

```shell
npm run test
```

### Output ###

The service will return as console's output a string like: `The MVP is the player with nickname: nick3 and total rating: 82` or it will throw an error.
