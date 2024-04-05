// 获取基础类型
export function getBaseType(params: any) {
    const [baseType] = Object.prototype.toString
        .call(params)
        .replace(/\[|\]/g, '')
        .split(' ')
        .reverse();

    return baseType;
}
