/* eslint-disable no-nested-ternary */
import React from 'react'

import SadImg from 'assets/icons/sad.svg'
import TextImg from 'assets/icons/text.svg'
import LineImg from 'assets/icons/line.svg'
import NextImg from 'assets/icons/next.svg'
import SmileImg from 'assets/icons/smile.svg'
import HappyImg from 'assets/icons/happy.svg'
import CryingImg from 'assets/icons/crying.svg'
import SmilingImg from 'assets/icons/smiling.svg'
import ImageImg from 'assets/icons/image-icon.svg'
import LevelOneImg from 'assets/icons/level-1.svg'
import LevelTwoImg from 'assets/icons/level-2.svg'
import SickColor from 'assets/icons/sick-color.svg'
import LevelThreImg from 'assets/icons/level-3.svg'
import ConfusedImg from 'assets/icons/neutral-2.svg'
import SmileColor from 'assets/icons/smile-color.svg'

import { useTheme } from 'styled-components/native'
import {
  Line,
  LineTop,
  LineTitle,
  LineTitleFlex,
  LineTextDescription,
} from './styles'

export enum TypeUser {
  symptom = 'symptom',
  feeling = 'feeling',
}

type ListItemType = {
  id: number
  type: TypeUser
  level: number
  createdAt: string
  name: string
  hasAttachments: boolean
  hasDescription: boolean
}

type Prop = {
  item: ListItemType
}

const ListItem: React.FC<Prop> = ({ item }: Prop) => {
  const theme = useTheme()

  const title = () =>
    item.type === TypeUser.feeling ? 'Sentimento' : 'Sintoma'

  const icon = () =>
    item.type === TypeUser.feeling ? (
      <SmileColor
        style={{ top: 15 }}
        color={theme.colors.icon.green}
        width={26}
        height={26}
      />
    ) : (
      <SickColor
        style={{ top: 15 }}
        color={theme.colors.icon.green}
        width={26}
        height={26}
      />
    )

  const iconEmpty = () => (
    <SmileImg color={theme.colors.text.transparent} width={20} height={20} />
  )

  const iconLevel = () =>
    item.level === 1 ? (
      <LevelOneImg width={24} height={24} />
    ) : item.level === 2 ? (
      <LevelTwoImg width={24} height={24} />
    ) : item.level === 3 ? (
      <LevelThreImg width={24} height={24} />
    ) : (
      <></>
    )

  const iconFelling = () =>
    item.level === 1 ? (
      <CryingImg width={24} height={24} />
    ) : item.level === 2 ? (
      <SadImg width={24} height={24} />
    ) : item.level === 3 ? (
      <ConfusedImg width={24} height={24} />
    ) : item.level === 4 ? (
      <HappyImg width={24} height={24} />
    ) : (
      <SmilingImg width={24} height={24} />
    )

  const textFeeling = () =>
    item.level === 1
      ? 'Muito Mal'
      : item.level === 2
      ? 'Mal'
      : item.level === 3
      ? 'Mais ou Menos'
      : item.level === 4
      ? 'Bem'
      : 'Muito Bem'

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('pt-BR')

  return (
    <Line>
      <LineTop>
        {icon()}
        <LineTitleFlex>{title()}</LineTitleFlex>
        <LineTitle>{formatDate(item.createdAt)}</LineTitle>
        <NextImg style={{ top: 15, left: 10 }} width={16} height={16} />
      </LineTop>
      <LineTop>
        {iconEmpty()}
        {item.type === TypeUser.symptom && (
          <LineTextDescription>{item.name}</LineTextDescription>
        )}
        {item.type === TypeUser.feeling && (
          <LineTextDescription>{textFeeling()}</LineTextDescription>
        )}

        {item.type === TypeUser.symptom && iconLevel()}
        {item.type === TypeUser.feeling && iconFelling()}
        {item.hasDescription && (
          <TextImg style={{ marginLeft: 10 }} width={24} height={24} />
        )}
        {item.hasAttachments && (
          <ImageImg style={{ marginLeft: 10 }} width={24} height={24} />
        )}
        {iconEmpty()}
      </LineTop>
      <LineImg style={{ top: -8 }} width={24} height={28} />
    </Line>
  )
}

export default ListItem
