import React from 'react';
import Produit from '../components/product/Produit';
import Info from '../navigation/Info';
import { BrowserRouter as Router, Route } from "react-router-dom";

class AppRouter extends React.Component {
  render() {  
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Info} />
        </div>
      </Router>
    );
  }
}

function Home() {
    var state = {
      produits: [
        {
          id: 0, name: 'BTrash', author: 'bill & ci.',
          pic: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2011%2F07%2Fandroid-robot.jpg&client=amp-blogside-v2&signature=a9b2341f2cc0aea2618a48a7d38fc5557dbf7d67', 
          description: 'BTrash is a smart trash who detect automatically our empty beer can', price: '999'
        },
        {
          id: 1, name: 'NOSNOOZ', author: 'Jean Paul & Marc',
          pic: 'https://live.staticflickr.com/4566/38464609096_254db6377e_b.jpg',
          description: 'NoSnooz is a connected bird who did\'nt stop when he start singing for the fisrt time', price: '1'
        },
        {
          id: 2, name: 'Zy-Projector', author: 'Yann Brown',
          pic: 'https://s3files.core77.com/blog/images/416345_34481_47867_QGTBkwC8U.jpg', 
          description: '-18 content care..', price: '1999.99'
        },
        {
          id: 3, name: 'Yaga-Light C9', author: 'Nicolas',
          pic: 'https://static.electronicsweekly.com/news/wp-content/uploads/sites/16/2015/04/29apr15figure2_office-scene.jpg', 
          description: 'Turn the light on/off with an easy wink. captors is the key ! :)', price: '10'
        }
      ]      
    };
  
    return (
      <div className="Home">
        <Produit projects={state.produits}/>
      </div>
    );
}

export default AppRouter;