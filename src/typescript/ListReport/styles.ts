import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import Text from 'components/commons/Text'

export const Container = styled.View`
  flex: 1;
`
export const SafeAreaHeader = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.light};
`

export const Content = styled.View`
  padding: 16px;
`

export const BottomViewWrapper = styled.View`
  margin-top: auto;
`

export const SafeAreaViewFooter = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.light};
`

export const Footer = styled.View`
  padding: 8px 16px;
  margin-top: auto;

  background-color: ${({ theme }) => theme.colors.background.light};

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border.disabled};
`
export const Card = styled.View`
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
  flex: 1;
  justify-content: center;
`

export const Line = styled.View`
  padding: 16px;
`

export const CardTopText = styled(Text)`
  font-size: 18px;
  color: #000;
`

export const CodeText = styled(Text)`
  font-size: 56px;
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text.green};
`

export const CardBottomText = styled(Text)`
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  color: #617c8b;
`

export const LineTop = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`
export const LineTitle = styled(Text)`
  font-size: 16px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text.dark};
`
