export const Card = ({ children }) => {
  return (
    <div style={{ border: '2px solid black'}}>
      {children}
    </div>
  );
}

export const CardHeader = ({ title }) => {
  return (
    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
      {title}
    </div>
  )
}

export const CardBody = ({ children }) => {
  return (
    <div style={{ color: '#333' }}>
      {children}
    </div>
  )
}

export const CardFooter = ({ children }) => {
  return (
    <div style={{ borderTop: '1px solid black' }}>
      {children}
    </div>
  )
}