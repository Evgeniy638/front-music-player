import { Slider, withStyles } from "@material-ui/core";

const CustomSlider = withStyles({
    root: {
        color: '#52af77',
        height: 4,
        margin: '0 12px'
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -6,
        marginLeft: -8,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 4,
        borderRadius: 2,
    },
    rail: {
        height: 4,
        borderRadius: 2,
    },
})(Slider);

export default CustomSlider;
