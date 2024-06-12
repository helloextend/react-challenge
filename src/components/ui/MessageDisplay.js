import styled from '@emotion/styled'

function MessageDisplay({ children }) {
  return <Message>{children}</Message>
}

const Message = styled.p({
  color: '#8a8a8a',
  fontSize: '1.25rem',
  fontWeight: '600',
  textAlign: 'center',
})

export default MessageDisplay
