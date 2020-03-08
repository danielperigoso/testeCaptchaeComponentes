import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function MyButton({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
          <ActivityIndicator size="small" color='#FFF'/>
      )
      :(
        <Text>{children}</Text>
      )}
    </Container>    
  );
}


MyButton.PropTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,

};

MyButton.defaultProps = {
    loading: false,
};

/**
 * 
 * Exemplo:
 * 
 * <Button>Entrar </Button>
 */

