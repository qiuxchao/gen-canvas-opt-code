import {
	PictureOutlined,
	FontSizeOutlined,
	BorderOutlined,
} from '@ant-design/icons';
import { InputNumber, ColProps, FormItemProps, Input, Select } from 'antd';
import { ComponentType } from '../types';

/** 组件列表 */
export const ComponentList = [
	{
		label: '图片',
		type: 'image' as ComponentType,
		icon: (
			<PictureOutlined
				style={{
					fontSize: 40,
					color: '#666',
				}}
			/>
		),
	},
	{
		label: '文本',
		type: 'text' as ComponentType,
		icon: (
			<FontSizeOutlined
				style={{
					fontSize: 40,
					color: '#666',
				}}
			/>
		),
	},
	{
		label: '矩形',
		type: 'rect' as ComponentType,
		icon: (
			<BorderOutlined
				style={{
					fontSize: 40,
					color: '#666',
				}}
			/>
		),
	},
];

export interface OptionType {
	/** 是否为可选字段 */
	isOptional?: boolean;
	/** Col Props */
	colProps: ColProps;
	/** From.Item Props */
	formItemProps: FormItemProps;
}

export interface OptionsMapType {
	/** 必填配置 */
	required: OptionType[];
	/** 可选配置 */
	optional: OptionType[];
}

/** 组件配置表单 */
export const getComponentOption = (type: ComponentType) => {
	if (!type) return [[], []];
	/** 基础配置 */
	const baseOptions: OptionsMapType = {
		required: [
			{
				colProps: {
					span: 12,
				},
				formItemProps: {
					label: 'X',
					name: 'x',
					children: <InputNumber className="min-w-100" min={0} />,
				},
			},
			{
				colProps: {
					span: 12,
				},
				formItemProps: {
					label: 'Y',
					name: 'y',
					children: <InputNumber className="min-w-100" min={0} />,
				},
			},
			{
				colProps: {
					span: 12,
				},
				formItemProps: {
					label: '宽',
					name: 'width',
					children: <InputNumber className="min-w-100" min={0} />,
				},
			},
			{
				colProps: {
					span: 12,
				},
				formItemProps: {
					label: '高',
					name: 'height',
					children: <InputNumber className="min-w-100" min={0} />,
				},
			},
			{
				colProps: {
					span: 24,
				},
				formItemProps: {
					label: 'name',
					name: 'name',
					children: <Input />,
				},
			},
		],
		optional: [],
	};

	/** 特有配置 */
	const specificOptions: { [key: string]: OptionsMapType } = {
		image: {
			required: [
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '地址',
						name: 'url',
						children: <Input className="w-[280px]" />,
					},
				},
			],
			optional: [
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '圆角',
						name: 'radius',
						children: <InputNumber className="min-w-100" min={0} />,
					},
				},
			],
		},
		text: {
			required: [
				{
					colProps: {
						span: 12,
					},
					formItemProps: {
						label: '颜色',
						name: 'fillStyle',
						children: <Input className="min-w-100" type="color" />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '字体相关',
						name: 'font',
						children: (
							<Input placeholder="示例：normal 400 14px PingFangSC-Regular" />
						),
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '内容',
						name: 'content',
						children: <Input.TextArea />,
					},
				},
			],
			optional: [
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '水平对齐',
						name: 'align',
						children: (
							<Select
								options={[
									{ value: 'left', label: '左' },
									{ value: 'center', label: '中' },
									{ value: 'right', label: '右' },
								]}
							/>
						),
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '垂直对齐',
						name: 'baseline',
						children: (
							<Select
								options={[
									{ value: 'top', label: '上' },
									{ value: 'middle', label: '中' },
									{ value: 'bottom', label: '下' },
								]}
							/>
						),
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '最大宽度',
						name: 'maxWidth',
						children: <InputNumber className="min-w-100" min={0} />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '最多行数',
						name: 'rowCount',
						children: <InputNumber className="min-w-100" min={1} />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '行高',
						name: 'lineHeight',
						children: <InputNumber className="min-w-100" min={0} />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '文本装饰',
						name: 'textDecoration',
						children: (
							<Select options={[{ value: 'line-through', label: '删除线' }]} />
						),
					},
				},
			],
		},
		rect: {
			required: [
				{
					colProps: {
						span: 12,
					},
					formItemProps: {
						label: '填充颜色',
						name: 'fillStyle',
						children: <Input className="min-w-100" type="color" />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '填充模式',
						name: 'mode',
						children: (
							<Select
								options={[
									{ value: 'fill', label: '填充内容区域' },
									{ value: 'stroke', label: '填充边框' },
									{ value: 'both', label: '填充内容和边框' },
								]}
							/>
						),
					},
				},
			],
			optional: [
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '圆角',
						name: 'radius',
						children: <InputNumber className="min-w-100" min={0} />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '边框宽度',
						name: 'lineWidth',
						children: <InputNumber className="min-w-100" min={0} />,
					},
				},
				{
					colProps: {
						span: 24,
					},
					formItemProps: {
						label: '边框颜色',
						name: 'strokeStyle',
						children: <Input className="min-w-100" type="color" />,
					},
				},
			],
		},
	};

	return [
		[...baseOptions.required, ...specificOptions[type].required],
		[...baseOptions.optional, ...specificOptions[type].optional],
	];
};

/** 多行文本换行 class */
export const lineClampMap = (row: number) => {
	const maps: { [key: number]: string } = {
		1: 'line-clamp-1',
		2: 'line-clamp-2',
		3: 'line-clamp-3',
		4: 'line-clamp-4',
		5: 'line-clamp-5',
		6: 'line-clamp-6',
		7: 'line-clamp-7',
		8: 'line-clamp-8',
		9: 'line-clamp-9',
		10: 'line-clamp-10',
	};
	return maps[row];
};
