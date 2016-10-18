import React from 'react';

const imgUrl = 'public/milky-way.jpg'

const styles = {
    container: {
        width: '100%',
        color: '#fff',
        height: 150,
        marginBottom: 15,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
    }
}

export default class Navbar extends React.Component {
  render() {
    return <div style={styles.container}> 
                
           </div>;
  }
}