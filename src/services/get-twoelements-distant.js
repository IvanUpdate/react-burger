export function getTwoElementsDistant(firstElement, secondElement) {
    return firstElement.current.getBoundingClientRect().top - secondElement.current.getBoundingClientRect().top;
}