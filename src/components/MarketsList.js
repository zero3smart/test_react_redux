import React from 'react';
import MarketCard from './MarketCard';
import '../assets/stylesheets/components/MarketsList.scss';

export default function MarketsList({ markets }) {
  const emptyMessage = (
    <p>There are no markets yet in your collection</p>
  );

  const marketsList = (
    <div className="ui four cards card-wrapper">
      { markets.map(market => <MarketCard market={market} key={market.id} />) }
    </div>
  );

  return (
    <div>
      { markets.length === 0 ? emptyMessage : marketsList }
    </div>
  );
}

MarketsList.propTypes = {
  markets: React.PropTypes.array.isRequired
}
