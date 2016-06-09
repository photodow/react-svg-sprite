import React from 'react';
import Symbol from './symbol';

export default class SvgSprite extends React.Component {
    render () {
        const {symbols, style, ...other} = this.props;

        return (
            <svg {...other} style={style}
                xmlns="http://www.w3.org/2000/svg">
                {symbols.map(symbol => {
                    return <Symbol key={symbol.name} symbol={symbol} />;
                })}
            </svg>
        );
    }
}

SvgSprite.propTypes = {
    symbols: React.PropTypes.arrayOf(
        React.PropTypes.object.isRequired
    ).isRequired,
    style: React.PropTypes.object
};

SvgSprite.defaultProps = {
    style: {display: 'none'}
};
