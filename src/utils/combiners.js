export const and = input => (...conditions) => conditions.every(condition => condition(input))
export const or = input => (...conditions) => conditions.some(condition => condition(input))
