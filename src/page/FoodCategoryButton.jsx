import React, { useState } from 'react';

const FoodCategoryButton = ({ category, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dynamicStyles = {
    ...styles.button,
    transform: isHovered ? 'scale(1.2)' : 'none',  
    boxShadow: isHovered ? '0 0 10px #fff' : 'none', 
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyles}
    >
      <img src={category.image} alt={category.name} style={styles.image} />
      <span style={styles.text}>{category.name}</span>
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    padding: '15px',
    backgroundColor: '#35292A',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '130px',
    height: '160px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',  
    marginTop: '110px',  
  },
  image: {
    width: '100%',
    height: '80%',
  },
  text: {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Arial, sans-serif'
  }
};

export default FoodCategoryButton;