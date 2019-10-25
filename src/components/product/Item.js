import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Item extends React.Component {
  render() {
    console.log(this.props);
    return (
        <div class="col-4 item-card">
            <div class="card card-item">
                <img src={this.props.project.pic} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.project.name}</h5>
                    <p class="card-text">{this.props.project.description}</p>
                    <a href={'product/' + this.props.project.id} class="btn btn-primary">show me</a>
                    <a href="#" class="btn btn-primary">
                      <FontAwesomeIcon icon={ faCoffee }></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Item;