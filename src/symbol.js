import React  from 'react';

export default class Symbol extends React.Component {
    render () {
        const {svg, name, viewBox, className, ...other} = this.props.symbol;

        console.log(svg);

        return (
            <symbol
                {...other}
                id = {this.attribute('id', name, svg)}
                viewBox = {this.attribute('viewBox', viewBox, svg)}
                className = {this.attribute('class', className, svg)}
                dangerouslySetInnerHTML = {this.extractChildren(svg)}
            />
        )
    }

    attribute (name, value, svg) {
        const pattern = new RegExp(`${name}=(?:"|')([^("|')]*)(?:"|')`);

        if (!value) {
            value = pattern.test(svg) ? svg.match(pattern)[1] : null;
        }

        return value;
    }

    extractChildren (svg) {
        console.log(svg);
        return {__html: svg.replace(/(<svg[^>]*>)|(<\/svg>)/g, '')}; // remove svg tags
    }
}

Symbol.propTypes = {
    symbol: React.PropTypes.shape({
        svg: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        viewBox: React.PropTypes.string,
        className: React.PropTypes.string
    }).isRequired
};
