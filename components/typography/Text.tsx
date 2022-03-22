import { styled } from '../../styles/stitches.config'

export const Text = styled('span', {
	variants: {
		size: {
			sm: {
				fontSize: '$2',
				'@bp2': {
					fontSize: '$3',
				},
			},
			md: {
				fontSize: '$4',
				'@bp2': {
					fontSize: '$5',
				},
			},
			lg: {
				fontSize: '$6',
				'@bp2': {
					fontSize: '$8',
				},
			},
			xl: {
				fontSize: '$8',
				'@bp2': {
					fontSize: '$10',
				},
			},
		},
		link: {
			true: {
				color: '$primary',
				'@dark': {
					color: '$tertiary',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})
