import { useCanvasStore } from '../store';
import { ComponentType } from '../types';
import Component from './Component';

interface PropsType {
	/** 样式 */
	style: React.CSSProperties;
}

/** 画布 */
const Canvas = ({ style }: PropsType) => {
	const { stateList, updateStateList } = useCanvasStore();

	// 放置组件
	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const type = event.dataTransfer.getData('type') as ComponentType;
		switch (type) {
			case 'image': {
				stateList.push({
					type: 'image',
					x: 20,
					y: 20,
					width: 100,
					height: 100,
					name: `image-${stateList.length}`,
					url: 'https://pic.qqtn.com/up/2019-9/15690311636958128.jpg',
				});
				break;
			}
			case 'text': {
				stateList.push({
					type: 'text',
					x: 20,
					y: 20,
					width: 200,
					height: 20,
					name: `text-${stateList.length}`,
					content: '文本内容',
					font: '11px PingFang-SC-Medium',
					fillStyle: '#333',
				});
				break;
			}
			case 'rect': {
				stateList.push({
					type: 'rect',
					x: 20,
					y: 20,
					width: 100,
					height: 100,
					name: `rect-${stateList.length}`,
					fillStyle: '#ccc',
				});
				break;
			}
		}
		updateStateList(stateList);
	};

	return (
		<div
			className='bg-white shadow-[2px_2px_20px_0_rgba(0,0,0,0.25)] overflow-hidden relative'
			style={style}
			onDragOver={e => e.preventDefault()}
			onDrop={handleDrop}
		>
			{stateList.map((state, index) => (
				<Component
					key={state.name}
					type={state.type}
					options={state}
					index={index}
				/>
			))}
		</div>
	);
};

export default Canvas;
