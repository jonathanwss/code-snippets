import styled from 'styled-components/native'
import Text from 'components/commons/Text'

export const Line = styled.View`
  padding: 16px;
  max-height: 80px;
  padding-left: 8px;
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

export const LineTitleFlex = styled(LineTitle)`
  flex: 3;
`

export const LineTextDescription = styled(LineTitleFlex)`
  color: #263238;
`
