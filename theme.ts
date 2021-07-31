import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	colors: {
		brand: {
			lighter: '#FFC0BD',
			light: '#FF7C76',
			default: '#FF5F57',
			dark: '#F22424',
		},
	},
	fonts: {
		heading: `DMSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		body: `DMSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		inter: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
	},
	shadows: {
		lg: `0px 1px 3px 0px rgb(60 64 67 / 30%), 0px 4px 8px 3px rgb(60 64 67 / 15%)`,
		focus: `0px 0px 0px 1px rgba(0,0,0,0.2)`,
	},
	layerStyles: {
		cardPadding: {
			p: 6,
		},
	},
	components: {
		Button: {
			variants: {
				brand: {
					bg: 'transparent',
					borderWidth: '1px',
					color: 'brand.default',
					borderColor: 'brand.default',
					_hover: {
						bg: '#ffe9e8',
					},
					_focus: {
						boxShadow: 'focus',
					},
				},
			},
		},
		Input: {
			variants: {
				outline: {
					field: {
						_hover: {
							borderColor: 'brand.default',
						},
						_focus: {
							borderColor: 'brand.default',
							boxShadow: 'none',
						},
					},
				},
			},
		},
		Accordion: {
			baseStyle: {
				button: {
					_focus: {
						boxShadow: 'focus',
					},
					_hover: {
						bg: 'gray.50',
					},
				},
			},
		},
	},
})
