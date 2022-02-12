export function getTwoElementsDistant(firstElement:any, secondElement:any) {
    return firstElement.current.getBoundingClientRect().top - secondElement.current.getBoundingClientRect().top;
}