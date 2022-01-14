# filestage_test_challenge

For the old js version look at the branch [javascript](https://github.com/eldimious/filestage_test_challenge/tree/javascript)

### Quick Start ###

In order to run the service, you have to run: 

```shell
node index.js src/data/file1.txt src/data/file2.txt
```

where:
- `src/data/file1.txt`, 
- `src/data/file2.txt` 

are the **paths** for the files that you want to read. I am passing them to the service as **nodejs args** using `process.argv`.

If we do not pass any file path, I return error: `Need to add files paths as arguments`.

### Tests ###

Also, I wrote some tests too. In order to be able to run them you need to: 

```shell
npm install
npm run test
```

### Output ###

The service will return as console's output a string like: `The MVP is the player with nickname: nick3 and total rating: 82` or it will throw an error.
