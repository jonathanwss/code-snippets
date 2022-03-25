import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import Text from 'components/commons/Text'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.darker};
`
export const ViewRadius = styled.View`
  background-color: ${({ theme }) => theme.colors.background.light};
  height: 80%;
  margin-top: 65px;
  border-top-start-radius: 50px;
  border-top-end-radius: 50px;
`
export const FirstIcon = styled.View`
  margin-top: -30px;
  background-color: ${({ theme }) => theme.colors.background.light};
  width: 70px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
  align-self: center;
  justify-content: center;
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
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Line = styled.View`
  padding: 16px;
  padding-left: 0px;
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
  font-size: 16px;
  margin-top: 16px;
  text-align: center;
  color: #617c8b;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const CardBottomTextDate = styled(CardBottomText)`
  margin-top: 5px;
`

export const TitleText = styled(Text)`
  font-size: 18px;
  margin-top: 16px;
  text-align: center;
  color: #00a0a0;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const TitleTextBold = styled(TitleText)`
  font-weight: bold;
`

export const DescriptionText = styled(Text)`
  font-size: 16px;
  margin-top: 16px;
  text-align: center;
  color: #263238;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const DescriptionTextLevel = styled(DescriptionText)`
  margin-bottom: 30px;
`

export const DescriptionTextLowMarginTop = styled(DescriptionText)`
  margin-top: -10px;
  text-align: left;
`

export const LineTop = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const LineTitle = styled(Text)`
  font-size: 16px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text.dark};
  flex: 3;
  font-family: ${({ theme }) => theme.fonts.regular};
`
