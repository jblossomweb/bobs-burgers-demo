import randomInteger from './randomInteger'

/**
 * select a random record from a collection for fuzzy testing
 *
 * @function
 * @name randomRecord
 * @param {Array} collection - collection of records
 * @return {Object} - randomly selected record
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const randomRecord = (collection: any[]) =>
  collection[randomInteger(0, collection.length - 1)]

export default randomRecord
