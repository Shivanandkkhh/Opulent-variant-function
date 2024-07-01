// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").CartOperation} CartOperation
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  // The cart item
  const operations = input.cart.lines
    .filter(line => 
      line.merchandise.__typename === "ProductVariant" &&
      line.merchandise.product.title.includes(":")
    )
    .map(line => {
      return {
        update: {
          cartLineId: line.id,
          title: line.merchandise.product.title.split(":")[0],
        },
      };
    });

  return operations.length > 0 ? { operations } : NO_CHANGES;
}
// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").CartOperation} CartOperation
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  // The cart item
  const operations = input.cart.lines
    .filter(line => 
      line.merchandise.__typename === "ProductVariant" &&
      line.merchandise.product.title.includes(":")
    )
    .map(line => {
      return {
        update: {
          cartLineId: line.id,
          title: line.merchandise.product.title.split(":")[0],
        },
      };
    });

  return operations.length > 0 ? { operations } : NO_CHANGES;
}