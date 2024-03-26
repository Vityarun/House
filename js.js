function deepCopy(obj, visited = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (visited.has(obj)) {
        return visited.get(obj);
    }

    const copy = Array.isArray(obj) ? [] : {};

    visited.set(obj, copy);

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key], visited);
        }
    }

    return copy;
}