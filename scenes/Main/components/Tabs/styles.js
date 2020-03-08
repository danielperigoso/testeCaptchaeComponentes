import styled from 'styled-components/native';
import { tryStatement } from '@babel/types';

export const Container = styled.SafeAreaView`
height: 100px;
marginTop: 20px;

`;

export const TabsContainer = styled.ScrollView.attrs({
 horizontal: true,
 contentContainerStyle: { paddingLeft: 10, paddingRight: 20},
 showsHorizontalScrollIndicator: false,

})`

`;

export const TabItem = styled.View`
height: 100px;
width: 100px;
background: rgba(255, 255, 255, 0.2);
border-radius: 3px;
border: 0.5px;
borderColor: #FAFAFA;
margin-left: 10px;
padding: 10px;
justify-content: space-between;

`;

export const TabText = styled.Text`
font-size: 13px;
color: #FAFAFA;
`;

