import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayResult extends Component {
  render() {
    const { data, isLoading } = this.props;
    if (isLoading) return (<p>carregando...</p>);
    return (
      <section>
        {data ? (
          <>
            <div className="name">
              <p>Name:</p>
              <p>{data.name}</p>
            </div>
            <div className="titles">
              <p>Titles:</p>
              <ul className="titles-ul">
                {data.titles?.map((title, index) => (
                  <li
                    className="titles-li"
                    key={ index }
                  >
                    {title}

                  </li>
                ))}
              </ul>
            </div>
            <div className="aliases">
              <p>Aliases:</p>
              <ul className="aliases-ul">
                {data.aliases?.map((alias, index) => (
                  <li
                    className="aliases-li"
                    key={ index }
                  >
                    {alias}

                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : <p>nenhum resultado</p>}
      </section>
    );
  }
}

DisplayResult.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    titles: PropTypes.string,
    aliases: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.chave1.data,
  isLoading: state.chave1.isLoading,
});

export default connect(mapStateToProps)(DisplayResult);
