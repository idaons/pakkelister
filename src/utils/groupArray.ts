export interface ArrayGroup<T> {
  category: string;
  items: T[];
}

export interface GroupedArray<T> extends Array<ArrayGroup<T>> {}

/* Tar et array og putter ting i grupper basert på gruppekategorier
 *
 * Feks
 *
 * const myArray = ['Apple', 'Aubergine', 'Lemon'];
 *
 * const inGroups = groupArray(myArray, item => item[0]);
 *
 * console.log(inGroups);
 *
 * // [{category: 'A', array: ['Apple', 'Aubergine']}, {category: 'L', array: ['Lemon']}]
 *
 *  */
export function groupArray<T>(
  items: T[],
  getGroupCategoryForElement: (element: T) => string
): GroupedArray<T> {
  return items.reduce((acc: GroupedArray<T>, arrayEntry) => {
    const currentCategory = getGroupCategoryForElement(arrayEntry);
    const categoryIndex = acc.findIndex(
      (group) => group.category === currentCategory
    );
    if (categoryIndex >= 0) {
      acc[categoryIndex].items.push(arrayEntry);
    } else {
      acc.push({
        category: currentCategory,
        items: [arrayEntry],
      });
    }
    return acc;
  }, []);
}
