import * as S from './styles'

type Props = {
  type: 'submit' | 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: JSX.Element
  maxWidthProps?: boolean
}

export const Button = ({
  children,
  title,
  type,
  onClick,
  to,
  maxWidthProps = false
}: Props) => {
  if (type === 'submit' || type === 'button')
    return (
      <S.Button
        maxWidth={maxWidthProps}
        title={title}
        type={type}
        onClick={onClick}
      >
        {children}
      </S.Button>
    )
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
