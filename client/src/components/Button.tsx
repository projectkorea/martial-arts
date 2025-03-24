import styled from '@emotion/styled';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: #007AFF;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #545b62;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 2px solid #007AFF;
          color: #007AFF;
          &:hover {
            background-color: #007AFF;
            color: white;
          }
        `;
      default:
        return `
          background-color: #007AFF;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
    }
  }}
`;

export default Button; 