export function groupByArray<ElementType, KeyType>(array: Array<ElementType>, getKey: (value: ElementType) => KeyType) {
    interface GroupedElement<ElementType, KeyType> {
        key: KeyType;
        values: Array<ElementType>;
    };

    return array.reduce((acc: Array<GroupedElement<ElementType, KeyType>>, current: ElementType) => {
        const key =  getKey(current);
        const element = acc.find((v: GroupedElement<ElementType, KeyType>) => v && v.key === key);

        if (element) {
            element.values.push(current);
        } else {
            acc.push({ key, values: [current] });
        }

        return acc;
    }, []);
}