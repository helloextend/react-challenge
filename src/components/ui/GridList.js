import styled from '@emotion/styled'

function GridList({ children, customStyles }) {
  return <Grid customStyles={customStyles}>{children}</Grid>
}

const Grid = styled.ul((props) => ({
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(min-content,max-content))',
  gridTemplateRows: '1fr',
  gap: '2rem',
  height: '100%',
  width: '100%',
  padding: '0',
  margin: '0',
  ...props.customStyles,
  '@media only screen and (max-width: 600px)': {
    gap: '1rem',
  },
}))

export default GridList
