import { h } from 'preact';
import { Motion, spring, presets } from 'react-motion';
import { PostPreview } from '../post-preview';

const ROW_LENGTH = 3;
const BOX_HEIGHT = 5;
const BOX_WIDTH = 16;
const row = index => Math.ceil((index + 1) / ROW_LENGTH) - 1;
const column = index => index % ROW_LENGTH;

const style = index => ({
	translateX: spring(
		BOX_WIDTH * column(index) +
			// hack to add a gutter
			column(index),
		presets.stiff
	),
	translateY: spring(
		BOX_HEIGHT * row(index) +
			// hack to add a gutter
			row(index),
		presets.stiff
	)
});

export const Main = ({ selectedPosts }) => (
	<main class="dib v-top w-two-thirds ma3">
		{selectedPosts.map((post, index) => (
			<Motion key={post.id} style={style(index)}>
				{({ translateX, translateY }) => (
					<div
						style={{
							transform: `translate3d(${translateX}rem, ${translateY}rem, 0)`,
							zIndex:
								index === 0 ? 99 : selectedPosts.length - index,
							width: `${BOX_WIDTH}rem`,
							position: 'absolute',
							background: 'white'
						}}
					>
						<PostPreview post={post} />
					</div>
				)}
			</Motion>
		))}
	</main>
);
