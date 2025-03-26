import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import './animation.css';
        @import './btn.css';
        @import './content.css';
        @import './font.css';
        @import './loading.css';
        @import './style.css';
        @import './structure.css';
      `}
    />
  );
};

export default GlobalStyles; 