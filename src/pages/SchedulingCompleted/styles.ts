import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.header};
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.title}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_bold};

  margin: 46px 0 16px;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.text.details};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};

  text-align: center;
  line-height: 25px;
`;


export const Footer = styled.View`
  width: 100%;
  align-items: center;
  padding: 80px 0;
`;


