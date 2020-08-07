export const and = (...conditions) => input => conditions.every(condition => condition(input))
export const or = (...conditions) => input => conditions.some(condition => condition(input))
