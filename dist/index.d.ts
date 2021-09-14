interface IResultProps {
    /** url路径 */
    url?: string;
    /** 完整的import语句 */
    statements?: string;
}
/**
 * 获取样式文件中的@import语句
 * @param code 代码片段
 * @returns 结果数组
 */
declare const get_imports: (code: string | Buffer) => IResultProps[];
export default get_imports;
