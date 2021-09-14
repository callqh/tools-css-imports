import strip from 'strip-comments';
interface IResultProps {
	/** url路径 */
	url?: string;
	/** 完整的import语句 */
	statements?: string;
}
// 匹配规则
const MATCH_RULE = new RegExp(
	/@import *(?:url\(['"]?([^'")]+)['"]?\)|['"]([^'"]+)['"]);?/g
);

/**
 * 获取样式文件中的@import语句
 * @param code 代码片段
 * @returns 结果数组
 */
const get_imports = (code: string | Buffer, options: {}) => {
	// 将buffer转成字符串
	code = code.toString();
	// 去除注释
	code = strip.block(code);
	// 定义最后返回的结果
	const result: IResultProps[] = [];
	let match_list;
	// 循环遍历代码段，直至匹配结果为空
	while ((match_list = MATCH_RULE.exec(code as string))) {
		// 存入结果数组
		result.push({
			statements: match_list?.[0],
			url: match_list?.[1] || match_list?.[2],
		});
	}
	// 返回结果
	return result;
};

export default get_imports;
