// const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const {
//   readFile,
// } = require('../../src/services/fileService');

// chai.use(chaiAsPromised);
// const {
//   expect,
// } = chai;

// describe('fileService service tests', () => {
//   describe('test readFile method', () => {
//     it('should return data without any error', async () => {
//       const data = await readFile('src/data/file2.txt', 'utf8');
//       expect(data).to.be.an('string');
//     });
//     it('should return error', async () => {
//       await expect(readFile('../src/data/file2.txt', 'utf8')).to.eventually.be.rejectedWith(Error);
//     });
//   });
// });
