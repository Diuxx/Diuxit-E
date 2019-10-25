import React from 'react';
import Item from './Item';

class Produit extends React.Component {
  render() {
    let items;
    if(this.props.projects) {
      items = this.props.projects.map(project => {
        return (
          <Item key={project.name} project={project} />
        )
      });
    }
    return (
      <div className="Produit">
        <div class="container">
          <div class="row">
            { items }
          </div>
        </div>
      </div>
    );
  }
}

export default Produit;
