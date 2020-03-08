import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function MyInput({ style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
       {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)"/>}
      <TInput {...rest ref={ref}}/>
    </Container>    
  );
 }

  MyInput.PropTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

};

MyInput.defaultProps = {
    icon: null,
    style: {},
};


export default forwardRef(MyInput);  

/**
 * 
 * Exemplo de chamada:
 * 
 * 
 * <Input
 * 
 *   style={{marginTop: 30}}
 * icon="call"
 * paceholder="Digite seu nome"
 * 
 * />
 * 
 *  Uso ref:
 * 
 * 
 * 
 * import {useRef} from 'react'
 * 
 * const emailRef = useRef();
 * const passwordRef = useRef();
 * 
 * 
 * returnKeyType = next, next, send.
 * 
 * input antes do email
 * onSubmitEditing={()=> emailRef.current.focus()}
 * 
 * ref={emailRef}
 * onSubmitEditing={()=> passwordRef.current.focus()}
 * 
 * ref={passwordRef}
 * onSubmitEditing={handleSubmit}
 * 
 * 
 * 
 */