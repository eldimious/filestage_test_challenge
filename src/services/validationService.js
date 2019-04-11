const {
	startsWithAny,
	SUPPORTED_SPORTS,
} = require('../common/utils')

function validateFile(data) {
  try {
    if (!startsWithAny(SUPPORTED_SPORTS, data)) {
      throw new Error('Add file with correct format.');
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}

module.exports.validateFile = validateFile;
